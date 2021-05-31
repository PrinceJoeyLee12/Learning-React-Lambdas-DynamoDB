import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../lambdas/todos';

interface TodosProps {
  id: string;
  title: string;
  completed: boolean;
}

interface Props {
  getTodos: () => Array<TodosProps> | any;
  todosApi: Array<TodosProps>;
}

const Todos: React.FC<Props> = ({ getTodos, todosApi }) => {
  const [todos, setTodos] = useState<Array<TodosProps>>([]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  useEffect(() => {
    setTodos(todosApi);
  }, [todosApi]);

  return (
    <div>
      {todos.length > 0 &&
        todos.map((todo) => {
          const { id, title, completed } = todo;
          return <li key={id}>{id + ' - ' + completed + ' - ' + title}</li>;
        })}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  todosApi: state.todos.todos,
});

export default connect(mapStateToProps, { getTodos })(Todos);
