import {MONTH_NAMES} from './const.js';

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : value;
}

export const formatDateTime = (date) => {
  const dd = castTimeFormat(date.getDate());
  const month = MONTH_NAMES[date.getMonth()];
  const hh = castTimeFormat(date.getHours());
  const mm = castTimeFormat(date.getMinutes());

  return `${dd} ${month} ${hh}:${mm}`;
}

export const isDeadlineExpired = (currentdate, deadline) => {
  return !(currentdate <= deadline) ? true : false;
}

export const isTaskRepeating = (repeatingDays) => {
  return Object.values(repeatingDays).some(Boolean);
}

// ---

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(container, template, place);
};

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
}

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
}

export const createElement = (template) => {
  const divElement = document.createElement(`div`);
  divElement.innerHTML = template;

  return divElement.firstElementChild;
}

// ---

export const getRandomInt = (...args) => {
  let from, till;
  if (args[0] && args[1])  { from = args[0]; till = args[1] } else 
  if (args[0] && !args[1]) { from = 0; till = args[0] } else
  if (!args[0] && !args[1]){ from = 0; till = 1};

  return from + Math.floor(Math.random() * (till + 1 - from));
}

export const getRandomDate = () => {
  const now = new Date().getTime();
  const week = 1000 * 60 * 60 * 24 * 7;
  const randomShift = getRandomInt(week);
  const randomDate = getRandomInt() ? now + randomShift : now - randomShift;

  return new Date(randomDate);
};

import {DEFAULT_REPEATING_DAYS} from './const.js';
export const getRandomRepeatingDays = () => {
  return Object.assign(
    {}, DEFAULT_REPEATING_DAYS, 
    {
      "mo": getRandomInt(),
      "tu": getRandomInt(),        
      "we": getRandomInt(),
      "th": getRandomInt(),
      "fr": getRandomInt(),
      "sa": getRandomInt(),
      "su": getRandomInt(),
    }
  )
}