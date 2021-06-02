import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import TableSetup from './TableSetup';

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

interface Props {
  todos: Array<TodoItem>;
}

const CompletedTodos: React.FC<Props> = ({ todos }) => {
  return (
    <TableSetup>
      {todos.length > 0 &&
        todos.map((todo: TodoItem) => <Todo todo={todo} key={todo.id} />)}
    </TableSetup>
  );
};

const mapStateToProps = (state: any) => ({
  todos: state.todos.todos.filter((todo: TodoItem) => {
    return todo.completed === true;
  }),
});

export default connect(mapStateToProps)(CompletedTodos);
