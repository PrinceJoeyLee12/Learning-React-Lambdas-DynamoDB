import todos from '../components/todos';
import { GET_TODOS, SET_TODOS } from '../lambdas/types';

const initialState = {
  todos: [],
  todo: {
    id: '',
    title: '',
    completed: false,
  },
};

interface TodoProps {
  id: string;
  title: string;
  completed: boolean;
}
// eslint-disable-next-line
export default function (state: any = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case SET_TODOS:
      return {
        ...state,
        todos: [...state.todos],
      };
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
}
