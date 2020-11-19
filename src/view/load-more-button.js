import {createElement} from './../utils.js';

const createLoadmoreTemplate = () => {
  return (`<button class="load-more" type="button">load more</button>`);
};

export default class LoadMore {
  constuctor() {
    this._element = null;
  }

  getTemplate() {
    return createLoadmoreTemplate();
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