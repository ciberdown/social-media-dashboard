export class Modes {
  constructor() {
    this._currentMode = this.getSystemMode();
    this.darknessClassList = {
      query: [
        {
          element: ".top-paper",
          class: "top-paper-dark",
        },
        {
          element: ".bottom-paper",
          class: "bottom-paper-dark",
        },
        {
          element: ".main-title",
          class: "white",
        },
        {
          element: ".mode-text",
          class: "mode-text-dark",
        },
        {
          element: ".total-followers",
          class: "text-color-dark",
        },
        {
          element: ".overview-today-title",
          class: "text-color-dark",
        },
      ],
      queryAll: [
        {
          elements: ".single-card-socialmedia",
          class: "social-card-dark",
        },
        {
          elements: ".single-card-overview",
          class: "overview-single-card-dark",
        },
        {
          elements: ".mode-background-select",
          class: "mode-background-dark",
        },
        {
          elements: ".social-id",
          class: "text-color-dark",
        },
        {
          elements: ".overview-title",
          class: "text-color-dark",
        },
        {
          elements: ".followers-unit",
          class: "text-color-dark",
        },
      ],
    };
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
    this.darknessClassList.query.forEach((item) => {
      document.querySelector(item.element).classList.add(item.class);
    });
    this.darknessClassList.queryAll.forEach((item) => {
      document.querySelectorAll(item.elements).forEach((element) => {
        element.classList.add(item.class);
      });
    });
  }
  removeDarkClasses() {
    this.darknessClassList.query.forEach((item) => {
      document.querySelector(item.element).classList.remove(item.class);
    });
    this.darknessClassList.queryAll.forEach((item) => {
      document.querySelectorAll(item.elements).forEach((element) => {
        element.classList.remove(item.class);
      });
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
