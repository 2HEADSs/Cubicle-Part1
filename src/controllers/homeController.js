const router = require('express').Router();
const cubeService = require('../services/cubeService');


router.get('/', (req, res) => {
    let { search, from, to } = req.query;


    const cubes = cubeService.getAll(search, from, to);

    res.render('index', { cubes,search, from, to })
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.post('/pesho', (req, res) => {
    console.log(req.body);
    res.send('Successful form submit!')
})

module.exports = router; 