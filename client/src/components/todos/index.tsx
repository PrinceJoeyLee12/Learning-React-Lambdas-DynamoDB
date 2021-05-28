import React, { useState, useEffect } from 'react';
import { getTodos } from '../../lambdas/todos';

interface Todos {
  id: string;
  title: string;
  completed: boolean;
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todos>>([]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  return (
    <div>
      {todos &&
        todos.map((todo) => {
          const { id, title, completed } = todo;
          <li>{id + ' - ' + completed + ' - ' + title}</li>;
        })}
    </div>
  );
};

export default Todos;
