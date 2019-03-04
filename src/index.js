import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import EmployeeApp from './reducers/index';
import App from './component/App';
import 'bootstrap/dist/css/bootstrap.css';
import { loadState, saveState } from './localStorage';


const persistedState = loadState()
const store = createStore(EmployeeApp, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe( async () => {
  await saveState({ 
    employee: store.getState().employee,
    tasks: store.getState().tasks
  })
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

