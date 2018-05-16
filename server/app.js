const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())

//MONGO CONNECTION
mongoose.connection.once('open', () => console.log(`connected to db`))

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3333, () => console.log(`magic is happening on 3333 💋`))