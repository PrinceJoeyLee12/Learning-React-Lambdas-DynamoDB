import { GET_TODOS } from '../lambdas/types';

const initialState = {
  todos: [],
  todo: {
    id: '',
    title: '',
    completed: false,
  },
};

// eslint-disable-next-line
export default function (state: any = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
}
