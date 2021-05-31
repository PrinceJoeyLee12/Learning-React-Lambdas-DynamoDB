import api from '../utils/api';
import { GET_TODOS } from './types';

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
