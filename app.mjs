import express from 'express';
import redis from './src/redisOm/client.mjs'
import sequelizePsql from './src/sequelize/postgres.mjs'
import mongoose from './src/mongoose/client.mjs'

const app = express()
const port = 3000

app.get('/mongo-connection', async (req, res) => {
  /*
    0 = disconnected
    1 = connected
    2 = connecting
    3 = disconnecting
   */
  const { readyState } = mongoose.connection
  res.json(readyState);
})

app.get('/redis-connection', async (req, res) => {
  await redis.set('key', 'value');
  const value = await redis.get('key');
  res.json({ value });
})

app.get('/psql-connection', async (req, res) => {
  try {
    await sequelizePsql.authenticate();
    const string = 'Connection has been established successfully.'
    res.json(string);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})