class Element {
  create(element, classList, innerText = null) {
    const myElement = document.createElement(element);
    myElement.classList = classList;
    myElement.innerText = innerText;
    return myElement;
  }
  createTriangle(num) {
    if (num >= 0) {
      const tri = document.createElement("i");
      tri.classList = "fa-solid fa-caret-up profit";
      return tri;
    }

    const tri = document.createElement("i");
    tri.classList = "fa-solid fa-caret-up fa-rotate-180 loss";
    return tri;
  }
}
export const elements = new Element();
