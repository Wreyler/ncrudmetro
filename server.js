const express = require('express');

const app = express();

const port = 3001;

const userRouters = require('./app/router/user')

app.use(userRouters)

app.listen(port, () => {
    console.log(`Sofware en linea v1`);
})