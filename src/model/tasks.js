import {COLORS} from './../const.js';

const defaultRepeatingDays = {
  "mo": false,
  "tu": false,
  "we": false,
  "th": false,
  "fr": false,
  "sa": false,
  "su": false,
};

const descriptions = [
  `Провести вечернюю тренировку`,
  `Выучить 10 английских слов`,
  `Дочитать книгу`,
];

const getRandomValue = (from, till) => {
  return from + Math.floor(Math.random() * (till + 1 - from));
}

const getRandomItemFromArray = (array) => {
  return array[getRandomValue(0, array.length - 1)];
};

const generateRandomDate = () => {
  const now = new Date().getTime();
  const week = 1000 * 60 * 60 * 24 * 7;
  const randomShift = getRandomValue(0, week);
  const randomDate = getRandomValue(0,1) ? now + randomShift : now - randomShift;

  return new Date(randomDate);
};

const generateRandomRepeatingDays = () => {
  return Object.assign(
    {}, defaultRepeatingDays, 
    {
      "mo": getRandomValue(0,1),
      "tu": getRandomValue(0,1),        
      "we": getRandomValue(0,1),
      "th": getRandomValue(0,1),
      "fr": getRandomValue(0,1),
      "sa": getRandomValue(0,1),
      "su": getRandomValue(0,1),
    }
  )
}

export const generateTask = () => {
  let task = {
    description: getRandomItemFromArray(descriptions),
    color: getRandomItemFromArray(COLORS),
    isFavorite: getRandomValue(0,1),
    isArchived: getRandomValue(0,1),
    deadline: null,
    repeatingDays: defaultRepeatingDays,
  }
  if ( getRandomValue(0,1) ) {            
    task.deadline = generateRandomDate();
  } else if ( getRandomValue(0,1) ) {     
    task.repeatingDays = generateRandomRepeatingDays();
  }
  return task;
}

export const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
}
