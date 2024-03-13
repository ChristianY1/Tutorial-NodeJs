const { error } = require('console')
const mymodule = require('./mymodule')

const dirname = process.argv[2]
const ext = process.argv[3]

mymodule(dirname, ext, (err, data) => {
    if (err) console.log(err);
    data.forEach((item) => {
        console.log(item)
    });
})