const express = require('express')
const handler = require('./handler');
const app = express()
const port = 3000

app.get('/', handler.welcome)
app.post('/login',  handler.login);
app.get('/log-data', handler.getLog);

app.listen(port, () => console.log(`App Service listening on port ${port}!`))