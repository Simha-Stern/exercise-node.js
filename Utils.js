import fs from "fs";

async function printFile(file){
    fs.readFile(file,'utf-8',(err,data) => {
        if (err) {throw err};
        console.log(data);
    });
    let dataString = await data
    return dataString
}

function biggerThenFive(string) {
    let array = stringToArray(string);
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 5){
            newArray.push(array[i])
        };
    }
}

function biggerThenFive2(string) { 
    let bigWords = []
    let array = stringToArray(string)
    array = lodash.uniq(array);
    array.forEach(element => {
        if (element.length >= 5){
            bigWords.push(element)
        }
    })
}

module.exports = printFile;