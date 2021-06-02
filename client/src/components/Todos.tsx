import React, { useEffect } from 'react';
import { getTodos } from '../lambdas/todos';
import { connect } from 'react-redux';

import Todo from './Todo';
import TableSetup from './TableSetup';

interface TodosApi {
  id: string;
  title: string;
  completed: boolean;
}

interface TodosProps {
  getTodos: () => Array<TodosApi> | any;
  todosApi: Array<TodosApi> | any;
}

const Todos: React.FC<TodosProps> = ({ getTodos, todosApi }) => {
  useEffect(() => {
    if (todosApi.length === 0) getTodos();
  }, []);

  return (
    <TableSetup>
      {todosApi &&
        todosApi.map((todo: TodosApi) => <Todo todo={todo} key={todo.id} />)}
    </TableSetup>
  );
};

const mapStateToProps = (state: any) => ({
  todosApi: state.todos.todos,
});

export default connect(mapStateToProps, { getTodos })(Todos);
