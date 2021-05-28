import axios from 'axios';

interface Todos {
  id: string;
  title: string;
  completed: boolean;
}

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

export const getTodos: Array<Todos> | any = () => {
  axios
    .get(
      `https://of1jog9c5g.execute-api.ap-southeast-1.amazonaws.com/testing/todos`,
      config
    )
    .then((data: Array<Todos> | any) => {
      console.log(data);
      return data;
    });
};
