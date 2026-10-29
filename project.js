"use strict";

const projects = {
  bazardor: {
    title: "BazarDor",
    category: "Marketplace",
    summary: "A digital marketplace web application.",
    demo: "https://bazardor26.vercel.app/",
    repo: "https://github.com/sajidraian/BazarDor",
    image: "assets/bazardor-preview.png",
    imageAlt: "BazarDor marketplace website preview",

    tags: ["Marketplace", "Web Application", "Personal Project"],

    description:
      "BazarDor is a portfolio project focused on creating a digital marketplace experience. Visit the live application to explore its available features and the GitHub repository to review its implementation.",

    stack:
      "For verified information about the technologies used, check the repository README, package files, and source code.",

    challenges:
      "Marketplace interfaces benefit from clear product information, intuitive navigation, responsive layouts, and consistent interactions.",

    future:
      "Potential improvements include accessibility enhancements, better error handling, refined responsive layouts, and more detailed documentation."
  },

  fitlog: {
    title: "FitLog",
    category: "Fitness Application",
    summary: "A fitness application focused on workouts and personal progress.",
    demo: "https://fitlog26.netlify.app/",
    repo: "https://github.com/sajidraian/fitlog-app",
    image: "assets/fitlog-preview.png",
    imageAlt: "FitLog fitness application preview",

    tags: ["Fitness", "Web Application", "Personal Project"],

    description:
      "FitLog is a fitness-focused project in my development portfolio. Explore the live demo to see its available features and visit the repository to review the source code.",

    stack:
      "For verified information about the technologies used, check the repository README, package files, and source code.",

    challenges:
      "Fitness applications benefit from clear activity information, understandable progress summaries, useful feedback, and interfaces that work across different screen sizes.",

    future:
      "Potential improvements include clearer progress summaries, accessible data visualizations, improved form validation, and expanded documentation."
  },

  devstack: {
    title: "Dev Stack Builder",
    category: "Developer Tool",
    summary: "A developer tool for exploring technology stack choices.",
    demo: "https://building-devstack.netlify.app/",
    repo: "https://github.com/sajidraian/dev-stack-builder-a_05",
    image: "assets/devstack-preview.png",
    imageAlt: "Dev Stack Builder application preview",

    tags: ["Developer Tool", "Web Application", "Personal Project"],

    description:
      "Dev Stack Builder is a developer-oriented project for exploring and organizing technology stack choices. Visit the live application to explore its functionality and the GitHub repository for implementation details.",

    stack:
      "For verified information about the technologies used, check the repository README, package files, and source code.",

    challenges:
      "Developer tools benefit from clear choices, understandable results, predictable interactions, and helpful explanations that support technology decisions.",

    future:
      "Potential improvements include technology stack presets, clearer technology explanations, export options, accessibility enhancements, and expanded documentation."
  }
};

const projectRoot = document.getElementById("projectDetail");
const currentYear = document.getElementById("year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

function createExternalLink(href, text, className) {
  const link = document.createElement("a");

  link.href = href;
  link.textContent = text;
  link.className = className;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  return link;
}

function showProjectNotFound() {
  if (!projectRoot) {
    console.error('Could not find the "#projectDetail" element.');
    return;
  }

  projectRoot.replaceChildren();

  const errorCard = createElement("section", "project-error");
  errorCard.appendChild(
    createElement("span", "section-kicker", "404 / PROJECT NOT FOUND")
  );
  errorCard.appendChild(
    createElement("h1", "", "This project doesn't exist.")
  );
  errorCard.appendChild(
    createElement(
      "p",
      "",
      "Choose a project from the portfolio to explore its details."
    )
  );

  const backLink = document.createElement("a");
  backLink.href = "index.html#projects";
  backLink.className = "btn btn-primary";
  backLink.textContent = "← Back to projects";

  errorCard.appendChild(backLink);
  projectRoot.appendChild(errorCard);

  document.title = "Project Not Found | Sajid Al Raian";
}

function renderProject(project) {
  if (!projectRoot) {
    console.error('Could not find the "#projectDetail" element.');
    return;
  }

  document.title = `${project.title} | Sajid Al Raian`;

  const description = document.getElementById("detailDescription");
  const stack = document.getElementById("detailStack");
  const challenges = document.getElementById("detailChallenges");
  const future = document.getElementById("detailFuture");
  const tagsContainer = document.getElementById("detailTags");

  const setText = (id, value) => {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = value;
    }
  };

  setText("detailTitle", project.title);
  setText("detailSummary", project.summary);
  setText("detailCategory", project.category);
  setText("detailDescription", project.description);
  setText("detailStack", project.stack);
  setText("detailChallenges", project.challenges);
  setText("detailFuture", project.future);

  if (description) {
    description.textContent = project.description;
  }

  if (stack) {
    stack.textContent = project.stack;
  }

  if (challenges) {
    challenges.textContent = project.challenges;
  }

  if (future) {
    future.textContent = project.future;
  }

  if (tagsContainer) {
    tagsContainer.replaceChildren();

    project.tags.forEach((tag) => {
      tagsContainer.appendChild(createElement("span", "", tag));
    });
  }

  const liveLink = document.getElementById("liveLink");
  const repoLink = document.getElementById("repoLink");
  const repoLinkText = document.getElementById("repoLinkText");
  const liveLinkText = document.getElementById("liveLinkText");

  [
    [liveLink, project.demo],
    [liveLinkText, project.demo],
    [repoLink, project.repo],
    [repoLinkText, project.repo]
  ].forEach(([link, url]) => {
    if (!link) {
      return;
    }

    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  setText(
    "liveNote",
    `Explore ${project.title} directly in your browser using the live demo.`
  );

  const preview = document.getElementById("detailProjectImage");

  if (preview) {
    preview.src = project.image;
    preview.alt = project.imageAlt;
  }

  const hero = document.querySelector(".detail-hero");

  if (hero && !preview && project.image) {
    const image = document.createElement("img");

    image.id = "detailProjectImage";
    image.className = "detail-project-image";
    image.src = project.image;
    image.alt = project.imageAlt;
    image.loading = "eager";
    image.decoding = "async";

    image.addEventListener("error", () => {
      image.hidden = true;
    });

    hero.appendChild(image);
  }

  const categoryLabel = document.getElementById("detailCategory");

  if (categoryLabel) {
    categoryLabel.textContent = project.category;
  }
}

const queryParams = new URLSearchParams(window.location.search);
const projectId = (queryParams.get("id") || "").trim().toLowerCase();
const selectedProject = projects[projectId];

if (selectedProject) {
  renderProject(selectedProject);
} else {
  showProjectNotFound();
}