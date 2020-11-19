import {MONTH_NAMES, COLORS, DEFAULT_REPEATING_DAYS} from './../const.js';
import {createElement} from './../utils.js';
import {isDeadlineExpired, isTaskRepeating, formatDateTime} from './../utils.js';

const BLANK_TASK = {
  isFavorite: false,
  isArchived: false,
  description: ``,
  deadline: null,
  color: COLORS[0],
  repeatingDays: DEFAULT_REPEATING_DAYS,
}

const createRepeatingDayTemplate = (dayName, isRepeating) => {
  const checked = isRepeating
    ? `checked`
    : ``;

  return (`
    <input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${dayName}-4"
      name="repeat"
      value="${dayName}"
      ${checked}
    />
    <label class="card__repeat-day" for="repeat-${dayName}-4"
      >${dayName}</label
    >`
  );
}

const createRepeatingDaysTemplate = (repeatingDays) => {
  return (`
    <fieldset class="card__repeat-days">
      <div class="card__repeat-days-inner">
        ${Object.keys(repeatingDays).reduce( (template, key) => {
          return template + createRepeatingDayTemplate(key, repeatingDays[key]) 
        }, ``)}
      </div>
    </fieldset>`
  );
}

const createDeadlineTemplate = (deadline) => {
  const datetimeText = formatDateTime(deadline);
  return (`
    <fieldset class="card__date-deadline">
      <label class="card__input-deadline-wrap">
        <input
          class="card__date"
          type="text"
          placeholder=""
          name="date"
          value="${datetimeText}"
        />
      </label>
    </fieldset>`
  );
}

const createColorTemplate = (color, isChecked) => {
  const checked = isChecked 
    ? `checked`
    : ``;

  return (`
    <input
      type="radio"
      id="color-${color}-4"
      class="card__color-input card__color-input--${color} visually-hidden"
      name="color"
      value="${color}"
      ${checked}
    />
    <label
      for="color-${color}-4"
      class="card__color card__color--${color}"
      >${color}</label
    >`
  );
}

const createColorsTemplate = (checkedColor) => {
  return COLORS.reduce( (template, color, i) => {
    return template + createColorTemplate(color, i === COLORS.indexOf(checkedColor))
  }, ``);
}

const createTaskEditTemplate = (task) => {
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

  const deadlineWord = !!deadline
    ? `yes`
    : `no`;

  const deadlineTemplate = !!deadline 
    ? createDeadlineTemplate(deadline)
    : ``;

  const repeatingDaysWord = isTaskRepeating(repeatingDays)
    ? `yes`
    : `no`;

  const repeatingDaysTemplate = isTaskRepeating(repeatingDays)
    ? createRepeatingDaysTemplate(repeatingDays) 
    : `` ;

  const colorsTemplate = createColorsTemplate(color);

  return (`
    <article class="
      card 
      card--edit 
      ${colorClass} 
      ${repeatingDaysClass}
      ${deadlineExpiredClass}
    ">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text"
              >${description}</textarea>
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date:<span class="card__date-status"> ${deadlineWord}</span>
                </button>

                ${deadlineTemplate}

                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">${repeatingDaysWord}</span>
                </button>

                ${repeatingDaysTemplate}
              </div>
            </div>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                ${colorsTemplate}
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>`
  );
};

export default class TaskEdit {
  constructor(task) {
    this._task = task || BLANK_TASK;
    this._element = null;
  }

  getTemplate() {
    return createTaskEditTemplate(this._task);
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