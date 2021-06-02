import todos from '../components/Todos';
import { GET_TODOS, SET_TODO, ADD_TODO } from '../lambdas/types';

const initialState = {
  todos: [],
  todo: {
    id: '',
    title: '',
    completed: false,
  },
};

// interface TodoProps {
//   id: string;
//   title: string;
//   completed: boolean;
// }

// eslint-disable-next-line
export default function (state: any = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case SET_TODO:
      return {
        ...state,
        todo: payload,
      };
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.unshift(payload),
      };
    default:
      return state;
  }
}
