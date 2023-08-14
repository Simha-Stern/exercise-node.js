import lodash, { join } from "lodash";

function stringToArray(string) {
    return lodash.words(string);
}

function arrayToString(array) {
    let string = array.join(' ');
    return string;
}

function lengthOfString(string) {
    let array = stringToArray(string);
    return array.length;
}

function reversFile(string) {
    let array = stringToArray(string);
    array = lodash.reverse(array);
    let newString = arrayToString(array);
    return newString;
}

function RemovDuplWords(string) {
    let array = stringToArray(string);
    array = lodash.uniq(array);
    let newString = arrayToString(array);
    return newString;
}

function lengthUniqWords(string) {
    let uniq = stringToArray(string);
    array = lodash.uniq(array);
    return array.length;
}

function UniqWordsToUpper(string) {
    let txtToUpper =  RemovDuplWords(string);
    return lodash.toUpper(txtToUpper)
}

