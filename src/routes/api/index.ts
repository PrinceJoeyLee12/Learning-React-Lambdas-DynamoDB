import express from 'express';

const app = express();

app.use('/todos', require('./todos.ts'));

module.exports = app;
