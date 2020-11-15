import {MONTH_NAMES} from './../const.js';
import {formatTime} from './../utils.js';

export const createTaskTemplate = (task) => {

  const {
    description, 
    color, 
    isArchived, 
    isFavorite,
    deadline,
    repeatingDays,
  } = task;

  const colorClass = `card--${color}`;
  const isDeadline = !!deadline;
  const repeatingDaysClass = repeatingDays && Object.values(repeatingDays).some(Boolean) ? `card--repeat` : ``; 
  const deadlineExpiredClass = isDeadline && deadline < Date.now() ? `card--deadline` : ``;
  const archiveClass = (isArchived ? `card__btn--disabled` : ``);
  const favoriteClass = (isFavorite ? `card__btn--disabled` : ``);
  const date = isDeadline ? `${deadline.getDate()} ${MONTH_NAMES[deadline.getMonth()]}` : ``;
  const time = isDeadline ? `${formatTime(deadline)}` : ``;

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
              ${ isDeadline ? 
                `<div class="card__dates">
                  <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                      <span class="card__date">${date} ${time}</span>
                    </p>
                  </div>
                </div>`: ``
              } 
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};