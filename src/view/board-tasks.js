import {createElement} from './../utils.js';

const createBoardTasksTemplate = () => {
  return (`<div class="board__tasks"></div>`);
};

export default class BoardTask {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createBoardTasksTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());      
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}