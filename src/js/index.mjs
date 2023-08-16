import { mode } from "./mode.mjs";
import totalFollowers from "./overview.mjs";
import data from "./usage/info.mjs";

function clientSide() {
  data.logData();
  totalFollowers.setTotalFollowers();
  mode.getSystemMode();
}
clientSide();
