import { social_cards } from "./social_media.mjs";
import totalFollowers from "./totalFollowers.mjs";
import data from "./usage/info.mjs";
import { overviewCard } from "./overview.mjs";
import { ClickModesHandle, Modes } from "./mode.mjs";

function clientSide() {
  data.logData();
  totalFollowers.setTotalFollowers();
  social_cards.setInfos();
  overviewCard.createCards(data.getData().today_overview);
  //darkness mode handler
  const mode = new Modes();
  const clickOnModesHandler = new ClickModesHandle(mode);
}
clientSide();
