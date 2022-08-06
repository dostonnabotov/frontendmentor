const btn = document.querySelector("[data-advice='generator']");
const text = document.querySelector("[data-advice='text']");
const id = document.querySelector("[data-advice='id']");

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      text.innerText = data.slip.advice;
      id.innerText = data.slip.id;
    });
});
