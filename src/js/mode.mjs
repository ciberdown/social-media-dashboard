class Modes {
  constructor() {
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

    if (mode === "light") {
      dark_element.classList.remove("animate-rotate");
      light_element.classList.add("animate-rotate");
    } else {
      dark_element.classList.add("animate-rotate");
      light_element.classList.remove("animate-rotate");
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
    mode.setMode("dark");
  }
  clickDarkBtn() {
    mode.setMode("light");
  }
}
export const mode = new Modes();
export const clickOnModesHandler = new ClickModesHandle(mode);
