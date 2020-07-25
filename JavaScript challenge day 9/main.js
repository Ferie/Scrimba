function largestNumber1(num) {
    return parseInt('9'.repeat(num));
}

function largestNumber2(num) {
    let str = '';
    for (let i = 1; i <= num; i++) {
        str += '9';
    }
    return parseInt(str);
}

function largestNumber3(num) {
    let str = '';
    let i = 1;
    while (i <= num) {
        str = str.concat('9');
        i++;
    }
    return parseInt(str);
}



/**
* Test Suite 
*/
describe('largestNumber()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const num = 5;

        // act
        const result1 = largestNumber1(num);
        const result2 = largestNumber2(num);
        const result3 = largestNumber3(num);

        // log
        console.log("result1: ", result1);
        console.log("result2: ", result2);
        console.log("result3: ", result3);

        // assert
        expect(result1).toBe(99999);
        expect(result2).toBe(99999);
        expect(result3).toBe(99999);
    });
});