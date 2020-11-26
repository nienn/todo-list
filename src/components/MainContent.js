import React from 'react';

import TodoItem from './TodoItem';

function MainContent() {
  return (
    <div className="main-content">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
  );
}

export default MainContent;