import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../lambdas/todos';

interface Props {
  addTodo: (title: string, lastIndexId: string) => any;
  todos: Array<any>;
}

const AddTodo: React.FC<Props> = ({ todos, addTodo }) => {
  const [title, setTitle] = useState<string>('');

  const submitNewTodo = () => {
    addTodo(title, todos[todos.length - 1].id);
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  return (
    <form className='d-flex' onSubmit={submitNewTodo}>
      <input
        className='form-control me-sm-2'
        type='text'
        placeholder='Add Todo ...'
        name='title'
        value={title}
        required
        onChange={handleChange}
      />
      <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
        Add
      </button>
    </form>
  );
};

const mapStateToProps = (state: any) => ({
  todos: state.todos.todos,
});
export default connect(mapStateToProps, { addTodo })(AddTodo);
