import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk),

  // Configuración de Redux dev tools y control del flujo en caso de que no esté instalado
  typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;