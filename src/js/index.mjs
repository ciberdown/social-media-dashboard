import { social_cards } from "./social_media.mjs";
import { mode } from "./mode.mjs";
import totalFollowers from "./totalFollowers.mjs";
import data from "./usage/info.mjs";
import { overviewCard } from "./overview.mjs";

function clientSide() {
  data.logData();
  totalFollowers.setTotalFollowers();
  social_cards.setInfos();
  overviewCard.createCards(data.getData().today_overview);
  mode.getSystemMode();
}
clientSide();
