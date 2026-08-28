/**
 * Minimal Local Canvas Particles Script
 * Lightweight alternative to heavy libraries.
 */
class ParticlesBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.numParticles = window.innerWidth < 768 ? 40 : 100;
    this.mouse = { x: null, y: null };
    
    this.init();
    this.animate();
    
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = this.canvas.parentElement.offsetHeight;
      this.initParticles();
    });
    
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });
    
    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }
  
  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = this.canvas.parentElement.offsetHeight;
    this.initParticles();
  }
  
  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(new Particle(this.canvas.width, this.canvas.height));
    }
  }
  
  animate() {
    requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      this.particles[i].draw(this.ctx);
      
      // Connect particles
      for (let j = i; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(25, 181, 255, ${0.15 - distance / 800})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
          this.ctx.closePath();
        }
      }
      
      // Mouse interaction
      if (this.mouse.x && this.mouse.y) {
        const dx = this.particles[i].x - this.mouse.x;
        const dy = this.particles[i].y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          this.particles[i].x += dx / 40;
          this.particles[i].y += dy / 40;
        }
      }
    }
  }
}

class Particle {
  constructor(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() * 1) - 0.5;
    this.speedY = (Math.random() * 1) - 0.5;
    this.w = w;
    this.h = h;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x > this.w) this.x = 0;
    if (this.x < 0) this.x = this.w;
    if (this.y > this.h) this.y = 0;
    if (this.y < 0) this.y = this.h;
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(25, 181, 255, 0.4)';
    ctx.fill();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ParticlesBackground('heroParticles');
});
