function add(...params) {
    let sum = 0;
    params.forEach(param => sum += param);
    return sum;
}



/**
* Test Suite 
*/
describe('add()', () => {
    it('adds two numbers', () => {
        // arrange
        const num1 = 1;
        const num2 = 2;
        
        // act
        const result = add(num1, num2);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
    
    it('adds any ammount of numbers', () => {
        // arrange
        const num1 = 1;
        const num2 = 2;
        const num3 = 3
        
        // act
        const result = add(num1, num2, num3);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(6);
    });   
});