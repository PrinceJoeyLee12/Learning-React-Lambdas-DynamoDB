import axios from 'axios';
import { Router, Request, Response } from 'express';
import todos from '../../lambdasApi/todos';

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

module.exports = router;
