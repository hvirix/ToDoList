const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let todos = [
    { id: 1, text: "Вивчити Express.js", completed: false },
    { id: 2, text: "Зробити гарний фронтенд", completed: true }
];

app.get('/api/todos', (req, res) => res.json(todos));

app.post('/api/todos', (req, res) => {
    const newTodo = { id: Date.now(), text: req.body.text, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.delete('/api/todos/:id', (req, res) => {
    todos = todos.filter(t => t.id !== parseInt(req.params.id));
    res.status(204).send();
});

app.listen(PORT, () => console.log(`Сервер летить на http://localhost:${PORT}`));