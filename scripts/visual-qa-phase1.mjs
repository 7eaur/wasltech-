import puppeteer from 'puppeteer-core';
import fs from 'node:fs/promises';

const chrome = process.env.CHROME_BIN || '/usr/bin/google-chrome';
const baseUrl = process.env.QA_BASE_URL || 'http://127.0.0.1:8080';
const pages = ['index.html', 'services.html', 'portfolio.html', 'contact.html'];
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 }
];
const themes = ['light', 'dark'];

await fs.mkdir('qa-artifacts/screens', { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  executablePath: chrome,
  args: ['--no-sandbox', '--disable-dev-shm-usage']
});

const report = [];

for (const route of pages) {
  for (const viewport of viewports) {
    for (const theme of themes) {
      const page = await browser.newPage();
      const errors = [];
      const failedRequests = [];

      page.on('pageerror', error => errors.push(String(error)));
      page.on('console', message => {
        if (message.type() === 'error') errors.push(message.text());
      });
      page.on('requestfailed', request => {
        failedRequests.push({
          url: request.url(),
          error: request.failure()?.errorText || 'request failed'
        });
      });

      await page.setViewport({ width: viewport.width, height: viewport.height, deviceScaleFactor: 1 });
      await page.evaluateOnNewDocument(selectedTheme => {
        localStorage.setItem('wt-theme', selectedTheme);
      }, theme);

      const response = await page.goto(`${baseUrl}/${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.waitForSelector('site-header .header', { timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 350));

      const metrics = await page.evaluate(() => {
        const root = document.documentElement;
        const body = document.body;
        const header = document.querySelector('.header');
        const h1 = document.querySelector('h1');
        const visibleImages = [...document.images].filter(img => {
          const rect = img.getBoundingClientRect();
          return rect.bottom > 0 && rect.top < innerHeight;
        });
        return {
          theme: root.dataset.theme || '',
          documentScrollWidth: root.scrollWidth,
          documentClientWidth: root.clientWidth,
          bodyScrollWidth: body.scrollWidth,
          horizontalOverflow: root.scrollWidth > root.clientWidth + 1 || body.scrollWidth > root.clientWidth + 1,
          h1Text: h1?.textContent?.trim() || '',
          h1FontSize: h1 ? getComputedStyle(h1).fontSize : '',
          headerHeight: header ? Math.round(header.getBoundingClientRect().height) : 0,
          visibleImages: visibleImages.length,
          craftLoaded: [...document.styleSheets].some(sheet => (sheet.href || '').includes('craft-system.css')),
          bodyBackground: getComputedStyle(body).backgroundColor
        };
      });

      const baseName = `${route.replace('.html','')}-${viewport.name}-${theme}`;
      await page.screenshot({ path: `qa-artifacts/screens/${baseName}.png`, fullPage: true });

      report.push({
        route,
        viewport,
        theme,
        status: response?.status() || 0,
        errors,
        failedRequests,
        ...metrics
      });

      await page.close();
    }
  }
}

await browser.close();

const summary = {
  generatedAt: new Date().toISOString(),
  totalStates: report.length,
  overflowStates: report.filter(item => item.horizontalOverflow).map(item => ({
    route: item.route,
    viewport: item.viewport.name,
    theme: item.theme,
    documentScrollWidth: item.documentScrollWidth,
    documentClientWidth: item.documentClientWidth
  })),
  errorStates: report.filter(item => item.errors.length || item.failedRequests.length).map(item => ({
    route: item.route,
    viewport: item.viewport.name,
    theme: item.theme,
    errors: item.errors,
    failedRequests: item.failedRequests
  })),
  missingCraftLayer: report.filter(item => !item.craftLoaded).map(item => ({
    route: item.route,
    viewport: item.viewport.name,
    theme: item.theme
  })),
  states: report
};

await fs.writeFile('qa-artifacts/report.json', JSON.stringify(summary, null, 2));

console.log(JSON.stringify({
  totalStates: summary.totalStates,
  overflowStates: summary.overflowStates.length,
  errorStates: summary.errorStates.length,
  missingCraftLayer: summary.missingCraftLayer.length
}, null, 2));

if (summary.overflowStates.length || summary.errorStates.length || summary.missingCraftLayer.length) {
  process.exitCode = 1;
}
