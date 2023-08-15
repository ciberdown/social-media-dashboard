import data from "./usage/info.mjs";

class TotalFollowers {
  setTotalFollowers() {
    const element = this.getTotalFollowersElement();
    element.innerHTML += data.getData().total_followers;
  }
  getTotalFollowersElement() {
    return document.querySelector(".total-followers");
  }
}

const totalFollowers = new TotalFollowers();
export default totalFollowers;
