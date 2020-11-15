'use strict';

import {generateFilters} from './model/filter.js';
import {generateTasks, generateTask} from './model/tasks.js';

import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFilterTemplate} from './view/filter.js';
import {createSortTemplate} from './view/sort.js';
import {createTaskTemplate} from './view/task.js';
import {createTaskEditTemplate} from './view/task-edit.js';
import {createLoadmoreTemplate} from './view/load-more-button.js';
import {createBoardTemplate} from './view/board.js';
import {createBoardTasksTemplate} from './view/board-tasks.js';

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const controlElement = document.querySelector(`.control`);
render(controlElement, createSiteMenuTemplate());

const filters = generateFilters();
const mainElement = document.querySelector(`.main`);
render(mainElement, createFilterTemplate(filters));
render(mainElement, createBoardTemplate());

const boardElement = document.querySelector(`.board`);
render(boardElement, createSortTemplate());
render(boardElement, createBoardTasksTemplate());
render(boardElement, createLoadmoreTemplate());

const boardTasksElement = document.querySelector(`.board__tasks`);

const TASK_COUNT = 23;
const TASK_COUNT_ON_START = 8;
const TASK_COUNT_BY_BUTTON = 4;
let tasksShown = 0;

const task = generateTask();
render(boardTasksElement, createTaskEditTemplate(task));

const tasks = generateTasks(TASK_COUNT);
tasks.slice(tasksShown, TASK_COUNT_ON_START).forEach( (task) => {
  render(boardTasksElement, createTaskTemplate(task));
  tasksShown++;
});

const loadMoreButton = document.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, () => {
  tasks.slice(tasksShown, tasksShown + TASK_COUNT_BY_BUTTON).forEach( (task) => {
    render(boardTasksElement, createTaskTemplate(task));
    tasksShown++;
  });
  tasksShown === tasks.length && event.target.remove();
},false);



