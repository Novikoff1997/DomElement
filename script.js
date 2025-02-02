"use strict";

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.create = function () {
    if (this.selector.startsWith(".")) {
      const element = document.createElement("div");
      element.setAttribute("class", this.selector.slice(1));
      element.style.cssText = `
        height: ${this.height + "px"};
        width: ${this.width + "px"};
        background: ${this.bg};
        font-size: ${this.fontSize + "px"};
        text-align: center;
      `;
      element.textContent = "Я элемент div";
      document.body.append(element);
    } else if (this.selector.startsWith("#")) {
      const element = document.createElement("p");
      element.setAttribute("id", this.selector.slice(1));
      element.style.cssText = `
        height: ${this.height + "px"};
        width: ${this.width + "px"};
        background: ${this.bg};
        font-size: ${this.fontSize + "px"};
        text-align: center;
      `;
      element.textContent = "Я параграф, элемент p";
      document.body.append(element);
    }
  };
};

const newElement = new DomElement(".id", 200, 200, "red", 20);
const newElement2 = new DomElement("#id", 200, 200, "yellow", 20);

newElement.create();
newElement2.create();
