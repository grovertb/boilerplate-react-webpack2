import express  from 'express'
import { join } from 'path'
import logger from 'morgan'
import path from 'path'

const app     = express()

app.use(logger('dev'));

app.use(express.static(__dirname + '/build'))

// app.use('/static', express.static(join(__dirname, '/build')))

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

export default app
