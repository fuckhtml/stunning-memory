import {FILTERS} from './../const.js'

const generateFilters = () => {
  return FILTERS.map( (it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 10),
    }
  } );
}

export {generateFilters};

