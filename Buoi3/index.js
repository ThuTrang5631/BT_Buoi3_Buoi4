const express = require('express')

const app = express()

const port = 8000

const childrenRouter = require('./countries/route');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.use('/v1/users', userRouter);
app.use('/v1/countries', childrenRouter);

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

})