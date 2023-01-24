import express = require('express')
import { configure } from './configs'
import mongoClient = require('mongoose')

const app = express()

app.get('/', (req, resp) => {
  resp.status(200).send({
    status: 'running',
    database: mongoClient.connection.readyState === 1 ? 'Ready' : 'Not Ready',
  })
})

void configure().then(() => {
  console.log('configured')
})

const port = process.env.PORT ?? '3001'

const server = app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing server')
  server.close(() => {
    console.log('server closed')
  })
})
