const btnEl = document.querySelector("[data-advice='generator']");
const textEl = document.querySelector("[data-advice='text']");
const idEl = document.querySelector("[data-advice='id']");

btnEl.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      textEl.innerText = data.slip.advice;
      idEl.innerText = data.slip.id;
    });
});
