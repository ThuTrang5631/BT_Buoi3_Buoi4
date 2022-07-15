const express= require('express');
const router = express.Router();
const users = require('./userdata.json');

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/filters', (req, res) => {
    const query = req.query;
    console.log("Query: ", query);
});

router.get('/:id',(req, res) => {
    const id = req.params.id;
    // console.log("User id: ", id);
    // res.send({userId: id});
    const reUser = users.filter(e => {
        if(e.id === id){
            return true;
        } else {
            return false;
        }
    })
    res.send(reUser);
});

router.post('/user', (req,res) => {
    const body = req.body;
    console.log("Body: ", body);
    res.send(body);
})

module.exports = router;