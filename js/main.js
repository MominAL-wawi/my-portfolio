// Portfolio JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Projects data
  const projects = [
    {
      title: "Active Card",
      description:
        "Interactive card component with modern animations and responsive design",
      url: "https://project-activcard.netlify.app",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
    },
    {
      title: "Crispy Restaurant",
      description:
        "Modern restaurant website with menu showcase and online ordering system",
      url: "https://project-crispy-restaurant.netlify.app",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Web Design",
    },
    {
      title: "CRUDS System",
      description:
        "Complete CRUD operations system with data management functionality",
      url: "https://project-cruds.netlify.app",
      tech: ["JavaScript", "HTML", "CSS", "LocalStorage"],
      category: "Web App",
    },
    {
      title: "CSS Assignment",
      description:
        "Advanced CSS techniques showcase with animations and layouts",
      url: "https://project-css-assign.netlify.app",
      tech: ["HTML", "CSS", "Flexbox", "Grid"],
      category: "Frontend",
    },
    {
      title: "Tiavelia Travel",
      description:
        "Travel booking platform with destination showcase and booking system",
      url: "https://frontend-project-tiavelia.netlify.app",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Web Design",
    },
    {
      title: "Internet Speed Test",
      description:
        "Real-time internet speed testing application with performance metrics",
      url: "https://project-test-internet.netlify.app",
      tech: ["JavaScript", "HTML", "CSS", "API"],
      category: "Web App",
    },
    {
      title: "Film Project",
      description:
        "Movie database and review platform with search and filtering features",
      url: "filmprojectwithvue.netlify.app",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      category: "Web App",
    },
     {
      title: "Taqwa portfolio",
      description:
        "Taqwa Portfolio is a modern personal website showcasing Tqwa’s profile, skills, and projects professionally.",
      url: "http://tqwaportfolio-project.netlify.app",
      tech: ["HTML", "CSS", "JavaScript", "vue.js"],
      category: "Web App",
    },
    {
      title: "Network Calculator",
      description:
        "Calculate Network ID, Broadcast, and IP addresses using FLSM and VLSM.",
      url: "https://project-network-calculator.netlify.app/",
      tech: ["HTML", "CSS", "JavaScript", "vue.js"],
      category: "Web App",
    },
  ];

  // Skills data
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Bootstrap", level: 88 },
    { name: "vue.js", level: 85 },
    { name: "PHP", level: 70 },
    { name: "MySQL", level: 75 },
  ];

  // Render projects
  function renderProjects() {
    const container = document.getElementById("projectsContainer");
    container.innerHTML = "";

    projects.forEach((project) => {
      const projectCard = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card project-card h-100" onclick="window.open('${
                      project.url
                    }', '_blank')">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <span class="badge bg-secondary">${
                              project.category
                            }</span>
                            <i class="fas fa-external-link-alt text-muted"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <div class="tech-badges mb-3">
                                ${project.tech
                                  .map(
                                    (tech) =>
                                      `<span class="badge bg-primary-light">${tech}</span>`
                                  )
                                  .join("")}
                            </div>
                            <button class="btn btn-primary w-100">View Project</button>
                        </div>
                    </div>
                </div>
            `;
      container.innerHTML += projectCard;
    });
  }

  // Render skills
  function renderSkills() {
    const container = document.getElementById("skillsContainer");
    container.innerHTML = "";

    skills.forEach((skill, index) => {
      const skillItem = `
                <div class="col-md-6 mb-3">
                    <div class="skill-item">
                        <div class="skill-name">
                            <span>${skill.name}</span>
                            <span class="text-muted">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-level="${
                              skill.level
                            }" style="transition-delay: ${
        index * 100
      }ms;"></div>
                        </div>
                    </div>
                </div>
            `;
      container.innerHTML += skillItem;
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerHeight = 80; // Height of fixed navbar
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Active navigation highlighting
  function updateActiveNav() {
    const sections = ["home", "about", "projects", "skills", "contact"];
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      const navLink = document.querySelector(`a[href="#${section}"]`);

      if (element && navLink) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          document
            .querySelectorAll(".nav-link")
            .forEach((link) => link.classList.remove("active"));
          navLink.classList.add("active");
        }
      }
    });
  }

  // Skills animation on scroll
  function animateSkills() {
    const skillsSection = document.getElementById("skills");
    const skillBars = document.querySelectorAll(".skill-progress");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillBars.forEach((bar) => {
              const level = bar.getAttribute("data-level");
              bar.style.width = level + "%";
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsSection) {
      observer.observe(skillsSection);
    }
  }

  // Contact form handling
  function handleContactForm() {
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
        form.reset();
      });
    }
  }

  // Initialize everything
  renderProjects();
  renderSkills();
  animateSkills();
  handleContactForm();

  // Event listeners
  window.addEventListener("scroll", updateActiveNav);

  // Initial call
  updateActiveNav();
});
