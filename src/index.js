import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToDoContextProvider } from './store/todo-context';


ReactDOM.render(
  <ToDoContextProvider>
    <App />
  </ToDoContextProvider>,
  document.getElementById('root')
);

