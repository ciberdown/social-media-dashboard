import { elements } from "./elements.mjs";
import data from "./usage/info.mjs";

class SocialCard {
  constructor(socialInfo, elements) {
    this.direction = "./assets/";
    this.socialInfo = socialInfo;
    this.elements = elements;
  }
  createCard({ icon, social_id, followers, unit, today, platform }) {
    const mainElement = this.elements.create("div", "single-card-socialmedia");

    const gradiant_sec = this.elements.create("section", "gradiant-sec");
    gradiant_sec.style.backgroundImage = this.getGradiant(platform);
    mainElement.appendChild(gradiant_sec);

    const social_header = this.elements.create(
      "div",
      "social-header flex-center"
    );

    const img = this.elements.create("img", "social-image");
    img.src = this.direction + icon;
    img.alt = this.platform;
    const id = this.elements.create("p", "social-id primary", social_id);

    social_header.appendChild(img);
    social_header.appendChild(id);

    mainElement.appendChild(social_header);
    const followersElement = this.elements.create(
      "p",
      "followers-count",
      followers
    );
    mainElement.appendChild(followersElement);

    const units = this.elements.create("p", "followers-unit touppercase primary", unit);
    mainElement.appendChild(units);

    const social_footer = this.elements.create(
      "div",
      "social-footer flex-center"
    );

    const today_profit = this.elements.create("p", "today", today+' Today');
    today >= 0
      ? today_profit.classList.add("profit")
      : today_profit.classList.add("loss");
    const profit_img = this.elements.createTriangle(today);
    social_footer.appendChild(profit_img);
    social_footer.appendChild(today_profit);

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

  setInfos() {
    this.socialInfo.map((info) => {
      const card = this.createCard({ ...info });
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


export const social_cards = new SocialCard(data.getData().social, elements);
