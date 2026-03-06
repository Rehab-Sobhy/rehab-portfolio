import './style.css'

const isProd = import.meta.env.PROD;
const base = isProd ? '/rehab-portfolio' : '';

const projects = [
  {
    title: "Therap Splasher",
    category: "Health & Medicine",
    description: "A medicine reminder app using SQLite, local notifications, and AdMob. Managed medications with timed alerts.",
    image: `${base}/therapy.png`,
    figma: "https://play.google.com/store/apps/details?id=com.Splacher.Therapy",
    tags: ["Flutter", "SQLite", "Firebase", "AdMob"]
  },
  {
    title: "Meals Splasher",
    category: "Restaurant & E-commerce",
    description: "A complete e-commerce restaurant app with a modern UI/UX design developed to handle meals and orders effectively.",
    image: `${base}/meals_splasher.jpg`,
    figma: "#",
    tags: ["Flutter", "UI/UX", "API Integration"]
  },
  {
    title: "Dawag",
    category: "Fashion E-commerce",
    description: "A premium lifestyle shopping experience with elegant Arabic UI and seamless navigation for modern shoppers.",
    image: `${base}/dawag.png`,
    figma: "https://www.figma.com/proto/NQC8nvZtnpI4N1y1TLJOK9/Ui-Dawag-User?node-id=906-24633&scaling=scale-down&content-scaling=fixed",
    tags: ["Flutter", "Dart", "Firebase"]
  },
  {
    title: "Rento",
    category: "Real Estate Rental",
    description: "Modern property management and rental application focused on user-centric search.",
    image: `${base}/rento.png`,
    figma: "https://www.figma.com/design/LRaIVkk3megR8uDoKLd1cs/Rento?node-id=0-1",
    tags: ["Flutter", "Provider", "Maps API"]
  },
  {
    title: "EGYM",
    category: "Health & Fitness",
    description: "Comprehensive fitness tracking and gym management system for workout optimization.",
    image: `${base}/egym.png`,
    figma: "https://www.figma.com/design/VDe1xYxOdXCPGVvgJH4zRg/EGYM?node-id=40-233",
    tags: ["Flutter", "BloC", "Local DB"]
  },
  {
    title: "Real Estate SAR",
    category: "Property Technology",
    description: "Specialized property listing platform for the SAR market with WhatsApp integration.",
    image: `${base}/real_estate.png`,
    figma: "https://www.figma.com/design/QrVn31AoT06JUeitT4nMbe/Real-estate-and-construction-technology?node-id=582-1290",
    tags: ["Flutter", "Dio", "REST API"]
  },
  {
    title: "Parking App",
    category: "Smart City Solution",
    description: "Real-time parking spot finder and booking system to reduce urban congestion.",
    image: `${base}/parking.png`,
    figma: "https://www.figma.com/design/LY6QtmV8Ug7rXyMDrwWW4Q/parking?node-id=76-464",
    tags: ["Flutter", "Firebase", "Geolocation"]
  }
];

const skills = [
  "Flutter", "Dart", "Firebase", "Provider", "BloC",
  "REST API", "Dio", "Hive", "SqfLite", "Git", "OOP", "Solid Principles"
];

