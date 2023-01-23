import express = require('express')

const app = express()

app.get('/', (req, resp) => {
  resp.status(200).send({
    status: 'running',
  })
})

app.listen(3000, () => {
  console.log('Running on port 3000')
})
