export default function initDarkMode() {
  document.addEventListener("DOMContentLoaded", () => {
    const darkModeStorage = localStorage.getItem("dark-mode");
    const classActiveStorage = localStorage.getItem("class-active");
    const btnTheme = document.querySelector("#btn-theme");
    const themeElement = document.querySelector("#theme-mode");
    const events = ["click", "touchstart"];
    const htmlEl = document.documentElement;

    if (darkModeStorage) {
      htmlEl.setAttribute("dark", "true");
      themeElement.classList.add("active");
    }

    function activeTheme(event) {
      if (event.type === events[1]) {
        event.preventDefault();
      }

      if (themeElement.classList.contains("active")) {
        themeElement.classList.remove("active");
        localStorage.removeItem("class-active");
      } else {
        themeElement.classList.add("active");
        localStorage.setItem("class-active", true);
      }

      if (htmlEl.hasAttribute("dark", "true")) {
        htmlEl.removeAttribute("dark", "true");
        localStorage.removeItem("dark-mode");
      } else {
        htmlEl.setAttribute("dark", "true");
        localStorage.setItem("dark-mode", true);
      }
    }

    events.forEach((userEvent) => {
      btnTheme.addEventListener(userEvent, activeTheme);
    });
  });
}
