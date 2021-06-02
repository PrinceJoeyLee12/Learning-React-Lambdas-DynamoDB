import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from '../lambdas/todos';

interface Props {
  todo: TodoProps;
  key: string;
  updateTodo: (completed: boolean, id: string, title: string) => void;
  deleteTodo: (id: string) => void;
}

interface TodoProps {
  id: string;
  title: string;
  completed: boolean;
}

const Todo: React.FC<Props> = ({
  todo: { id, title, completed },
  updateTodo,
  deleteTodo,
}) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);

  const completeTask = () => {
    setIsCompleted(!isCompleted);
    //doesn't have the same data with the state that's why I have to add '!' which it must not have
    updateTodo(!isCompleted, id, title);
  };

  const inCompleteTask = () => {
    setIsCompleted(!isCompleted);
    //doesn't have the same data with the state that's why I have to add '!' which it must not have
    updateTodo(!isCompleted, id, title);
  };

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };
  return (
    <tr className='table-active'>
      <td>{id}</td>
      <td>
        <span
          style={
            isCompleted
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          }
        >
          {title}
        </span>
      </td>
      <td>
        {isCompleted ? (
          <span className='badge rounded-pill bg-success'>completed</span>
        ) : (
          <span className='badge rounded-pill bg-info'>not completed</span>
        )}
      </td>
      <td>
        {!isCompleted ? (
          <button
            type='button'
            className='btn btn-success'
            onClick={completeTask}
          >
            Complete Task
          </button>
        ) : (
          <button
            type='button'
            className='btn btn-info'
            onClick={inCompleteTask}
          >
            Incomplete Task
          </button>
        )}
      </td>
      <td>
        <button
          type='button'
          className='btn btn-danger'
          onClick={handleDeleteTodo}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default connect(null, { updateTodo, deleteTodo })(Todo);
