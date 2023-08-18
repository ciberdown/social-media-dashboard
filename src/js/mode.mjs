class Modes {
  constructor() {
    this.darkColors = {
      top_paper_dark: "#00042B",
      bottom_paper_dark: "#000435",
      card_background: "#00053D",
      card_background_hover: "white",
    };
    this._currentMode = this.getSystemMode();
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

  getSystemMode() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // System is set to dark mode
      this.setMode("dark");
      return "dark";
    } else {
      // System is set to light mode
      this.setMode("light");
      return "light";
    }
  }
  setDarkClasses() {
    document.querySelector(".top-paper").style.backgroundColor =
      this.darkColors.top_paper_dark;
    document.querySelector(".bottom-paper").style.backgroundColor =
      this.darkColors.bottom_paper_dark;
    document.querySelector(".main-title").style.color = "white";

    const elements = document.querySelectorAll(".single-card-socialmedia");
    elements.forEach((element) => {
      element.style.backgroundColor = this.darkColors.card_background;
    });
  }
  removeDarkClasses() {
    document.querySelector(".top-paper").style = "";
    document.querySelector(".bottom-paper").style = "";
    document.querySelector(".main-title").style.color = "";
    const elements = document.querySelectorAll(".single-card-socialmedia");
    elements.forEach((element) => {
      element.style.backgroundColor = "";
    });
  }
}
class ClickModesHandle {
  constructor(mode) {
    this.mode = mode;
    this.light_mode = document.getElementById("light-mode");
    this.dark_mode = document.getElementById("dark-mode");
    this.light_mode.addEventListener("click", this.clickLightBtn);
    this.dark_mode.addEventListener("click", this.clickDarkBtn);
  }

  clickLightBtn() {
    mode.setMode("light");
  }
  clickDarkBtn() {
    mode.setMode("dark");
  }
}
export const mode = new Modes();
export const clickOnModesHandler = new ClickModesHandle(mode);
