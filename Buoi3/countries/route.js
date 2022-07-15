const express = require('express');
const router = express.Router();
const countries = require('./output.json');

router.get('/', (req, res) => {
    res.send(countries);
})

router.get('/:country',(req, res) => {
    const country = req.params.country;
    let resCountries = [];
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].country === country) {
            resChildren.push(countries[i]);
            break;
        }
    }
    res.send(resCountries);
});

router.delete('/:country',(req, res) => {
    const country = req.params.country;
    const resCoutries = countries.filter(e => e.country !== country);
    res.send(resCoutries);
});

module.exports = router;