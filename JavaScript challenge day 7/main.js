function factorialNumber(num) {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}



/**
* Test Suite 
*/
describe('factorialNumber()', () => {
    it('returns factorial of number param', () => {
        // arrange
        const num = 5;
        
        // act
        const result = factorialNumber(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(120);
    });
});