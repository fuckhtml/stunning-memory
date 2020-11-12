'use strict';

const TASK_AMOUNT = 3;

import {createSiteMenuTemplate} from './components/site-menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createSortTemplate} from './components/sort.js';
import {createTaskTemplate} from './components/task.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {createLoadmoreTemplate} from './components/load-more-button.js';
import {createBoardTemplate} from './components/board.js';
import {createBoardTasksTemplate} from './components/board-tasks.js';


const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

render(document.querySelector(`.main .control`), createSiteMenuTemplate());
render(document.querySelector(`.main`), createFilterTemplate());

render(document.querySelector(`.main`), createBoardTemplate());
render(document.querySelector(`.board`), createSortTemplate());

render(document.querySelector(`.board`), createBoardTasksTemplate());
render(document.querySelector(`.board__tasks`), createTaskEditTemplate());
for (let i = 0; i < TASK_AMOUNT; i++) {
  render(document.querySelector(`.board__tasks`), createTaskTemplate());
}

render(document.querySelector(`.board`), createLoadmoreTemplate());
