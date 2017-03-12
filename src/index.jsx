import React from 'react';
import ReactDOM from 'react-dom';
import ViewStore from './stores/ViewStore';
import TodoApp from './components/todoApp';

ReactDOM.render(
  <TodoApp viewStore={ViewStore} />,
  document.getElementById('root'),
);
