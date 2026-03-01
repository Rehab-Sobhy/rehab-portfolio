import './style.css'

const projects = [
    {
        title: "Dawag",
        category: "Fashion E-commerce",
        description: "A premium lifestyle shopping experience with elegant Arabic UI and seamless navigation for modern shoppers.",
        image: "/dawag.png",
        figma: "https://www.figma.com/proto/NQC8nvZtnpI4N1y1TLJOK9/Ui-Dawag-User?node-id=906-24633&scaling=scale-down&content-scaling=fixed",
        tags: ["Flutter", "Dart", "Firebase"]
    },
    {
        title: "Rento",
        category: "Real Estate Rental",
        description: "Modern property management and rental application focused on user-centric search.",
        image: "/rento.png",
        figma: "https://www.figma.com/design/LRaIVkk3megR8uDoKLd1cs/Rento?node-id=0-1",
        tags: ["Flutter", "Provider", "Maps API"]
    },
    {
        title: "EGYM",
        category: "Health & Fitness",
        description: "Comprehensive fitness tracking and gym management system for workout optimization.",
        image: "/egym.png",
        figma: "https://www.figma.com/design/VDe1xYxOdXCPGVvgJH4zRg/EGYM?node-id=40-233",
        tags: ["Flutter", "BloC", "Local DB"]
    },
    {
        title: "Real Estate SAR",
        category: "Property Technology",
        description: "Specialized property listing platform for the SAR market with WhatsApp integration.",
        image: "/real_estate.png",
        figma: "https://www.figma.com/design/QrVn31AoT06JUeitT4nMbe/Real-estate-and-construction-technology?node-id=582-1290",
        tags: ["Flutter", "Dio", "REST API"]
    },
    {
        title: "Parking App",
        category: "Smart City Solution",
        description: "Real-time parking spot finder and booking system to reduce urban congestion.",
        image: "/parking.png",
        figma: "https://www.figma.com/design/LY6QtmV8Ug7rXyMDrwWW4Q/parking?node-id=76-464",
        tags: ["Flutter", "Firebase", "Geolocation"]
    }
];

const skills = [
    "Flutter", "Dart", "Firebase", "Provider", "BloC",
    "REST API", "Dio", "Hive", "SqfLite", "Git", "OOP", "Solid Principles"
];

document.querySelector('#app').innerHTML = `
  <div class="blob" style="top: 10%; left: 10%;"></div>
  <div class="blob" style="bottom: 10%; right: 10%; background: radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%);"></div>

  <header>
    <nav>
      <div class="logo">REHAB.DEV</div>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="hero">
    <div class="hero-content">
      <div class="badge">AVAILABLE FOR WORK</div>
      <h1>Building the Future of Mobile with <span style="color: var(--accent-primary)">Flutter</span>.</h1>
      <p>I am Rehab Sobhy, a passionate Flutter Developer dedicated to crafting high-performance, beautiful cross-platform experiences at the intersection of design and code.</p>
      <div class="cta-group">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-outline">Let's Talk</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-image-container">
        <img src="/rehab.png" alt="Rehab Sobhy">
      </div>
    </div>
  </section>

  <section id="projects">
    <span class="section-tag">Portfolio</span>
    <h2>Featured Projects</h2>
    <div class="grid grid-3">
      ${projects.map(p => `
        <div class="card">
          <div class="card-img-wrap">
            <img src="${p.image}" alt="${p.title}">
            <a href="${p.figma}" target="_blank" class="figma-overlay">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
              View Figma
            </a>
          </div>
          <span class="card-cat">${p.category}</span>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="tags">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <section id="skills">
    <span class="section-tag">Expertise</span>
    <h2>Technical Arsenal</h2>
    <div class="grid grid-3">
      ${skills.map(skill => `
        <div class="skill-item">
          <div class="skill-icon">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 18l10-5-10-5-10 5 10 5z"/></svg>
          </div>
          <span style="font-weight: 600;">${skill}</span>
        </div>
      `).join('')}
    </div>
  </section>

  <section id="contact" style="text-align: center;">
    <span class="section-tag">Get in Touch</span>
    <h2>Ready to build something amazing?</h2>
    <p style="margin-bottom: 3rem;">I'm always open to discussing new projects, creative ideas or looking for opportunities.</p>
    <div style="display: flex; justify-content: center; gap: 2rem;">
      <a href="mailto:rehabsobhy.eng@gmail.com" class="btn btn-primary">Email Me</a>
      <a href="https://linkedin.com/in/rehab-sobhy-94910b274" target="_blank" class="btn btn-outline">LinkedIn</a>
    </div>
  </section>

  <footer style="padding: 4rem 2rem; border-top: 1px solid var(--glass-border); text-align: center;">
    <p style="color: var(--text-secondary); font-size: 0.9rem;">&copy; 2024 Rehab Sobhy. Crafted with passion & Flutter expertise.</p>
  </footer>
`

// Mouse Follow Effect for Blobs
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {
        const factor = (index + 1) * 20;
        blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});
