function addTwoDigits(num)  {
    const split = [...num + ''].map(n => +n);
    let sum = 0;
    split.forEach(i => sum += i);
    return sum
}



/**
* Test Suite 
*/
describe('addBorder()', () => {
    it('take a two digit number and return the sum of their numbers', () => {
       // arrange
        const num = 29;
        
        // act
        const result = addTwoDigits(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(11);
    });
});