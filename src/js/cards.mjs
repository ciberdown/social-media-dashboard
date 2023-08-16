import data from "./usage/info.mjs";

class SocialCard {
  constructor(socialInfo) {
    this.direction = "./assets/";
    this.socialInfo = socialInfo;
  }
  createCard({ icon, social_id, followers, unit, today, platform }) {
    const mainElement = this.createElement("div", "single-card-socialmedia");

    const gradiant_sec = this.createElement("section", "gradiant-sec");
    gradiant_sec.style.backgroundImage = this.getGradiant(platform);
    mainElement.appendChild(gradiant_sec);

    const social_header = this.createElement(
      "div",
      "social-header flex-center"
    );

    const img = this.createElement("img", "social-image");
    img.src = this.direction + icon;
    const id = this.createElement("p", "social-id", social_id);

    social_header.appendChild(img);
    social_header.appendChild(id);

    mainElement.appendChild(social_header);
    const followersElement = this.createElement(
      "p",
      "followers-count",
      followers
    );
    mainElement.appendChild(followersElement);

    const units = this.createElement("p", "followers-unit", unit);
    mainElement.appendChild(units);

    const social_footer = this.createElement(
      "div",
      "social-footer flex-center"
    );

    const today_profit = this.createElement("p", "today", today);
    const profit_img = this.getArrow(today);
    social_footer.appendChild(profit_img);
    social_footer.appendChild(today_profit);

    profit_img.classList.remove("hidden");

    mainElement.appendChild(social_footer);

    return mainElement;
  }
  getArrow(today) {
    if (today >= 0) {
      const element = document.createElement("i");
      element.classList = "fa-solid fa-arrow-left fa-rotate-90";
      element.style.color = "#28cc62";
      element.id = "arrow-up";
      return element;
    }
    const element = document.createElement("i");
    element.classList = "fa-solid fa-arrow-left fa-rotate-270";
    element.style.color = "#f41f34";
    element.id = "arrow-down";
    return element;
  }
  createElement(element, classList, innerText = null) {
    const myElement = document.createElement(element);
    myElement.classList = classList;
    myElement.innerText = innerText;
    return myElement;
  }

  setInfos() {
    this.socialInfo.map((info) => {
      const card = this.createCard({ ...info });
      console.log(card);
      document.querySelector(".social-media-dashboard").appendChild(card);
    });
  }
  getGradiant(platform) {
    switch (platform) {
      case "instagram":
        return "linear-gradient(to right, #f42626, #e35151)";
      case "facebook":
        return "linear-gradient(to right, #1654a2, #0f64cd)";
      case "youtube":
        return "linear-gradient(to right, #d50505, #e20000)";
      case "twitter":
        return "linear-gradient(to right, #1654a2, #0f64cd)";
    }
  }
}

export const social_cards = new SocialCard(data.getData().social);
