function alternatingSums(array) {
    let sumEvenIndexes = sumOddIndexes = 0;
    array.forEach((el, i) => i % 2 === 0 ? sumEvenIndexes += el : sumOddIndexes += el);
    return [sumEvenIndexes, sumOddIndexes];
}



/**
* Test Suite 
*/
describe('alternatingSums()', () => {
    it('returns alternating sums of even and odd', () => {
        // arrange
        const nums = [50, 60, 60, 45, 70];
        
        // act
        const result = alternatingSums(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([180, 105]);
    });
});