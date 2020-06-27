function allLongestStrings(array) {
    let longeststr = array[0].length;
    let longeststrArray = [];
    array.forEach(el => {
        if (el.length > longeststr) {
            // Reset array if new longer element is found
            longeststr = el.length;
            longeststrArray = [el];
        } else if (el.length === longeststr) {
            // Add current element if length is the same as the longest untill that moment
            longeststrArray.push(el);
        }
    });
    return longeststrArray;
}



/**
* Test Suite 
*/
describe('allLongestStrings()', () => {
    it('returns all longest strings', () => {
        // arrange
        const strings = ["aba", "aa", "asdd", "vcad", "aba", "a", "asdf"];
        
        // act
        const result = allLongestStrings(strings);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["asdd", "vcad", "asdf"]);
    });
});