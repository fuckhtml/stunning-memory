import {render, RenderPosition} from './utils.js';

import {generateFilters} from './model/filters.js';
import {generateTasks, generateTask} from './model/tasks.js';

import SiteMenuView from './view/site-menu.js';
import FiltersView from './view/filters.js';
import SortView from './view/sort.js';

import TaskView from './view/task.js';
import TaskEditView from './view/task-edit.js';
import NoTaskView from './view/no-task.js';

import LoadMoreView from './view/load-more-button.js';
import BoardView from './view/board.js';
import BoardTasksView from './view/board-tasks.js';

// ---

const renderTask = (container, task) => {
  const taskComponent = new TaskView(task);
  const taskEditComponent = new TaskEditView(task);

  const replaceCardToForm = () => {
    container.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  }

  const replaceFormToCard = () => {
    container.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  }

  const onEscKeyDown = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      replaceCardToForm();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  }

  taskComponent.getElement().querySelector(`.card__btn--edit`).addEventListener(`click`, () => {
    replaceFormToCard();
    document.addEventListener(`keydown`, onEscKeyDown);
  })

  taskEditComponent.getElement().querySelector(`form`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceCardToForm();
    document.removeEventListener(`keydown`, onEscKeyDown);
  })

  render(container, taskComponent.getElement(), RenderPosition.BEFOREEND);
}


const renderBoard = (container, tasks) => {
  const boardComponent = new BoardView();
  const boardTasksComponent = new BoardTasksView();
  const sortComponent = new SortView();
  const loadMoreButtonComponent = new LoadMoreView();

  render(container, boardComponent.getElement(), RenderPosition.BEFOREEND);

  if (tasks.every((task) => task.isArchive)) {
    render(boardComponent.getElement(), new NoTaskView().getElement(), RenderPosition.BEFOREEND);  
    return
  }

  render(boardComponent.getElement(), sortComponent.getElement(), RenderPosition.BEFOREEND);
  render(boardComponent.getElement(), boardTasksComponent.getElement(), RenderPosition.BEFOREEND);
  render(boardComponent.getElement(), loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  tasks.slice(tasksShown, TASK_COUNT_ON_START).forEach( (task) => {
    renderTask(boardTasksComponent.getElement(), task);
    tasksShown++;
  });

  loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
    tasks.slice(tasksShown, tasksShown + TASK_COUNT_BY_BUTTON)
    .forEach( (task) => {
      renderTask(boardTasksComponent.getElement(), task);
      tasksShown++;
    });
    if (tasksShown === tasks.length) {
      leadMoreButtonComponent.getElement().remove();
      loadMoreButtonComponent.removeElement();
    }
  }, false);  
  
}

// ---

const TASK_COUNT = 23;
const TASK_COUNT_ON_START = 8;
const TASK_COUNT_BY_BUTTON = 4;
const tasks = generateTasks(TASK_COUNT);
let tasksShown = 0;

const filters = generateFilters();

// ---

const controlElement = document.querySelector(`.control`);
const mainElement = document.querySelector(`.main`);

render(controlElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
render(mainElement, new FiltersView(filters).getElement(), RenderPosition.BEFOREEND);
renderBoard(mainElement, tasks);

