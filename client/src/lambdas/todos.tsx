import api from '../utils/api';
import { GET_TODOS, SET_TODO, ADD_TODO } from './types';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

//Get all Todos
export const getTodos = (): Array<Todo> | any => async (dispatch: any) => {
  api.get('/todos').then((res: Array<Todo> | any) => {
    dispatch({
      type: GET_TODOS,
      payload: res.data.sort((a: Todo, b: Todo) => {
        const aId = parseInt(a.id);
        const bId = parseInt(b.id);
        return aId > bId ? 1 : bId > aId ? -1 : 0;
      }),
    });
  });
};

//Update Todo
export const updateTodo =
  (completed: boolean, id: string, title: string) => async (dispatch: any) => {
    const todo = {
      id,
      completed,
      title,
    };
    await api.put('/todos', todo).then((res: Array<Todo> | any) => {
      // dispatch(getTodos());
    });
  };

// Add Todo
export const addTodo =
  (title: string, lastTodoId: string) => async (dispatch: any) => {
    const todo = {
      id: (parseInt(lastTodoId) + 1).toString(),
      title,
      completed: false,
    };

    await api.put(`/todos`, todo).then((data) => {
      dispatch({
        type: ADD_TODO,
        payload: todo,
      });
    });
  };

// Get Todo
export const getTodo = (id: string) => async (dispatch: any) => {
  api.get(`/todos/${id}`).then((res: Todo | any) => {
    dispatch({
      type: SET_TODO,
      payload: res.data,
    });
  });
};

// Delete Todo
export const deleteTodo = (id: string) => async (dispatch: any) => {
  await api.delete(`/todos/${id}`).then((res: Todo | any) => {
    dispatch(getTodos());
  });
};
