import {createElement} from './../utils.js';
import {formatDateTime, isDeadlineExpired, isTaskRepeating} from './../utils.js';

const createTaskTemplate = (task) => {
  const {
    isArchived, 
    isFavorite,
    repeatingDays,
    color, 
    description, 
    deadline,
  } = task;

  const archiveClass = isArchived 
    ? `card__btn--disabled` 
    : ``;

  const favoriteClass = isFavorite 
    ? `card__btn--disabled` 
    : ``;

  const repeatingDaysClass = isTaskRepeating(repeatingDays) 
    ? `card--repeat`
    : ``;

  const colorClass = `card--${color}`;

  const deadlineExpiredClass = !!deadline && isDeadlineExpired(new Date().getTime(), deadline)
    ? `card--deadline`
    : ``;

  const datetimeText = !!deadline 
    ? formatDateTime(deadline) 
    : ``;

  return (`
    <article class="
      card 
      ${colorClass} 
      ${repeatingDaysClass}
      ${deadlineExpiredClass}
    ">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive ${archiveClass}">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites ${favoriteClass}"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">${description}</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${datetimeText}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};

export default class Task {
  constructor(task) {
    this._task = task;

    this._element = null;
  }

  getTemplate() {
    return createTaskTemplate(this._task);
  }
  
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate())
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}