const experiences = [
  {
    role: "Flutter Developer (Full Time)",
    company: "Programming Waterfall",
    period: "08/2025 – Present",
    location: "Minia",
    points: [
      "Full-Time Flutter Developer working on 6+ production mobile apps.",
      "Developed UI, integrated APIs, and used Firebase services.",
      "Focused on performance, clean code, and timely delivery."
    ],
    link: null
  },
  {
    role: "Flutter Developer",
    company: "App Splasher",
    period: "08/2024 – 02/2026",
    location: "",
    points: [
      "Developed a complete e-commerce app with a modern UI/UX mockup that received excellent client feedback.",
      "Created \"Therapy Splasher\", a medicine reminder app using SQLite, local notifications, and Google AdMob.",
      "Successfully published on Google Play."
    ],
    link: { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.Splacher.Therapy" }
  },
  {
    role: "RCT – Freelancing",
    company: "Real Estate Application",
    period: "07/2024 – 09/2024",
    location: "",
    points: [
      "Contributed to RCT: house design selection, order placement, push notifications, file downloads, investment sections, and online payment."
    ],
    link: { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.rct.app" }
  },
  {
    role: "RCT V2 – Freelancing",
    company: "Real Estate Application (Enhanced)",
    period: "01/2025 – 05/2025",
    location: "",
    points: [
      "Built full multi-vendor store structure with order management, invoices, advanced filtering, and integrated payment & notification systems."
    ],
    link: { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.rct.app" }
  },
  {
    role: "Erkenha (اركها) – Freelancing",
    company: "Smart Car Parking App",
    period: "02/2025 – 05/2025",
    location: "",
    points: [
      "Built Erkenha: users can view available parking spaces, receive real-time notifications, and upload & manage car details."
    ],
    link: null
  },
  {
    role: "Flutter Developer Intern",
    company: "TEKNOSOFT",
    period: "",
    location: "",
    points: [
      "Developed a complete mobile application during the internship, handling the full development lifecycle from UI to deployment.",
      "Gained hands-on experience with widgets, state management, and API integration."
    ],
    link: { label: "GitHub", url: "https://github.com/Rehab-Sobhy/Complete-Ecommerce-App" }
  },
  {
    role: "Flutter Instructor",
    company: "GDG Minia",
    period: "12/2022 – 12/2025",
    location: "Minia",
    points: [
      "Taught Flutter & Dart fundamentals and practical app development.",
      "Mentored students and guided them in building real Flutter applications."
    ],
    link: null
  }
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
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="hero">
    <div class="hero-content reveal reveal-left">
      <div class="badge">AVAILABLE FOR WORK</div>
      <h1>Building the Future of Mobile with <span style="color: var(--accent-primary)">Flutter</span>.</h1>
      <p>I am Rehab Sobhy, a passionate Flutter Developer dedicated to crafting high-performance, beautiful cross-platform experiences at the intersection of design and code.</p>
      <div class="cta-group">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="${base}/CV_Rehab_Sobhy.pdf" download class="btn btn-secondary">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Download CV
        </a>
      </div>
    </div>
    <div class="hero-visual reveal reveal-right">
      <div class="hero-image-container">
        <img src="${base}/rehab.jpg" alt="Rehab Sobhy">
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="reveal reveal-up">
      <span class="section-tag">Portfolio</span>
      <h2>Featured Projects</h2>
    </div>
    <div class="grid grid-3">
      ${projects.map((p, i) => `
        <div class="card reveal reveal-scale reveal-delay-${(i % 3) + 1}">
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
    <div class="reveal reveal-up">
      <span class="section-tag">Expertise</span>
      <h2>Technical Arsenal</h2>
    </div>
    <div class="grid grid-3">
      ${skills.map((skill, i) => `
        <div class="skill-item reveal reveal-scale reveal-delay-${(i % 3) + 1}">
          <div class="skill-icon">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 18l10-5-10-5-10 5 10 5z"/></svg>
          </div>
          <span style="font-weight: 600;">${skill}</span>
        </div>
      `).join('')}
    </div>
  </section>

  <section id="experience">
    <div class="reveal reveal-up">
      <span class="section-tag">Career</span>
      <h2>Professional Experience</h2>
    </div>
    <div class="timeline">
      ${experiences.map((exp, i) => `
        <div class="timeline-item reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} reveal-delay-${(i % 3) + 1}">
          <div class="timeline-dot"></div>
          <div class="exp-card">
            <div class="exp-header">
              <div>
                <h3 class="exp-role">${exp.role}</h3>
                <span class="exp-company">${exp.company}</span>
              </div>
              <div class="exp-meta">
                ${exp.period ? `<span class="exp-period">${exp.period}</span>` : ''}
                ${exp.location ? `<span class="exp-location">${exp.location}</span>` : ''}
              </div>
            </div>
            <ul class="exp-points">
              ${exp.points.map(pt => `<li>${pt}</li>`).join('')}
            </ul>
            ${exp.link ? `<a href="${exp.link.url}" target="_blank" class="exp-link">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"/></svg>
              ${exp.link.label}
            </a>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <section id="contact" style="text-align: center;">
    <div class="reveal reveal-up">
      <span class="section-tag">Get in Touch</span>
      <h2>Ready to build something amazing?</h2>
      <p style="margin-bottom: 3rem;">I'm always open to discussing new projects, creative ideas or looking for opportunities.</p>
      <div style="display: flex; justify-content: center; gap: 2rem;">
        <a href="mailto:rehabsobhy.eng@gmail.com" class="btn btn-primary">Email Me</a>
        <a href="https://linkedin.com/in/rehab-sobhy-94910b274" target="_blank" class="btn btn-outline">LinkedIn</a>
      </div>
    </div>
  </section>

  <footer style="padding: 4rem 2rem; border-top: 1px solid var(--glass-border); text-align: center;">
    <p style="color: var(--text-secondary); font-size: 0.9rem;">&copy; 2024 Rehab Sobhy. Crafted with passion & Flutter expertise.</p>
  </footer>
`

// Scroll Reveal Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // If it's a card, we might want to unobserve after animation
      // observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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
