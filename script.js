function updateClock() {

  const clock = document.getElementById("clock");

  const now = new Date();

  const year = now.getFullYear();

  const month = String(now.getMonth() + 1).padStart(2, "0");

  const date = String(now.getDate()).padStart(2, "0");

  let hours = now.getHours();

  const minutes = String(now.getMinutes()).padStart(2, "0");

  const seconds = String(now.getSeconds()).padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;

  hours = hours ? hours : 12;

  const formattedHours = String(hours).padStart(2, "0");

  clock.textContent =
    `${year}.${month}.${date} ${period} ${formattedHours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

});
