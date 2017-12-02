//runs simple express web server on port 3000

const express = require('express')
const app = express()
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.static('workshop', {}))
app.listen(3000, () => console.log('Listening on port 3000'))