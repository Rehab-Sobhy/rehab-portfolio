import './style.css'

const isProd = import.meta.env.PROD;
const base = isProd ? '/rehab-portfolio' : '';

const projects = [
  {
    id: "abu-qurqas-real-estate",
    title: "Abu Qurqas Real Estate (عقارات أبو قرقاص)",
    category: "Real Estate",
    categoryLabel: "Real Estate Tech",
    badge: "Featured Project",
    description: "A comprehensive real estate mobile application designed for property browsing, smart filtering, direct owner communication, and detailed property showcases in Abu Qurqas.",
    fullDescription: "Abu Qurqas Real Estate is an advanced mobile property portal built with Flutter. It enables buyers, renters, and property owners to list, search, and filter real estate items with precision. Features include real-time property updates, interactive image galleries, location maps, and direct contact options via phone and WhatsApp.",
    image: `${base}/real_state.png`,
    figma: "https://www.figma.com/design/QrVn31AoT06JUeitT4nMbe/Real-estate-and-construction-technology?node-id=582-1290",
    tags: ["Flutter", "Dart", "Firebase", "REST API", "Maps API"],
    highlights: ["Interactive Property Filtering", "Real-Time Listings", "Direct WhatsApp & Call Integration", "Responsive Mobile Layouts"]
  },
  {
    id: "thiqah-hr",
    title: "Thiqah HR (ثقة HR)",
    category: "Enterprise",
    categoryLabel: "Enterprise & HR",
    badge: "Featured Project",
    description: "A modern employee self-service and HR management platform providing attendance tracking, leave requests, employee profiles, and instant notifications.",
    fullDescription: "Thiqah HR is a robust enterprise mobile solution developed to streamline human resource workflows. It provides employees with seamless access to check-in/out records, leave request submissions, payroll summaries, and company announcements with real-time push notifications.",
    image: `${base}/theka_hr.png`,
    figma: "#",
    tags: ["Flutter", "BLoC Architecture", "Dio REST API", "Firebase Messaging"],
    highlights: ["Attendance & Leave Management", "Role-Based Access Control", "Push Notification Service", "Clean Architecture & MVVM"]
  },
  {
    id: "therapy-splasher",
    title: "Therapy Splasher",
    category: "Health",
    categoryLabel: "Health & Medicine",
    badge: "Google Play",
    description: "A smart medicine reminder mobile app using SQLite, local notifications, and Google AdMob to help users track medication schedules accurately.",
    fullDescription: "Therapy Splasher is a live Google Play application designed for health tracking. Users can add, edit, and delete medications with exact timed alarm notifications, ensuring timely dosage reminders with reliable local database persistence.",
    image: `${base}/therapy.png`,
    link: "https://play.google.com/store/apps/details?id=com.Splacher.Therapy",
    figma: "https://play.google.com/store/apps/details?id=com.Splacher.Therapy",
    tags: ["Flutter", "SQLite", "Local Notifications", "AdMob"],
    highlights: ["Published on Google Play", "Offline Persistence (SQLite)", "Scheduled Timed Notifications", "AdMob Monetization Integration"]
  },
  {
    id: "rct-v2",
    title: "RCT & RCT V2 Multi-Vendor Store",
    category: "Real Estate",
    categoryLabel: "Real Estate & Multi-Vendor",
    badge: "Google Play",
    description: "An enhanced multi-vendor real estate & store application featuring vendor stores, house design selection, invoices, and online payment.",
    fullDescription: "RCT & RCT V2 is a full-featured commercial real estate and multi-vendor platform. It empowers multiple vendors to manage listings, process customer orders, issue invoices, track payments, and send push notifications for status updates.",
    image: `${base}/real_estate.png`,
    link: "https://play.google.com/store/apps/details?id=com.rct.app",
    figma: "https://play.google.com/store/apps/details?id=com.rct.app",
    tags: ["Flutter", "Multi-Vendor", "Payment Gateway", "Firebase"],
    highlights: ["Published on Google Play", "Multi-Vendor Store Structure", "Online Payment System", "Invoicing & Advanced Filters"]
  },
  {
    id: "erkenha",
    title: "Erkenha (اركنها) Smart Parking",
    category: "Utility",
    categoryLabel: "Smart Mobility",
    badge: "Freelance",
    description: "A smart car parking application allowing users to check parking space availability, reserve spots, upload vehicle info, and receive alerts.",
    fullDescription: "Erkenha simplifies urban parking by providing driver assistance in locating open parking spots, booking reservations, managing registered vehicles, and receiving real-time status notifications.",
    image: `${base}/parking.png`,
    figma: "https://www.figma.com/design/LY6QtmV8Ug7rXyMDrwWW4Q/parking?node-id=76-464",
    tags: ["Flutter", "Geolocation", "Firebase", "State Management"],
    highlights: ["Real-time Space Reservation", "Vehicle Details Management", "Push Alert System", "Intuitive Mobile UX"]
  },
  {
    id: "dawag",
    title: "Dawag Lifestyle & Shopping",
    category: "E-Commerce",
    categoryLabel: "E-Commerce & Fashion",
    badge: "Prototype",
    description: "A premium lifestyle shopping app with elegant Arabic localization, smooth navigation, and a modern product catalog layout.",
    fullDescription: "Dawag offers a luxury online shopping experience with tailor-made Arabic interfaces, fluid micro-interactions, category browsing, and interactive shopping cart flows.",
    image: `${base}/dawag.png`,
    figma: "https://www.figma.com/proto/NQC8nvZtnpI4N1y1TLJOK9/Ui-Dawag-User?node-id=906-24633&scaling=scale-down&content-scaling=fixed",
    tags: ["Flutter", "Arabic RTL", "Firebase", "Figma"],
    highlights: ["Native RTL Arabic UI", "Interactive Figma Prototype", "Product Catalog & Filtering", "Animated Shopping Cart"]
  },
  {
    id: "meals-splasher",
    title: "Meals Splasher",
    category: "E-Commerce",
    categoryLabel: "Food & Restaurant",
    badge: "Mobile App",
    description: "A complete restaurant e-commerce app built with a modern UI mockup for browsing menus, customizing meals, and placing food orders.",
    fullDescription: "Meals Splasher delivers a visual culinary experience allowing users to explore restaurant menus, filter dietary options, customize order toppings, and track order progress.",
    image: `${base}/meals_splasher.jpg`,
    figma: "#",
    tags: ["Flutter", "UI/UX", "API Integration", "State Management"],
    highlights: ["Custom Menu Builder", "API Cart Integration", "Interactive Food Cards", "Delightful UI Micro-animations"]
  },
  {
    id: "rento",
    title: "Rento Property Rental",
    category: "Real Estate",
    categoryLabel: "Real Estate Rental",
    badge: "Rental App",
    description: "Modern property management and rental application focused on user-centric search, interactive maps, and listing details.",
    fullDescription: "Rento connects property seekers with available rental units through quick map searches, detailed landlord profiles, and schedule booking requests.",
    image: `${base}/rento.png`,
    figma: "https://www.figma.com/design/LRaIVkk3megR8uDoKLd1cs/Rento?node-id=0-1",
    tags: ["Flutter", "Provider", "Google Maps API", "REST API"],
    highlights: ["Map View Integration", "Filter by Rent & Location", "Landlord Direct Booking", "Clean Provider Architecture"]
  },
  {
    id: "egym",
    title: "EGYM Fitness & Workout",
    category: "Health",
    categoryLabel: "Fitness & Gym",
    badge: "Fitness System",
    description: "Comprehensive fitness tracking and gym management system designed for workout optimization and member tracking.",
    fullDescription: "EGYM helps fitness enthusiasts track workouts, schedule trainer sessions, view exercise routines, and monitor personal fitness progress over time.",
    image: `${base}/egym.png`,
    figma: "https://www.figma.com/design/VDe1xYxOdXCPGVvgJH4zRg/EGYM?node-id=40-233",
    tags: ["Flutter", "BLoC", "Hive Database", "Custom Graphics"],
    highlights: ["Workout Routine Logs", "BLoC State Management", "Progress Graphs", "Offline Data Sync"]
  }
];

