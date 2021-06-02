import axios from 'axios';
import { Router, Request, Response } from 'express';
import todos from '../../lambdasApi/todos';
import api from '../../lambdasApi/api';

const router = Router();

// @route    GET api/todos
// @desc     GET all Todos from DynamoDB
// @access   Public
router.get('/', async (req: Request, res: Response) => {
  await axios
    .get(`${todos.getTodos}/todos`)
    .then((response: any) => {
      // console.log(response.data.Items);
      res.json(response.data.Items);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'Server Error' });
    });
});

// @route    PUT api/todos
// @desc     Add new Todos
// @access   Public
router.put('/', async (req: Request, res: Response) => {
  await api
    .put(`${todos.getTodos}/todos`, req.body)
    .then((response: any) => {
      res.json(response.data.Items);
    })
    .catch((err) => {
      res.status(500).json({ msg: 'Server Error' });
    });
});

// @route    GET api/todos/{id}
// @desc     GET one TODO
// @access   Public
router.get('/:id', async (req: Request, res: Response) => {
  await api
    .get(`${todos.getTodos}/todos/${req.params.id}`)
    .then((response: any) => {
      console.log(response.data);
      res.json(response.data.Items);
    })
    .catch((err) => {
      res.status(500).json({ msg: 'Server Error' });
    });
});

// @route    DELETE api/todos
// @desc     DELETE todo
// @access   Public
router.delete('/:id', async (req: Request, res: Response) => {
  await api
    .delete(`${todos.getTodos}/todos/${req.params.id}`)
    .then((response: any) => {
      console.log(response.data);
      res.json(response.data.Items);
    })
    .catch((err) => {
      res.status(500).json({ msg: 'Server Error' });
    });
});

module.exports = router;
