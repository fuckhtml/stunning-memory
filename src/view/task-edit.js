import {MONTH_NAMES, COLORS} from './../const.js';
import {formatTime} from './../utils.js';

const createRepeatingDayMarkup = (dayName, isRepeating) => {
  return (`
    <input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${ dayName }-4"
      name="repeat"
      value="${ dayName }"
      ${ isRepeating ? `checked` : `` }
    />
    <label class="card__repeat-day" for="repeat-${ dayName }-4"
      >${ dayName }</label
    >`
  );
}

const createRepeatingDaysMarkup = (repeatingDays) => {
  let repeatingDaysMarkup = ``;
  for (const key of Object.keys(repeatingDays)) {
    repeatingDaysMarkup += createRepeatingDayMarkup(key, repeatingDays[key]);
  }
  return repeatingDaysMarkup;
}

const createColorMarkup = (color, isChecked) => {
  return (`
    <input
      type="radio"
      id="color-${color}-4"
      class="card__color-input card__color-input--${color} visually-hidden"
      name="color"
      value="${color}"
      ${isChecked ? `checked` : ``}
    />
    <label
      for="color-${color}-4"
      class="card__color card__color--${color}"
      >${color}</label
    >`
  );
}

const createColorsMarkup = (checkedColor) => {
  return COLORS.reduce( (colorsMarkup, color, i) => 
    colorsMarkup += createColorMarkup(color, i === COLORS.indexOf(checkedColor)), 
  `` );
}

export const createTaskEditTemplate = (task) => {
  const {
    description, 
    deadline, 
    color, 
    repeatingDays, 
    isArchived, 
    isFavorite,
  } = task;

  const colorClass = `card--${color}`;
  const isDeadline = !!deadline;
  const isDateWord = isDeadline ? `yes` : `no`;
  const isRepeatWord = repeatingDays && Object.values(repeatingDays).some(Boolean) ? `yes` : `no`;
  const deadlineExpiredClass = isDeadline && deadline < Date.now() ? `card--deadline` : ``;
  const repeatingDaysClass = repeatingDays && Object.values(repeatingDays).some(Boolean) ? `card--repeat` : ``; 
  const date = isDeadline ? `${deadline.getDate()} ${MONTH_NAMES[deadline.getMonth()]}` : ``;
  const time = isDeadline ? `${formatTime(deadline)}` : ``;

  const repeatingDaysMarkup = createRepeatingDaysMarkup(repeatingDays);
  const colorsMarkup = createColorsMarkup(color);

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
                  date: <span class="card__date-status">${isDateWord}</span>
                </button>
                ${
                  isDeadline ? `
                    <fieldset class="card__date-deadline">
                      <label class="card__input-deadline-wrap">
                        <input
                          class="card__date"
                          type="text"
                          placeholder=""
                          name="date"
                          value="${date} ${time}"
                        />
                      </label>
                    </fieldset>` : ``
                }

                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">${isRepeatWord}</span>
                </button>

                <fieldset class="card__repeat-days">
                  <div class="card__repeat-days-inner">
                    ${repeatingDaysMarkup}
                  </div>
                </fieldset>
              </div>
            </div>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                ${colorsMarkup}
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>`);
};