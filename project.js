const projects = {
bazardor: {
title: "BazarDor",
summary: "A digital marketplace web application.",
demo: "https://bazardor26.vercel.app/",
repo: "https://github.com/sajidraian/BazarDor",
image: "assets/bazardor-preview.png",
imageAlt: "BazarDor marketplace website preview",
tags: ["Marketplace", "Web Application", "Personal Project"],
description:
"BazarDor is a portfolio project focused on a digital marketplace experience. Visit the live demo to explore the application and the GitHub repository to review its implementation.",
stack:
"Check the repository README and package files for the confirmed languages, frameworks, and services used in this project.",
challenges:
"Marketplace interfaces benefit from clear product information, intuitive navigation, responsive layouts, and consistent user interactions. Explore the live application to see how these areas are handled.",
future:
"Potential improvements include refining responsive layouts, improving accessibility, strengthening error handling, and documenting setup instructions.",
},

fitlog: {
title: "FitLog",
summary: "A fitness application focused on workouts and personal progress.",
demo: "https://fitlog26.netlify.app/",
repo: "https://github.com/sajidraian/fitlog-app",
image: "assets/fitlog-preview.png",
imageAlt: "FitLog fitness application preview",
tags: ["Fitness", "Web Application", "Personal Project"],
description:
"FitLog is a fitness-focused project in my development portfolio. Visit the live demo to explore its available features and the repository to review the source code.",
stack:
"Check the repository README and package files to confirm the languages, frameworks, and dependencies used in this project.",
challenges:
"Fitness applications can involve presenting activity information clearly, making progress easy to understand, validating user input, and maintaining a usable interface across screen sizes.",
future:
"Potential improvements include clearer progress summaries, accessible data visualizations, improved form validation, and documentation for setup and usage.",
},

devstack: {
title: "Dev Stack Builder",
summary: "A developer tool for exploring technology stack choices.",
demo: "https://building-devstack.netlify.app/",
repo: "https://github.com/sajidraian/dev-stack-builder-a_05",
image: "assets/devstack-preview.png",
imageAlt: "Dev Stack Builder application preview",
tags: ["Developer Tool", "Web Application", "Personal Project"],
description:
"Dev Stack Builder is a developer-oriented project for exploring and organizing technology stack choices. Visit the live application to see its functionality and the repository for implementation details.",
stack:
"Check the repository README and package files to confirm the technologies and dependencies used in this project.",
challenges:
"Developer tools benefit from clear choices, understandable results, predictable interactions, and explanations that help users make informed technology decisions.",
future:
"Potential improvements include useful stack presets, clearer technology explanations, export or sharing options, accessibility enhancements, and expanded documentation.",
},
};

const params = new URLSearchParams(window.location.search);
const requestedId = (params.get("id") || "").toLowerCase();
const project = projects[requestedId];

const root = document.getElementById("projectDetail");
const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}

if (!root) {
console.error('Could not find the "#projectDetail" element.');
} else if (!project) {
root.innerHTML = `     <div class="detail-error">       <h1>Project not found</h1>       <p>Please choose a project from the portfolio page.</p>       <a href="index.html#projects">← Back to projects</a>     </div>
  `;
} else {
document.title = `${project.title} | Sajid Al Raian`;

const setText = (id, value) => {
const element = document.getElementById(id);
if (element) element.textContent = value;
};

setText("detailTitle", project.title);
setText("detailSummary", project.summary);
setText("detailDescription", project.description);
setText("detailStack", project.stack);
setText("detailChallenges", project.challenges);
setText("detailFuture", project.future);

const tags = document.getElementById("detailTags");

if (tags) {
tags.replaceChildren();


project.tags.forEach((tag) => {
  const span = document.createElement("span");
  span.textContent = tag;
  tags.appendChild(span);
});


}

// Configure GitHub repository links.
["repoLink", "repoLinkText"].forEach((id) => {
const link = document.getElementById(id);


if (link) {
  link.href = project.repo;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
}


});

// Configure live-demo links.
["liveLink", "liveLinkText"].forEach((id) => {
const link = document.getElementById(id);


if (link) {
  link.href = project.demo;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
}


});

// Update the live-demo note.
setText(
"liveNote",
`Explore ${project.title} in your browser using the live demo.`
);

// Add a project screenshot to the details page when a suitable
// image container exists in project.html.
const hero = document.querySelector(".detail-hero");

if (hero && project.image) {
const preview = document.createElement("img");


preview.className = "detail-project-image";
preview.src = project.image;
preview.alt = project.imageAlt;
preview.loading = "eager";

const existingPreview = document.getElementById("detailProjectImage");

if (!existingPreview) {
  preview.id = "detailProjectImage";
  hero.appendChild(preview);
}


}
}
