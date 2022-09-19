const fs = require('fs/promises');
const cubes = require('../db.json');

//cubes[cubeId] - array[0] - array[index] - is not an object
exports.getOne = (cubeId) => cubes[cubeId]


exports.save = (cube) => {
    cubes.push(cube);
    let textData = JSON.stringify(cubes, '', 4)
    return fs.writeFile('./src/db.json', textData, { encoding: 'utf-8' })

}