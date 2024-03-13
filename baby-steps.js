let result = 0;
const number = 5;
for (i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i])
}

console.log(result)
