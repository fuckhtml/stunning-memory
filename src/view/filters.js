import {createElement} from './../utils.js';

const createFilterMarkup = (filter, isChecked = false) => {
  const {name, count} = filter;
  const checkedClass = isChecked
    ? `checked`
    : ``;

  return (`
    <input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${checkedClass}
    />
    <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__${name}-count">${count}</span>
    </label>`
  );
}

const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map( (it, i) => 
    createFilterMarkup(it, i === 0)
  ).join('\n');
  
  return (`
    <section class="main__filter filter container">
      ${filtersMarkup}
    </section>`
  );
};

export default class Filters {
  constructor(filters) {
    this._filters = filters || [];
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
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