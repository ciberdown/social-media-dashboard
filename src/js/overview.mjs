import { elements } from "./elements.mjs";

class OverviewCard {
  constructor(elements) {
    this.elements = elements;
    this.direction = "./assets/";
  }
  createCards(data) {
    const mainElement = document.querySelector(".overview-today");
    data.map((info) => {
      const singleCardElement = this.createSigleCard(info);
      mainElement.appendChild(singleCardElement);
    });
  }
  createSigleCard({ title, icon, number, percentage }) {
    const element = this.elements.create("div", "single-card-overview");

    const overview_title = this.elements.create(
      "p",
      "overview-title primary",
      title
    );
    element.appendChild(overview_title);

    const platform_img = this.elements.create("img", "overview-image");
    platform_img.alt = "platform image";
    platform_img.src = this.direction + icon;
    element.appendChild(platform_img);

    const overview_number = this.elements.create("p", "overview-num", number);
    element.appendChild(overview_number);

    const section = this.elements.create("section", "overview-percentage-sec");

    const img = this.elements.createTriangle(percentage);
    const percentage_element = this.elements.create(
      "p",
      "overview-percentage",
      percentage + "%"
    );
    percentage > 0
      ? percentage_element.classList.add("profit")
      : percentage_element.classList.add("loss");

    section.appendChild(img);
    section.appendChild(percentage_element);

    element.appendChild(section);

    return element;
  }
}

export const overviewCard = new OverviewCard(elements);
