/* ========== OVERVIEW ============ */
import data from "./data.json" assert { type: "json" };

const overviews = document.getElementById("overviews");

let template = "";

data.map((el) => {
  let rateImg, rate;
  if (el.rating.rate === "up") {
    rateImg = "./assets/images/icon-up.svg";
    rate = "text-success";
  } else if (el.rating.rate === "down") {
    rateImg = "./assets/images/icon-down.svg";
    rate = "text-danger";
  }

  template += `
        <div class="card | flow">
          <div class="card__layout | jc-between">
            <p class="text-body">${el.title}</p>
            <img src=${el.icon} alt=${el.name}/>
          </div>
          <div class="card__layout | jc-between">
            <h2 class="fs-700 text-neutral">${el.number}</h2>
            <div class="rating">
              <img src=${rateImg} alt=${el.rating.rate} />
              <span class=${rate}>${el.rating.number}%</span>
            </div>
          </div>
        </div>
    `;
});

overviews.innerHTML += template;

/* ========== THEME ============ */
const themeToggle = document.getElementById("theme-toggle");
function enableDarkMode() {
  document.body.classList.add("dark-theme");
  themeToggle.setAttribute("aria-label", "Switch to light theme");
}

function enableLightMode() {
  document.body.classList.remove("dark-theme");
  themeToggle.setAttribute("aria-label", "Switch to dark theme");
}

// check the user's theme preference
function setThemePreference() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    enableDarkMode();
    return;
  }
  enableLightMode();
}

document.onload = setThemePreference();

themeToggle.addEventListener("click", () => {
  document.body.classList.contains("dark-theme")
    ? enableLightMode()
    : enableDarkMode();
});
