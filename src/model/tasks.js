import {COLORS, DESCRIPTIONS, DEFAULT_REPEATING_DAYS} from './../const.js';
import {getRandomInt, getRandomDate, getRandomRepeatingDays} from './../utils.js';

export const generateTask = () => {
  let task = {
    isFavorite: getRandomInt(),
    isArchived: getRandomInt(),
    description: DESCRIPTIONS[getRandomInt(DESCRIPTIONS.length - 1)],
    deadline: null,
    color: COLORS[getRandomInt(COLORS.length - 1)],
    repeatingDays: DEFAULT_REPEATING_DAYS,
  }
  if ( getRandomInt() ) {            
    task.deadline = getRandomDate();
  } else if ( getRandomInt() ) {     
    task.repeatingDays = getRandomRepeatingDays();
  }
  return task;
}

export const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
}
