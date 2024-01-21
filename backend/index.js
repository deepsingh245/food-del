const express = require('express')
const app = express()
const port = 3000

const mongoDB = require("./db")
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello the Wsfgsfgsforld!')
})
app.use("/api",require('./Routes/CreateUser'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})