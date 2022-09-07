import * as React from 'react';
import { FaHandPointUp } from "react-icons/fa";

const TodoList = () => {
      return (
            <section className="todo-list">
            <div className="empty-todo-text">
                  <p>Nothing to do?</p>
                  <p> Add a task above<FaHandPointUp /></p> 
            </div>
            </section>
      )
}

export default TodoList;