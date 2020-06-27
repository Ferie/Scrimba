function firstDuplicate(nums) {
    const firstDupe = nums.find((k, i) => nums.indexOf(k) !==i);
    return firstDupe >= 0 ? firstDupe : -1;
}



/**
* Test Suite 
*/
describe('firstDuplicate()', () => {
    it('returns first duplicated value', () => {
        // arrange
        const nums = [2, 1, 3, 5, 3, 2];
        
        // act
        const result = firstDuplicate(nums);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(3);
    });
    
    it('returns -1 when no duplicated values', () => {
        // arrange
        const nums = [2, 1, 3, 5, 4, 6];
        
        // act
        const result = firstDuplicate(nums);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(-1);
    });
});