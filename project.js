(() => {
  const mediaRoot = "selected works/projects/";
  const processRoot = "selected works/process/";
  const iconRoot = mediaRoot + "icons/animated icons/";

  /* ========================================
     LINK VIDEO ĐẦY ĐỦ
     ======================================== */

  const fullVideoLinks = {
    "to-te-ti": "https://youtu.be/o9tZ5YfhDGU",
    "excretory-haki": "https://youtu.be/s3KKLBIHvk8",
    "sentinel": "https://youtu.be/sAuPRpSftps"
  };

  /* ========================================
     THÔNG TIN PROJECT
     ======================================== */

  const projects = [
    {
      id: "to-te-ti",
      title: "Tò Te Tí",
      category: "Mixed-media Music Video",
      year: "2026",
      video: "MV.webm",

      description:
        "A playful romance takes a complicated turn in a mixed-media music video about blurred boundaries and hidden relationships.",

      process: []
    },

    {
      id: "excretory-haki",
      folder: "constipation",
      title:
        "When Constipation Became the Ultimate Villain and I Had to Awaken My Excretory Haki",
      category: "Animation",
      year: "2025",
      format: "Group project · 3 members",
      video: "constipation animation.webm",

      description:
        "A constipated university girl journeys inside her gut to battle the Fairy of Constipation and unlock the power of fiber.",

      contribution:
        "Concept development, animatic, rough animation and clean-up across the full animation, plus colour assistance on selected scenes.",

      process: [
        {
          title: "Story & Animatic",
          text:
            "Our team developed a surreal comedy in which a university girl battles the Fairy of Constipation inside her gut. I contributed to the concept and created the animatic, working from the planned scenes to establish the sequence before animation.",

          images: [
            {
              file: "01-storyboard-daily-life.webp",
              caption:
                "Team storyboard: everyday scenes establish the character and the comic setup."
            },
            {
              file: "02-storyboard-transition.webp",
              caption:
                "Team storyboard: the narrative shifts into the surreal journey."
            },
            {
              file: "03-storyboard-confrontation.webp",
              caption:
                "Team storyboard: selected confrontation beats and character reactions."
            }
          ]
        },

        {
          title: "Rough Animation & Clean-up",
          text:
            "I completed the rough animation and clean-up for the full animation, carrying the character actions and expressions through to consistent, finished linework.",

          images: []
        },

        {
          title: "Colour & Final Visual Direction",
          text:
            "I assisted with colouring selected scenes. The team’s look-development frames show how the characters and environments were intended to come together; background artwork was handled by my teammates.",

          images: [
            {
              file: "04-team-look-development.webp",
              caption:
                "Team look-development frames showing the intended combination of characters and environments."
            }
          ]
        }
      ]
    },

    {
      id: "overthinking",
      folder: "overthinking",
      title: "Overthinking",
      category: "Interactive Web Experience",
      year: "2025",
      format: "Individual project",
      video: "overthinking.webm",
      website: "https://noah-pann.github.io/OverthinkingFinalBoss/",

      description:
        "An interactive exploration of overthinking through a clock, a phone, and a mirror, where controlling one thought unravels another.",

      contribution:
        "Concept development, illustration, mixed-media asset preparation, interaction design and web development with AI-assisted coding.",

      process: [
        {
          title: "Concept & Visual Language",
          text:
            "I translated the theme of Displacement into three symbols: a clock for deadline pressure, a phone for communication anxiety, and a mirror for distorted self-image. These scenes sit above a drawn character, turning internal tension into a visible, interactive experience.",

          images: [
            {
              file: "01-visual-assets.webp",
              caption:
                "Collaged visual assets for the bedroom and the three symbolic panels."
            }
          ]
        },

        {
          title: "Illustration & Asset Preparation",
          text:
            "I drew the main character in Clip Studio Paint and used Photoshop to adjust the bedroom, textures and collaged objects. Combining illustration with photographic elements gave each scene its own character while keeping the overall composition connected.",

          images: [
            {
              file: "02-character-workflow.webp",
              caption:
                "Character illustration and composition in progress.",
              wide: true
            },
            {
              file: "03-clock-workflow.webp",
              caption:
                "Clock asset preparation in Photoshop."
            },
            {
              file: "04-phone-workflow.webp",
              caption:
                "Phone asset preparation in Photoshop."
            }
          ]
        },

        {
          title: "Interaction & Refinement",
          text:
            "I developed the experience with HTML, CSS, JavaScript and p5.js, with AI support for coding. Holding a scene calms it temporarily; releasing it brings the chaos back. I removed an early to-do-list panel, refined motion and sound, and adjusted the layout for different screen sizes.",

          images: []
        }
      ]
    },

    {
      id: "silent-cat",
      folder: "silent-cat",
      title: "Silent Cat",
      category: "Interactive Web Poetry",
      year: "2025",
      format: "Individual project",
      video: "poem based website.webm",
      website: "https://noah-pann.github.io/SilentCat/",

      description:
        "An interactive poem about quiet, unspoken love, told through the symbolic presence of a cat.",

      contribution:
        "Concept development, poetry, illustration, interaction design and web development with AI-assisted coding.",

      process: [
        {
          title: "From Poem to Scenes",
          text:
            "I began with an original poem about quiet, unspoken love, using a cat as a metaphor for gentle companionship. I mapped its lines into illustrated moments, allowing the story to unfold through small discoveries rather than direct explanations.",

          images: [
            {
              file: "01-scroll-sketch.webp",
              caption:
                "Early sketches mapping the poem into a sequence of illustrated scenes.",
              tall: true
            }
          ]
        },

        {
          title: "Designing Quiet Interactions",
          text:
            "The sketches connect intimate details with interaction: a cat beside someone, a warm drink, hidden words and traces of another person’s presence. Hand-drawn imagery and warm colours support the tender, slightly melancholic atmosphere.",

          images: [
            {
              file: "02-interaction-sketch.webp",
              caption:
                "Interaction notes exploring quiet gestures, hidden words and the ending.",
              tall: true
            }
          ]
        },

        {
          title: "Prototyping & Simplification",
          text:
            "I built and refined the website with AI-assisted coding, testing scrolling, sound and small visual effects. I added hidden hover text, removed ideas that felt distracting or did not work smoothly, and adjusted the pacing to preserve the poem’s quiet mood.",

          images: []
        }
      ]
    },

    {
      id: "sentinel",
      folder: "sentinel",
      title: "SENTINEL: PLAGUE CONTROL",
      category: "Game Trailer Animatic",
      year: "2025",
      format: "Group project · 3 members",
      video: "Animatic_Sentinel Plague control.webm",

      description:
        "An animatic trailer introducing a game about detecting impostors who have infiltrated a factory.",

      contribution:
        "Concept development, design of the full character cast, character drawing and colouring, animatic drawings, and background drawing/colour assistance.",

      process: [
        {
          title: "Character Development",
          text:
            "Working from our steampunk, gothic and neo-Victorian direction, I designed the full character cast, refining the designs with feedback from my teammates. Elara Quinn’s development sheet follows the design from early figure studies to developed views.",

          images: [
            {
              file: "01-character-development.webp",
              caption:
                "Elara Quinn: early figure studies and developed character views."
            }
          ]
        },

        {
          title: "Expressions, Poses & Cast",
          text:
            "I developed character expressions, poses and colour artwork to support the trailer’s storytelling. The studies and scale comparison helped establish distinct personalities and a consistent visual relationship across the cast.",

          images: [
            {
              file: "02-expressions.webp",
              caption:
                "Elara Quinn: expression and angle studies."
            },
            {
              file: "03-character-poses.webp",
              caption:
                "Elara Quinn: pose studies for visual storytelling."
            },
            {
              file: "04-cast-comparison.webp",
              caption:
                "Character scale comparison across the supporting cast.",
              wide: true
            }
          ]
        },

        {
          title: "Drawings for the Animatic",
          text:
            "I created the drawings for the animatic and assisted with background drawing and colouring. These frames helped communicate the scenes and character reactions before the final edit, which was handled by my teammates.",

          images: [
            {
              file: "05-storyboard.webp",
              caption:
                "Selected storyboard drawings used to plan the trailer sequence."
            }
          ]
        }
      ]
    },

    {
      id: "olympian-icons",
      folder: "olympian-icons",
      title: "Olympian Icons",
      category: "Icon Design & Animation",
      year: "2024",
      format: "Group project · 5 members",

      icons: [
        { file: "song-tu.gif", name: "Song Tử" },
        { file: "bach-duong.gif", name: "Bạch Dương" },
        { file: "kim-nguu.gif", name: "Kim Ngưu" },
        { file: "song-ngu.gif", name: "Song Ngư" }
      ],

      description:
        "A Greek mythology-inspired icon collection in three sizes, accompanied by a set of four animated icons.",

      contribution:
        "Concept development, sketch development and refinement, character illustration assistance, four backgrounds and all animation for the four animated icons.",

      process: [
        {
          title: "Sketching the Icon System",
          text:
            "Our team developed a Greek mythology-inspired collection using zodiac symbolism and diamond-shaped compositions. I contributed to the initial sketches, refined character sketches and assisted with character illustration.",

          images: [
            {
              file: "01-initial-sketches.webp",
              caption:
                "Early character and icon sketches from the team design process."
            }
          ]
        },

        {
          title: "Colour & Elemental Backgrounds",
          text:
            "The team explored colour combinations across the collection. I created four backgrounds based on air, fire, earth and water, giving the icon system a shared setting while distinguishing the elemental themes.",

          images: [
            {
              file: "02-colour-tests.webp",
              caption:
                "Team colour tests exploring the icon collection."
            },
            {
              file: "03-element-backgrounds.webp",
              caption:
                "The four elemental backgrounds I created: air, fire, earth and water."
            }
          ]
        },

        {
          title: "Size Adaptation & Animation",
          text:
            "The collection was prepared in three sizes: 48 × 48, 128 × 128 and 256 × 256 pixels. I created all animation for the separate set of four animated icons, shown above.",

          images: [
            {
              file: "04-size-adaptation.webp",
              caption:
                "The icon system presented at 256 × 256, 128 × 128 and 48 × 48 pixels."
            }
          ]
        }
      ]
    },

    {
      id: "skincare",
      folder: "skincare",
      title: "Best Skincare Routine Order for 20+ Year Olds",
      category: "Interactive Infographic",
      year: "2024",
      format: "Group project · 5 members",
      video: "inforgraphic.webm",

      description:
        "A seven-step interactive infographic that makes skincare routines easier to understand and navigate for young adults.",

      contribution:
        "Concept development, sketch assistance, illustration refinement, selected colour adjustments and Figma prototyping.",

      process: [
        {
          title: "Mapping the Experience",
          text:
            "Our team organised the skincare topic into seven steps and explored a bold pop-art direction. Early sketches mapped the sequence and the relationship between the character, products and interface. I contributed to concept development and sketching.",

          images: [
            {
              file: "01-design-development.webp",
              caption:
                "Team development board: sketches, illustration variations and screen designs."
            }
          ]
        },

        {
          title: "Refining the Illustrations",
          text:
            "I refined the illustrations and adjusted selected colours for the final version. The team’s screen designs show how expressive characters, comic panels and graphic details were combined into a consistent visual experience.",

          images: [
            {
              file: "02-screen-designs.webp",
              caption:
                "Team screen designs showing the pop-art visual language across the experience."
            }
          ]
        },

        {
          title: "Interactive Prototype",
          text:
            "I built the prototype in Figma, connecting the designed screens into an interactive sequence. The seven-step structure provided the framework for navigating the information, supported by the project’s illustrations and visual cues.",

          images: [
            {
              file: "03-seven-step-structure.webp",
              caption:
                "The seven-step structure presented as a sequence of comic-style panels."
            }
          ]
        }
      ]
    }
  ];

  /* ========================================
     HÀM DÙNG CHUNG
     ======================================== */

  function element(tag, className, text) {
    const node = document.createElement(tag);

    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;

    return node;
  }

  function detailURL(project) {
    return `project.html?project=${encodeURIComponent(project.id)}`;
  }

  function enableLink(link, url) {
    if (!link) return;

    link.href = url;
    link.hidden = false;
    link.removeAttribute("aria-disabled");
    link.removeAttribute("tabindex");
    link.removeAttribute("title");
  }

  /* ========================================
     LINK XEM VIDEO ĐẦY ĐỦ
     ======================================== */

  function createWatchLink(project, className) {
    const link = element("a", className);

    link.href = fullVideoLinks[project.id];
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    link.setAttribute(
      "aria-label",
      `Watch ${project.title} in full on YouTube (opens in a new tab)`
    );

    return link;
  }

  /* ========================================
     VIDEO DEMO — TỐI ĐA 20 GIÂY
     ======================================== */

  function renderDemoVideo(project, media) {
    const link = createWatchLink(project, "project-demo");
    const video = element("video", "project-video");

    video.src = encodeURI(mediaRoot + project.video);
    video.controls = false;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.tabIndex = -1;
    video.setAttribute("aria-hidden", "true");

    const overlay = element("span", "project-demo-overlay");

    overlay.append(
      element("span", "project-demo-label", "Watch full ↗")
    );

    link.append(video, overlay);
    media.append(link);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let inView = false;
    let previewEnd = 20;

    function shouldPlay() {
      return (
        inView &&
        !document.hidden &&
        !reducedMotion.matches
      );
    }

    function updatePlayback() {
      if (!shouldPlay()) {
        video.pause();
        return;
      }

      video.play().then(() => {
        if (!shouldPlay()) {
          video.pause();
        }
      }).catch(() => {
        // Link YouTube vẫn hoạt động nếu autoplay bị chặn.
      });
    }

    video.addEventListener("loadedmetadata", () => {
      if (
        Number.isFinite(video.duration) &&
        video.duration > 0
      ) {
        previewEnd = Math.min(20, video.duration);
      }

      updatePlayback();
    });

    function restartPreview() {
      video.currentTime = 0;
      updatePlayback();
    }

    video.addEventListener("timeupdate", () => {
      if (video.currentTime >= previewEnd) {
        restartPreview();
      }
    });

    video.addEventListener("ended", restartPreview);

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          updatePlayback();
        },
        { threshold: 0.1 }
      );

      observer.observe(link);
    } else {
      inView = true;
      updatePlayback();
    }

    document.addEventListener(
      "visibilitychange",
      updatePlayback
    );

    window.addEventListener("pagehide", () => {
      video.pause();
    });

    window.addEventListener("pageshow", updatePlayback);

    reducedMotion.addEventListener(
      "change",
      updatePlayback
    );
  }

  /* ========================================
     NÚT TRÊN SELECTED WORKS
     ======================================== */

  function connectGallery() {
    const track = document.querySelector("#works-track");
    if (!track) return;

    function updateLinks() {
      const selected = track.querySelector(
        '.work-card[aria-pressed="true"]'
      );

      if (!selected) return;

      const label = selected.getAttribute("aria-label") || "";

      const project = projects.find((item) =>
        label.includes(item.title)
      );

      if (!project) return;

      enableLink(
        document.querySelector("#works-project-link"),
        detailURL(project)
      );

      const websiteLink = document.querySelector(
        "#works-website-link"
      );

      if (project.website && websiteLink) {
        enableLink(websiteLink, project.website);
        websiteLink.target = "_blank";
        websiteLink.rel = "noopener noreferrer";
      } else if (websiteLink) {
        websiteLink.hidden = true;
        websiteLink.removeAttribute("href");
      }
    }

    const observer = new MutationObserver(updateLinks);

    observer.observe(track, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["aria-pressed"]
    });

    updateLinks();
  }

  /* ========================================
     VIDEO / ICON THÀNH PHẨM
     ======================================== */

  function renderMedia(project) {
    const media = document.querySelector("#project-media");

    media.replaceChildren();
    media.classList.toggle(
      "is-icon-project",
      Boolean(project.icons)
    );

    // Ba project có YouTube sử dụng demo không thanh tua.
    if (project.video && fullVideoLinks[project.id]) {
      renderDemoVideo(project, media);
      return;
    }

    // Các video còn lại giữ trình phát thông thường.
    if (project.video) {
      const video = element("video", "project-video");

      video.src = encodeURI(mediaRoot + project.video);
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", project.title);

      media.append(video);
      return;
    }

    if (!project.icons) return;

    /* Bốn icon động */

    const animatedSection = element(
      "section",
      "icon-animated-section"
    );

    const animatedHeading = element(
      "h2",
      "",
      "Animated Icons"
    );

    animatedHeading.id = "animated-icons-title";

    animatedSection.setAttribute(
      "aria-labelledby",
      animatedHeading.id
    );

    const animatedGrid = element(
      "div",
      "project-icon-grid"
    );

    project.icons.forEach((icon) => {
      const image = element("img");

      image.src = encodeURI(iconRoot + icon.file);
      image.alt = icon.name;
      image.width = 256;
      image.height = 256;

      animatedGrid.append(image);
    });

    animatedSection.append(
      animatedHeading,
      animatedGrid
    );

    media.append(animatedSection);

    /* Bộ icon tĩnh ở ba kích thước */

    const icons = [
      { file: "aphrodite", name: "Aphrodite" },
      { file: "apollo", name: "Apollo" },
      { file: "ares", name: "Ares" },
      { file: "artemis", name: "Artemis" },
      { file: "athena", name: "Athena" },
      { file: "demeter", name: "Demeter" },
      { file: "hephaestus", name: "Hephaestus" },
      { file: "hera", name: "Hera" },
      { file: "hermes", name: "Hermes" },
      { file: "hestia", name: "Hestia" },
      { file: "poseidon", name: "Poseidon" },
      { file: "zeus", name: "Zeus" }
    ];

    const sizes = [
      { size: 48, label: "Small" },
      { size: 128, label: "Medium" },
      { size: 256, label: "Large" }
    ];

    sizes.forEach(({ size, label }) => {
      const section = element(
        "section",
        "icon-size-section"
      );

      section.style.setProperty(
        "--pack-size",
        `${size}px`
      );

      const header = element("div", "icon-size-header");
      const heading = element("h2", "", label);

      heading.id = `icon-size-${size}`;

      section.setAttribute(
        "aria-labelledby",
        heading.id
      );

      header.append(
        heading,
        element(
          "span",
          "icon-size-label",
          `${size} × ${size} px`
        )
      );

      const grid = element("div", "icon-pack-grid");

      icons.forEach((icon) => {
const source = encodeURI(
  `selected works/projects/icons/${size}x${size}/${icon.file}.png`
);
        const figure = element(
          "figure",
          "icon-pack-card"
        );

        const link = element("a", "icon-pack-link");

        link.href = source;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        link.setAttribute(
          "aria-label",
          `Open ${icon.name}, ${size} by ${size} pixels, in a new tab`
        );

        const image = element("img");

        image.src = source;
        image.alt = icon.name;
        image.width = size;
        image.height = size;
        image.loading = "lazy";
        image.decoding = "async";

        link.append(image);

        figure.append(
          link,
          element("figcaption", "", icon.name)
        );

        grid.append(figure);
      });

      section.append(header, grid);
      media.append(section);
    });
  }

  /* ========================================
     ABOUT / MY CONTRIBUTION
     ======================================== */

  function renderOverview(project) {
    const overview = document.querySelector(
      ".project-overview"
    );

    overview.replaceChildren();

    const heading = element(
      "h2",
      "",
      "About the Project"
    );

    heading.id = "overview-title";

    const content = element(
      "div",
      "project-description"
    );

    const description = element(
      "p",
      "",
      project.description
    );

    description.id = "project-description";
    content.append(description);

    // Chú thích riêng cho Tò Te Tí.
    if (project.id === "to-te-ti") {
      content.append(
        element(
          "p",
          "project-coming-soon",
          "More information coming soon."
        )
      );
    }

    if (project.format || project.contribution) {
      const contribution = element(
        "div",
        "project-contribution"
      );

      if (project.format) {
        contribution.append(
          element(
            "p",
            "project-format",
            project.format
          )
        );
      }

      if (project.contribution) {
        contribution.append(
          element(
            "h3",
            "project-contribution-title",
            "My Contribution"
          ),
          element(
            "p",
            "project-contribution-copy",
            project.contribution
          )
        );
      }

      content.append(contribution);
    }

    // Nút website của Overthinking và Silent Cat.
    if (project.website) {
      const link = element(
        "a",
        "project-button",
        "Visit Website ↗"
      );

      link.id = "project-website";
      link.href = project.website;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      content.append(link);
    }

    // Nút YouTube dưới phần About của ba video.
    if (fullVideoLinks[project.id]) {
      const watchLink = createWatchLink(
        project,
        "project-button project-watch-full"
      );

      watchLink.textContent = "Watch full on YouTube ↗";
      content.append(watchLink);
    }

    overview.append(heading, content);
  }

  /* ========================================
     PROCESS
     ======================================== */

  function createProcessImage(project, image) {
    const figure = element(
      "figure",
      "process-figure"
    );

    if (image.wide) {
      figure.classList.add("is-wide");
    }

    if (image.tall) {
      figure.classList.add("is-tall");
    }

    const source = encodeURI(
      processRoot + project.folder + "/" + image.file
    );

    const link = element(
      "a",
      "process-image-link"
    );

    link.href = source;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    link.setAttribute(
      "aria-label",
      `Open full-size image in a new tab: ${image.caption}`
    );

    const picture = element(
      "img",
      "process-image"
    );

    picture.src = source;
    picture.alt = image.caption;
    picture.loading = "lazy";
    picture.decoding = "async";

    link.append(picture);

    figure.append(
      link,
      element(
        "figcaption",
        "process-caption",
        image.caption
      )
    );

    return figure;
  }

  function renderProcess(project) {
    document.querySelector("#project-process")?.remove();

    if (!project.process?.length) return;

    const section = element(
      "section",
      "project-process"
    );

    section.id = "project-process";

    section.setAttribute(
      "aria-labelledby",
      "process-heading"
    );

    const header = element(
      "div",
      "project-process-header"
    );

    const heading = element("h2", "", "Process");
    heading.id = "process-heading";

    const dot = element(
      "span",
      "process-heading-dot"
    );

    dot.setAttribute("aria-hidden", "true");

    header.append(dot, heading);
    section.append(header);

    project.process.forEach((step, index) => {
      const article = element(
        "article",
        "process-step"
      );

      const number = element(
        "span",
        "process-step-number",
        String(index + 1).padStart(2, "0")
      );

      number.setAttribute("aria-hidden", "true");

      const copy = element(
        "div",
        "process-step-copy"
      );

      const title = element(
        "h3",
        "",
        step.title
      );

      title.id = `process-step-${index + 1}`;

      article.setAttribute(
        "aria-labelledby",
        title.id
      );

      copy.append(
        title,
        element("p", "", step.text)
      );

      article.append(number, copy);

      if (step.images?.length) {
        const gallery = element(
          "div",
          "process-image-grid"
        );

        if (step.images.length === 1) {
          gallery.classList.add("is-single");
        }

        step.images.forEach((image) => {
          gallery.append(
            createProcessImage(project, image)
          );
        });

        article.append(gallery);
      }

      section.append(article);
    });

    document.querySelector(".project-overview").after(section);
  }

  /* ========================================
     TRANG CHI TIẾT
     ======================================== */

  function renderProject() {
    const page = document.querySelector(".project-page");
    if (!page) return;

    const id = new URLSearchParams(
      location.search
    ).get("project");

    const index = projects.findIndex(
      (item) => item.id === id
    );

    if (index === -1) {
      document.title = "Project not found — Phan Ngoc Ha";

      const back = element(
        "a",
        "inner-back",
        "← Selected Works"
      );

      back.href = "selected-works.html";

      page.replaceChildren(
        element("h1", "", "Project not found"),
        back
      );

      return;
    }

    const project = projects[index];

    document.title = `${project.title} — Phan Ngoc Ha`;

    const title = document.querySelector("#project-title");
    title.textContent = project.title;

    title.classList.toggle(
      "is-long-title",
      project.title.length > 48
    );

    document.querySelector("#project-meta").textContent =
      `${project.category} · ${project.year}`;

    renderMedia(project);
    renderOverview(project);
    renderProcess(project);

    const previous =
      projects[
        (index - 1 + projects.length) % projects.length
      ];

    const next =
      projects[
        (index + 1) % projects.length
      ];

    const previousLink = document.querySelector(
      "#project-previous"
    );

    previousLink.href = detailURL(previous);
    previousLink.textContent = "← Previous project";

    previousLink.setAttribute(
      "aria-label",
      `Previous: ${previous.title}`
    );

    const nextLink = document.querySelector(
      "#project-next"
    );

    nextLink.href = detailURL(next);
    nextLink.textContent = "Next project →";

    nextLink.setAttribute(
      "aria-label",
      `Next: ${next.title}`
    );

    const worksNav = document.querySelector(
      '.inner-header a[href="selected-works.html"]'
    );

    if (worksNav) {
      worksNav.setAttribute("aria-current", "page");
    }
  }

  /* ========================================
     KHỞI CHẠY
     ======================================== */

  function init() {
    connectGallery();
    renderProject();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );
  } else {
    init();
  }
})();