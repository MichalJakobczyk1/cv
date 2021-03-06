import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("Hello, I'm Michał, nice to see yoo! 🚀");

fetch("https://api.github.com/users/MichalJakobczyk1/repos?sort=created")
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".projects-grid--js");
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;
      const template = ` <article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img src="github-console.svg" alt="" />
          <h3 class="project__grid project__title">
            <span class="project__label">project:</span><span>${name}</span>
          </h3>
          <p class="project__grid">
            <span class="project__label">description:</span><span>${description}</span>
          </p>
          <p class="project__grid">
            <span class="project__label">demo:</span
            ><span
              >&lt;<a class="project__link" rel="noopener noreferrer" href="${homepage}" title="${name} - demo" target="_blank">see here</a>&gt;</span
            >
          </p>
          <p class="project__grid">
            <span class="project__label">github:</span
            ><span
              >&lt;<a class="project__link" rel="noopener noreferrer" href="${html_url}" title="${name} - code" target="_blank">source code</a
              >&gt;</span
            >
          </p>
        </div>
      </article>`;
      if (description) {
        container.innerHTML += template;
      }
    }
  })
  .catch((e) => console.log(e));