const skillCategories = [
  {
    title: "Core & Framework",
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 18l10-5-10-5-10 5 10 5z"></path></svg>`,
    skills: ["Flutter", "Dart", "OOP", "SOLID Principles", "MVVM / Clean Arch"]
  },
  {
    title: "State Management",
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7"></path></svg>`,
    skills: ["BLoC", "Cubit", "Provider"]
  },
  {
    title: "Backend & Services",
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`,
    skills: ["Firebase Auth", "Firestore", "Cloud Messaging", "RESTful APIs", "Dio & Http"]
  },
  {
    title: "Database & Storage",
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>`,
    skills: ["SQLite", "Sqflite", "Hive", "Shared Preferences"]
  },
  {
    title: "Tools & Ecosystem",
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>`,
    skills: ["Git & GitHub", "Google Play Deployment", "Google AdMob", "Figma UI/UX", "Local Notifications"]
  }
];

const experiences = [
  {
    role: "Flutter Developer (Full Time)",
    company: "Programming Waterfall",
    period: "08/2025 – Present",
    location: "Minia, Egypt",
    badge: "Full Time",
    points: [
      "Full-Time Flutter Developer working on 6+ production mobile applications.",
      "Architected clean UI, integrated RESTful APIs, and leveraged Firebase services.",
      "Focused on application performance, maintainable clean code, and timely feature delivery."
    ],
    link: null
  },
  {
    role: "Flutter Developer",
    company: "App Splasher",
    period: "08/2024 – 02/2026",
    location: "Remote",
    badge: "Key Apps",
    points: [
      "Developed complete e-commerce mobile application with modern UI/UX mockups.",
      "Created \"Therapy Splasher\", a medicine reminder app using SQLite, local notifications, and Google AdMob.",
      "Successfully published apps on Google Play."
    ],
    link: { label: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.Splacher.Therapy" }
  },
  {
    role: "RCT – Freelancing",
    company: "Real Estate Application",
    period: "07/2024 – 09/2024",
    location: "Freelance",
    badge: "Google Play App",
    points: [
      "Contributed to RCT: house design selection, order placement, push notifications, file downloads, investment sections, and online payment."
    ],
    link: { label: "View on Google Play", url: "https://play.google.com/store/apps/details?id=com.rct.app" }
  },
  {
    role: "RCT V2 – Freelancing",
    company: "Multi-Vendor Real Estate Platform",
    period: "01/2025 – 05/2025",
    location: "Freelance",
    badge: "Multi-Vendor Store",
    points: [
      "Built full multi-vendor store structure with vendor-specific sections, order management, invoices, advanced filtering, and integrated payment & notification systems."
    ],
    link: { label: "View on Google Play", url: "https://play.google.com/store/apps/details?id=com.rct.app" }
  },
  {
    role: "Erkenha (اركنها) – Freelancing",
    company: "Smart Car Parking App",
    period: "02/2025 – 05/2025",
    location: "Freelance",
    badge: "Smart Mobility",
    points: [
      "Built Erkenha: real-time parking space availability, notification alerts, vehicle management, and company info."
    ],
    link: null
  },
  {
    role: "Flutter Developer Intern",
    company: "TEKNOSOFT",
    period: "Internship",
    location: "Egypt",
    badge: "Internship",
    points: [
      "Developed a complete mobile application handling the full development lifecycle from UI design to deployment.",
      "Gained practical experience with Flutter widgets, state management, and API integration."
    ],
    link: { label: "GitHub Repo", url: "https://github.com/Rehab-Sobhy/Complete-Ecommerce-App" }
  },
  {
    role: "Flutter Instructor",
    company: "GDG Minia",
    period: "12/2022 – 12/2025",
    location: "Minia",
    badge: "Community & Mentorship",
    points: [
      "Taught Flutter & Dart fundamentals and practical app development to student developer cohorts.",
      "Mentored students and guided them in building production-ready Flutter applications."
    ],
    link: null
  }
];

const avatarImages = [
  `${base}/rehab2.jpg`,
  `${base}/rehab.jpg`,
  `${base}/rehab2.png`
];

let currentAvatarIndex = 0;

function renderApp() {
  document.querySelector('#app').innerHTML = `
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>

    <header id="navbar">
      <nav>
        <a href="#hero" class="logo">
          <span class="logo-accent">&lt;</span>REHAB<span class="logo-accent">.DEV /&gt;</span>
        </a>
        <ul class="nav-links">
          <li><a href="#hero" class="nav-link">Home</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#experience" class="nav-link">Experience</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <div class="nav-actions">
          <a href="#contact" class="btn btn-sm btn-primary">Hire Me</a>
        </div>
      </nav>
    </header>

    <main>
      <!-- HERO SECTION -->
      <section id="hero">
        <div class="hero-content reveal reveal-left">
          <div class="badge-pulse">
            <span class="pulse-dot"></span>
            <span>AVAILABLE FOR WORK & FREELANCE</span>
          </div>
          
          <h1>Hi, I'm <span class="gradient-text">Rehab Sobhy</span></h1>
          <h2 class="hero-subtitle">
            <span id="typing-text">Flutter Developer</span><span class="typing-cursor">|</span>
          </h2>
          
          <p class="hero-desc">
            Passionate Flutter developer specializing in crafting high-performance, beautiful cross-platform mobile applications with clean architecture, smooth UI/UX, and robust API integration.
          </p>

          <div class="hero-stats">
            <div class="stat-card">
              <span class="stat-number">6+</span>
              <span class="stat-label">Production Apps</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">2+</span>
              <span class="stat-label">Google Play Apps</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">GDG</span>
              <span class="stat-label">Flutter Mentor</span>
            </div>
          </div>

          <div class="cta-group">
            <a href="#projects" class="btn btn-primary btn-glow">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h7"></path></svg>
              Explore Projects
            </a>
            <a href="${base}/CV_Rehab_Sobhy.pdf" download="CV_Rehab_Sobhy.pdf" class="btn btn-secondary">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download CV
            </a>
          </div>
        </div>

        <div class="hero-visual reveal reveal-right">
          <div class="hero-image-wrapper">
            <div class="glow-ring"></div>
            <div class="hero-image-container">
              <img id="avatar-img" src="${avatarImages[0]}" alt="Rehab Sobhy - Flutter Developer">
            </div>
            <div class="avatar-controls">
              ${avatarImages.map((_, idx) => `
                <button class="avatar-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Photo ${idx + 1}"></button>
              `).join('')}
            </div>
            <div class="floating-badge badge-1">
              <div class="fb-icon">📱</div>
              <div>
                <strong>Flutter & Dart</strong>
                <span>Cross-Platform</span>
              </div>
            </div>
            <div class="floating-badge badge-2">
              <div class="fb-icon">🚀</div>
              <div>
                <strong>Clean Arch</strong>
                <span>BLoC & Provider</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURED PROJECTS SECTION -->
      <section id="projects">
        <div class="section-header reveal reveal-up">
          <span class="section-tag">PORTFOLIO SHOWCASE</span>
          <h2>Featured Applications</h2>
          <p class="section-subtitle">Discover mobile applications engineered with precision, high performance, and elegant design.</p>
        </div>

        <div class="filter-bar reveal reveal-up">
          <button class="filter-btn active" data-filter="all">All Projects</button>
          <button class="filter-btn" data-filter="Real Estate">Real Estate</button>
          <button class="filter-btn" data-filter="Enterprise">Enterprise & HR</button>
          <button class="filter-btn" data-filter="Health">Health & Medicine</button>
          <button class="filter-btn" data-filter="E-Commerce">E-Commerce</button>
          <button class="filter-btn" data-filter="Utility">Smart Mobility</button>
        </div>

        <div class="projects-grid grid grid-3">
          ${projects.map((p, i) => `
            <article class="card project-card reveal reveal-scale reveal-delay-${(i % 3) + 1}" data-category="${p.category}" data-id="${p.id}">
              <div class="card-img-wrap" onclick="openProjectModal('${p.id}')">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                <div class="card-overlay">
                  <span class="quick-view-btn">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    Preview Details
                  </span>
                </div>
                ${p.badge ? `<span class="project-badge ${p.id.includes('abu') || p.id.includes('thiqah') ? 'highlight-badge' : ''}">${p.badge}</span>` : ''}
              </div>

              <div class="card-content">
                <div class="card-meta">
                  <span class="card-cat">${p.categoryLabel}</span>
                  ${p.link ? `<a href="${p.link}" target="_blank" class="store-icon-link" title="Open Store Link">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                  </a>` : ''}
                </div>
                
                <h3 class="card-title" onclick="openProjectModal('${p.id}')">${p.title}</h3>
                <p class="card-desc">${p.description}</p>
                
                <div class="tags">
                  ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- SKILLS SECTION -->
      <section id="skills">
        <div class="section-header reveal reveal-up">
          <span class="section-tag">TECHNICAL ARSENAL</span>
          <h2>Skills & Expertise</h2>
          <p class="section-subtitle">Core technologies, frameworks, and architecture tools I use daily.</p>
        </div>

        <div class="skills-grid grid grid-3">
          ${skillCategories.map((cat, i) => `
            <div class="skill-card reveal reveal-scale reveal-delay-${(i % 3) + 1}">
              <div class="skill-card-header">
                <div class="skill-icon-badge">${cat.icon}</div>
                <h3>${cat.title}</h3>
              </div>
              <ul class="skill-list">
                ${cat.skills.map(sk => `
                  <li>
                    <svg width="16" height="16" fill="none" stroke="var(--accent-primary)" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
                    <span>${sk}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- EXPERIENCE SECTION -->
      <section id="experience">
        <div class="section-header reveal reveal-up">
          <span class="section-tag">CAREER JOURNEY</span>
          <h2>Professional Experience</h2>
          <p class="section-subtitle">My professional track record as a Flutter Developer and instructor.</p>
        </div>

        <div class="timeline">
          ${experiences.map((exp, i) => `
            <div class="timeline-item reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}">
              <div class="timeline-dot"></div>
              <div class="exp-card">
                <div class="exp-header">
                  <div>
                    <div class="exp-role-row">
                      <h3 class="exp-role">${exp.role}</h3>
                      ${exp.badge ? `<span class="exp-badge">${exp.badge}</span>` : ''}
                    </div>
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

      <!-- CONTACT SECTION -->
      <section id="contact">
        <div class="contact-box reveal reveal-up">
          <span class="section-tag">GET IN TOUCH</span>
          <h2>Let's Build Something Exceptional</h2>
          <p>Looking for a dedicated Flutter developer to bring your mobile app idea to life or join your team?</p>
          
          <div class="contact-cards">
            <a href="mailto:rehabsobhy.eng@gmail.com" class="contact-card">
              <div class="cc-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div class="cc-details">
                <span class="cc-title">Email</span>
                <span class="cc-val">rehabsobhy.eng@gmail.com</span>
              </div>
            </a>

            <a href="tel:+201147521742" class="contact-card">
              <div class="cc-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div class="cc-details">
                <span class="cc-title">Phone / WhatsApp</span>
                <span class="cc-val">+20 114 752 1742</span>
              </div>
            </a>
          </div>

          <div class="social-links">
            <a href="https://linkedin.com/in/rehab-sobhy-94910b274" target="_blank" class="btn btn-outline">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn Profile
            </a>
            <a href="https://github.com/Rehab-Sobhy" target="_blank" class="btn btn-outline">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Rehab Sobhy Mohammed. Built with passion & Flutter expertise.</p>
    </footer>

    <!-- PROJECT LIGHTBOX MODAL -->
    <div id="project-modal" class="modal-overlay" onclick="closeProjectModal(event)">
      <div class="modal-card" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeProjectModal()">&times;</button>
        <div id="modal-content"></div>
      </div>
    </div>
  `;

  initInteractivity();
}

function initInteractivity() {
  // Intersection Observer for scroll reveals
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Navbar blur & shadow on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // Avatar Image Switcher
  const avatarImg = document.getElementById('avatar-img');
  const avatarDots = document.querySelectorAll('.avatar-dot');

  avatarDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.dataset.index);
      currentAvatarIndex = idx;
      avatarDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      avatarImg.style.opacity = '0';
      setTimeout(() => {
        avatarImg.src = avatarImages[idx];
        avatarImg.style.opacity = '1';
      }, 300);
    });
  });

  // Typing Effect in Hero
  const titles = [
    "Flutter Developer",
    "Mobile App Specialist",
    "GDG Minia Instructor",
    "Clean Architecture Advocate"
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById('typing-text');

  function typeText() {
    if (!typingElement) return;
    const currentTitle = titles[titleIndex];
    if (isDeleting) {
      typingElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;
    if (!isDeleting && charIndex === currentTitle.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typeSpeed = 400;
    }
    setTimeout(typeText, typeSpeed);
  }
  typeText();
}

window.openProjectModal = function (id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;

  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');

  modalContent.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-box">
        <img src="${p.image}" alt="${p.title}">
      </div>
      <div class="modal-info">
        <span class="modal-cat">${p.categoryLabel}</span>
        <h2 class="modal-title">${p.title}</h2>
        <p class="modal-desc">${p.fullDescription || p.description}</p>
        
        ${p.highlights ? `
          <div class="modal-highlights">
            <h4>Key Highlights</h4>
            <ul>
              ${p.highlights.map(h => `<li><svg width="14" height="14" fill="none" stroke="var(--accent-primary)" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg> ${h}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div class="modal-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>

        <div class="modal-actions">
          ${p.link ? `<a href="${p.link}" target="_blank" class="btn btn-primary">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
            Open on Google Play
          </a>` : ''}
          ${p.figma && p.figma !== '#' ? `<a href="${p.figma}" target="_blank" class="btn btn-secondary">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            View Prototype / Link
          </a>` : ''}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function (e) {
  if (!e || e.target.id === 'project-modal' || e.target.classList.contains('modal-close')) {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

renderApp();
