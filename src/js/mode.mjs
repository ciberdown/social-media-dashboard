export class Modes {
  constructor() {
    this._currentMode = this.getSystemMode();
    this.setSystemMode();
    this.systemModeChangeListener();
  }
  toggleMode() {
    if (this._currentMode === "light") {
      this._currentMode = "dark";
      this.setMode("dark");
    } else {
      this._currentMode = "light";
      this.setMode("light");
    }
  }
  setMode(mode) {
    const dark_element = document.getElementById("dark-mode");
    const light_element = document.getElementById("light-mode");
    const mode_text = document.querySelector(".mode-text");

    if (mode === "dark") {
      dark_element.classList.remove("animate-rotate");
      light_element.classList.add("animate-rotate");
      mode_text.innerHTML = "Dark Mode";
      this.setDarkClasses();
    } else {
      dark_element.classList.add("animate-rotate");
      light_element.classList.remove("animate-rotate");
      mode_text.innerHTML = "Light Mode";
      this.removeDarkClasses();
    }
  }
  setSystemMode() {
    this.setMode(this._currentMode);
  }
  systemModeChangeListener() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const colorScheme = e.matches ? "dark" : "light";
        console.log(colorScheme);

        if (colorScheme === "dark") {
          this.setMode("dark");
        } else {
          this.setMode("light");
        }
      });
  }
  getSystemMode() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // System is set to dark mode
      return "dark";
    } else {
      // System is set to light mode
      return "light";
    }
  }
  setDarkClasses() {
    document.querySelector(".top-paper").classList.add("top-paper-dark");
    document.querySelector(".bottom-paper").classList.add("bottom-paper-dark");

    document.querySelector(".main-title").classList.add("white");

    document.querySelectorAll(".single-card-socialmedia").forEach((element) => {
      element.classList.add("social-card-dark");
    });

    document.querySelectorAll(".single-card-overview").forEach((element) => {
      element.classList.add("overview-single-card-dark");
    });

    document.querySelector(".mode-text").classList.add("mode-text-dark");

    document.querySelectorAll(".mode-background-select").forEach((element) => {
      element.classList.add("mode-background-dark");
    });
  }
  removeDarkClasses() {
    document.querySelector(".top-paper").classList.remove("top-paper-dark");
    document
      .querySelector(".bottom-paper")
      .classList.remove("bottom-paper-dark");

    document.querySelector(".main-title").classList.remove("white");

    document.querySelectorAll(".single-card-socialmedia").forEach((element) => {
      element.classList.remove("social-card-dark");
    });

    document.querySelectorAll(".single-card-overview").forEach((element) => {
      element.classList.remove("overview-single-card-dark");
    });

    document.querySelector(".mode-text").classList.remove("mode-text-dark");

    document.querySelectorAll(".mode-background-select").forEach((element) => {
      element.classList.remove("mode-background-dark");
    });
  }
}
export class ClickModesHandle {
  constructor(mode) {
    this.mode = mode;
    this.light_mode = document.getElementById("light-mode");
    this.dark_mode = document.getElementById("dark-mode");
    this.light_mode.addEventListener("click", () =>
      this.clickLightBtn(this.mode)
    );
    this.dark_mode.addEventListener("click", () =>
      this.clickDarkBtn(this.mode)
    );
  }

  clickLightBtn(mode) {
    mode.setMode("light");
  }
  clickDarkBtn(mode) {
    mode.setMode("dark");
  }
}
