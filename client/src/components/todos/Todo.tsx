import React, { useState } from 'react';
import { setTodo } from '../../lambdas/todos';

interface Props {
  todo: TodoProps;
  key: string;
}

interface TodoProps {
  id: string;
  title: string;
  completed: boolean;
}

const Todo: React.FC<Props> = ({ todo: { id, title, completed } }) => {
  const [status, setStatus] = useState<boolean>(completed);

  const completeTask = () => {
    setStatus(!status);
  };

  const inCompleteTask = () => {
    setStatus(!status);
  };
  return (
    <tr className='table-active'>
      <td>{id}</td>
      <td>
        <span
          style={
            status
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          }
        >
          {title}
        </span>
      </td>
      <td>
        {status ? (
          <span className='badge rounded-pill bg-success'>completed</span>
        ) : (
          <span className='badge rounded-pill bg-info'>not completed</span>
        )}
      </td>
      <td>
        {!status ? (
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
        <button type='button' className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Todo;
