import totalFollowers from "./overview.mjs";
import data from "./usage/info.mjs";

function clientSide() {
  data.logData();
  totalFollowers.setTotalFollowers();
}
clientSide();
