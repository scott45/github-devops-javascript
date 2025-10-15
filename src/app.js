const express = require('express');
     const cors = require('cors');
     const app = express();
     app.use(cors());
     app.use(express.json());

     let todos = []; // In-memory for demo

     app.get('/todos', (req, res) => res.json(todos));
     app.post('/todos', (req, res) => {
       const id = todos.length + 1;
       todos.push({ id, ...req.body });
       res.json({ id });
     });
     app.delete('/todos/:id', (req, res) => {
       todos = todos.filter(t => t.id != req.params.id);
       res.json({ success: true });
     });

     app.listen(3000, () => console.log('TODO API on port 3000'));
