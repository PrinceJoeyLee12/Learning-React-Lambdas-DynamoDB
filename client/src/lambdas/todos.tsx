import api from '../utils/api';
import { GET_TODOS, SET_TODOS } from './types';

interface Todos {
  id: string;
  title: string;
  completed: boolean;
}

//Get all Todos
export const getTodos = (): Array<Todos> | any => async (dispatch: any) => {
  api.get('/todos').then((res: Array<Todos> | any) => {
    dispatch({
      type: GET_TODOS,
      payload: res.data.sort((a: Todos, b: Todos) =>
        a.id > b.id ? 1 : b.id > a.id ? -1 : 0
      ),
    });
  });
};

//Set Todo
export const setTodo =
  (status: boolean, id: string, index: number) => async (dispatch: any) => {
    console.log('called');
    dispatch({
      type: SET_TODOS,
      payload: { id, completed: status, index },
    });

    api.get('/todos').then((res: Array<Todos> | any) => {
      dispatch({
        type: GET_TODOS,
        payload: res.data.sort((a: Todos, b: Todos) =>
          a.id > b.id ? 1 : b.id > a.id ? -1 : 0
        ),
      });
    });
  };
