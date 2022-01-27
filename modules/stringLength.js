// stringLength(string)

const stringLength = (str) => {
    const string = str.length;

    if (string < 1) {
        return 'string is empty';
    } else if (string > 10) {
        return 'string is too long';
    } else string;
}


module.exports = stringLength;