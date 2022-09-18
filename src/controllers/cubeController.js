const router = require('express').Router();
const fs = require('fs/promises')
const cubes = require('../db.json');

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', (req, res) => {
    const cube = req.body;

    //Validate
    if (cube.name.length < 2) {
        return res.status(400).send('Invalid Request');
    }
    //Save data
    cubes.push(cube);
    // JSON.stringify(cubes, '', 4)) = third parameter (4) for tabulation in json
    fs.writeFile('./src/db.json', JSON.stringify(cubes, '', 4))
        .then(() => {
            //Redirect to page
            res.redirect('/')
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

module.exports = router