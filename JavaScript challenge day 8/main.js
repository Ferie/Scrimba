// array find
function firstDigit1(str) {
    return [...str].find(c => {
        if (c.match(/[0-9]/)) {
            return c;
        }
    });
}

// for...in loop
function firstDigit2(str) {
    for (let charIndex in str) {
        if (str[charIndex].match(/[0-9]/)) {
            return str[charIndex];
        }
    }
}

// for...of loop
function firstDigit3(str) {
    for (let char of str) {
        if (char.match(/[0-9]/)) {
            return char;
        }
    }
}

// for...break loop
function firstDigit4(str) {
    let c = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[0-9]/)) {
            c = str[i];
            break;
        }
    }
    return c;
}




/**
* Test Suite 
*/
describe('firstDigit()', () => {
    it('return the first digit in a string', () => {
        // arrange
        const str = "f1nd th3 f1rst d1g1t in a STRING!!!!1";
        
        // act
        const result1 = firstDigit1(str);
        const result2 = firstDigit2(str);
        const result3 = firstDigit3(str);
        const result4 = firstDigit4(str);

        // log
        console.log("result1: ", result1);
        console.log("result2: ", result2);
        console.log("result3: ", result3);
        console.log("result4: ", result4);
        
        // assert
        expect(result1).toBe('1');
        expect(result2).toBe('1');
        expect(result3).toBe('1');
        expect(result4).toBe('1');
    });
});