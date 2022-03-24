const fs = require('fs');
const path = require('path');
const os = require('os');
const process = require('process');
const sharp = require('sharp');
let imageWriteName;

let b = []


const imagePathName = fs.readdirSync(process.argv[2])
    .map(imageName => {
        return path.resolve(process.argv[2], imageName)
    })
    .forEach((item) => {
        console.log('BBBBBBBBB', item)
        b = item
    })

console.log('MAAAAAP', imagePathName)
if (!fs.existsSync(process.argv[3])) {
    fs.mkdirSync(process.argv[3], imagePathName)
    imageWriteName = process.argv[3]
} else {
    console.log('exist')
    imageWriteName = process.argv[3]
}

console.log(b)

const parsed = path.parse(b.toString())

console.log(parsed)

const target = path.resolve(b.toString(), imageWriteName, `${parsed.name}_${Math.random()}_${parsed.ext}`)


sharp(b.toString())
    .resize(120, 120)
    .toFile(target, (err, info) => {
        console.log(err, info)
    });



// const imagePathName = fs.readdirSync(process.argv[2])
//     .map(imageName => {
//         return path.resolve(process.argv[2], imageName)
//     })
//     .forEach((item, index) => {
//         b = item
//         console.log(b)
//     })

// console.log('AAAAA', imagePathName)
// console.log(b)

// const parsed = path.parse(b)

// console.log(parsed)
// // imagePathName