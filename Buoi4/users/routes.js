const express = require('express');
const router = express.Router();
const users = require('./user-data.json');
const client = require('../database/pg');

router.post('', async (req, res) => {
  const body = req.body;
  const result = await client.query(`
    INSERT INTO users(id, name, age, address)
    VALUES ('${body.id}', '${body.name}', '${body.age}', '${body.address}')
  `);
  res.send(result);
});

router.get('', async(req, res) => {
  const result = await client.query(`
    SELECT *
    FROM users
  `);
  res.send(result.rows);
});

// TODO: Update user with parameter user's id
router.put('/:id', async (req,res) => {
  const body = req.body;
  const result = await client.query(`
    UPDATE users
    SET name = '${body.name}', age = '${body.age}', address = '${body.address}'
    WHERE id = '${body.id}'
  `);
  res.send(result);
});

// TODO: Delete user with parameter user's id
router.delete('/:id', async(req, res) => {
  const id = req.params.id;
  const result = await client.query(`
    DELETE 
    FROM users
    WHERE id = '${id}'
  `);
  res.send(result.rows);
});

module.exports = router;