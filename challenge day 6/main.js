function makeArrayConsecutive(nums) {
    const sortedArray = nums.sort((a, b) => a - b);
    let prevNum = null;
    let count = 0;
    sortedArray.forEach((el) => {
        if (prevNum && !(prevNum === el - 1)) {
            while (!(prevNum === el - 1)) {
                count++;
                prevNum++;
            }
        }
        prevNum = el;
    });
    return count;
}



/**
* Test Suite 
*/
describe('makeArrayConsecutive()', () => {
    it('returns total missing numbers between smallest and largest number', () => {
        // arrange
        const nums = [6, 2, 3, 10];
        
        // act
        const result = makeArrayConsecutive(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(5);
    })
});