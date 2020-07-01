// Standard JavaScript
function encloseInBrackets1(str) {
    return '(' + str + ')';
}

// ES6 solution
function encloseInBrackets2(str) {
    return `(${str})`;
}

// Working on strings
function encloseInBrackets3(str) {
    return '('.concat(str, ')');
}

// Most expensive solution using an array
function encloseInBrackets4(str) {
    const array = str.split('');
    array.unshift('(');
    array.push(')');
    return array.join('');
}


/**
* Test Suite 
*/
describe('encloseInBrackets()', () => {
    it('adds () around a string', () => {
        // arrange
        const str = "enclose string in brackets";
        
        // act
        const result1 = encloseInBrackets1(str);
        const result2 = encloseInBrackets2(str);
        const result3 = encloseInBrackets3(str);
        const result4 = encloseInBrackets4(str);

        // log
        console.log("result1: ", result1);
        console.log("result2: ", result2);
        console.log("result3: ", result3);
        console.log("result4: ", result4);
        
        // assert
        expect(result1).toBe('(enclose string in brackets)');
        expect(result2).toBe('(enclose string in brackets)');
        expect(result3).toBe('(enclose string in brackets)');
        expect(result4).toBe('(enclose string in brackets)');
    });
});
