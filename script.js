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
      document.addEventListener("DOMContentLoaded", () => {
        document.body.append(element);
      });
    } else if (this.selector.startsWith("#")) {
      const element = document.createElement("p");
      element.setAttribute("id", this.selector.slice(1));
      element.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        text-align: center;
      `;
      element.textContent = "Я параграф, элемент p";
      document.addEventListener("DOMContentLoaded", () => {
        document.body.append(element);
      });
    }
  };
};

const newElement = new DomElement(".class", 100, 100, "red", 20);

newElement.create();

document.addEventListener("keydown", (event) => {
  const element = document.querySelector(newElement.selector);
  element.style.position = "absolute";

  let currentLeft = parseInt(window.getComputedStyle(element).getPropertyValue("left"));
  let currentTop = parseInt(window.getComputedStyle(element).getPropertyValue("top"));

  switch (event.key) {
    case "ArrowLeft":
      element.style.left = `${currentLeft - 10}px`;
      break;
    case "ArrowUp":
      element.style.top = `${currentTop - 10}px`;
      break;
    case "ArrowRight":
      element.style.left = `${currentLeft + 10}px`;
      break;
    case "ArrowDown":
      element.style.top = `${currentTop + 10}px`;
      break;
  }
});
