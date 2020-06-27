function sumAllPrimes(num) {
    const isPrime = n => ![...Array(n).keys()].slice(2).map(i => !(n%i)).includes(true) && ![0,1].includes(n);
    let sum = 2;
    for (let i = 3; i <= num; i + 2) {
        console.log('i', i);
        console.log('sum', sum);
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}



/**
* Test Suite 
*/
describe('sumAllPrimes()', () => {
    it('adds all prime numbers up to input number', () => {
        // arrange
        const num = 10;
        
        // act
        const result = sumAllPrimes(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(17);
    })
});