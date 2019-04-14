const express = require('express');

const hobbits = require('../hobbits/hobbitsModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
  // res.status(200).send('hello');
});

server.get('/hobbits', async (req, res) => {
  const rows = await hobbits.getAll();

  res.status(200).json(rows);
});

server.post('/api/test', (req,res) => {
  const body = req.body;
  if(body.name) {
    hobbits.insert(body)
      .then(id => {
        res.status(201).json(id) 
      })
      .catch(err => {
        res.status(500).json({message: 'Failed to add name'})
      })
  } else {
    res.status(400).json({message: 'Missing name '})
  }
})

module.exports = server;
