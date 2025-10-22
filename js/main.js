// Portfolio JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projectsContainer");

  // Fallback data to prevent "Unable to load projects" error
  const fallbackProjects = [
    {
      title: "Memory Matching Game",
      description:
        "Interactive memory card game that challenges players to match pairs using logic and focus.",
      url: "https://memory-matching-game-project.netlify.app",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web Game",
    },
    {
      title: "Electronics Store",
      description:
        "Electronics Store is an e-commerce web app for browsing and purchasing electronic products with a modern interface and Firebase integration.",
      url: "http://electronics-store-project-w-momin.netlify.app",
      tech: ["Vue.js", "HTML", "CSS", "JavaScript", "Firebase"],
      category: "Web App",
    },
    {
      title: "crud-project-withvue-api",
      description:
        "A web app CRUD project built with VueJS and an API that allows easy creation, updating, deletion, and viewing of data.",
      url: "https://crud-project-withvue-api.netlify.app/",
      tech: ["HTML", "CSS", "JavaScript", "API", "VueJS"],
      category: "Web App",
    },
    {
      title: "Film Project",
      description:
        "Movie database and review platform with search and filtering features",
      url: "https://filmprojectwithvue.netlify.app/",
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
  ];

  async function loadAndRenderProjects() {
    try {
      const response = await fetch("./data.json");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const projects = await response.json();
      console.log("[v0] Successfully loaded projects from data.json");
      renderProjects(projects);
    } catch (error) {
      console.log(
        "[v0] Failed to load data.json, using fallback data:",
        error.message
      );
      // Use fallback data instead of showing error
      renderProjects(fallbackProjects);
    }
  }

  function renderProjects(projects) {
    container.innerHTML = "";

    projects.forEach((project, index) => {
      const col = document.createElement("div");
      col.className = "col-lg-4 col-md-6 mb-4";
      col.style.animationDelay = `${index * 0.1}s`;
      col.classList.add("animate-fade-in-up");

      col.innerHTML = `
      <div class="card project-card h-100">
        <div class="card-header d-flex justify-content-between align-items-center">
          <span class="badge bg-secondary">${project.category}</span>
          <i class="fas fa-external-link-alt text-muted"></i>
        </div>
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text flex-grow-1">${project.description}</p>
          <div class="tech-badges mb-3">
            ${project.tech
              .map(
                (tech) => `<span class="badge bg-primary-light">${tech}</span>`
              )
              .join(" ")}
          </div>
          <a href="${
            project.url
          }" target="_blank" rel="noopener noreferrer" class="btn btn-primary w-100">
            <span>View Project</span>
            <i class="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    `;

      container.appendChild(col);
    });
  }

  const skills = [
    { name: "HTML5 & CSS3", level: 100 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "Vue.js & Pinia", level: 92 },
    { name: "Bootstrap & Responsive Design", level: 100 },
    { name: "API Integration (REST)", level: 90 },
    { name: "PHP & WordPress", level: 80 },
    { name: "MySQL & SQL Server", level: 80 },
    { name: "Firebase", level: 87 },
    { name: "Git & GitHub", level: 89 },
  ];

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
        const headerHeight = 80;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    // Observe cards with stagger effect
    document.querySelectorAll(".card").forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }

  function initParallaxEffect() {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const heroSection = document.querySelector(".hero-section");
      if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });
  }

  // Active navigation highlighting
  function updateActiveNav() {
    const sections = [
      "home",
      "about",
      "projects",
      "skills",
      "education",
      "certifications",
      "contact",
    ];
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

  function handleContactForm() {
    const form = document.getElementById("contactForm");
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitText = document.getElementById("submitText");
    const submitSpinner = document.getElementById("submitSpinner");
    const successMessage = document.getElementById("successMessage");

    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        };

        // Show loading state
        submitText.style.display = "none";
        submitSpinner.style.display = "inline-block";
        submitBtn.disabled = true;

        try {
          // Using Web3Forms service (free and simple)
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // User needs to get this from web3forms.com
              name: data.name,
              email: data.email,
              subject: data.subject,
              message: data.message,
              to: "eng.mominwawi@gmail.com",
            }),
          });

          const result = await response.json();

          if (result.success) {
            // Show success message
            successMessage.classList.add("show");
            form.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
              successMessage.classList.remove("show");
            }, 5000);
          } else {
            // Fallback to mailto if service fails
            const mailtoLink = `mailto:eng.mominwawi@gmail.com?subject=${encodeURIComponent(
              data.subject
            )}&body=${encodeURIComponent(
              `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
            )}`;
            window.location.href = mailtoLink;
          }
        } catch (error) {
          console.log(
            "[v0] Form submission error, using mailto fallback:",
            error
          );
          // Fallback to mailto
          const mailtoLink = `mailto:eng.mominwawi@gmail.com?subject=${encodeURIComponent(
            data.subject
          )}&body=${encodeURIComponent(
            `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
          )}`;
          window.location.href = mailtoLink;
        } finally {
          // Reset button state
          submitText.style.display = "inline";
          submitSpinner.style.display = "none";
          submitBtn.disabled = false;
        }
      });
    }
  }

  function updateScrollProgress() {
    const scrollProgress = document.getElementById("scrollProgress");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    if (scrollProgress) {
      scrollProgress.style.width = scrollPercentage + "%";
    }
  }

  function initBackToTop() {
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  function initParticleEffect() {
    document.addEventListener("mousemove", (e) => {
      if (Math.random() > 0.95) {
        const particle = document.createElement("div");
        particle.style.position = "fixed";
        particle.style.left = e.clientX + "px";
        particle.style.top = e.clientY + "px";
        particle.style.width = "5px";
        particle.style.height = "5px";
        particle.style.background = "var(--accent-primary)";
        particle.style.borderRadius = "50%";
        particle.style.pointerEvents = "none";
        particle.style.opacity = "0.6";
        particle.style.zIndex = "9999";
        particle.style.transition = "all 1s ease-out";

        document.body.appendChild(particle);

        setTimeout(() => {
          particle.style.opacity = "0";
          particle.style.transform = "translateY(20px)";
        }, 10);

        setTimeout(() => {
          particle.remove();
        }, 1000);
      }
    });
  }

  loadAndRenderProjects();
  renderSkills();
  animateSkills();
  handleContactForm();
  initScrollAnimations();
  initParallaxEffect();
  initBackToTop();
  initParticleEffect();

  window.addEventListener("scroll", () => {
    updateActiveNav();
    updateScrollProgress();
  });

  updateActiveNav();
});
