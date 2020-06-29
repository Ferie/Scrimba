function caseInsensitivePalindrome(str) {
    // ES6 Solution
    /* str = str.toLowerCase();
    let palindrome = [...str].reverse().join("");
    return str === palindrome; */
    // More efficient solution: it loops obly half of the string
    str = str.toLowerCase();
    let length = str.length;
    for (let i = 0; i < length/2; i++) {
        if (str[i] === str[length - 1 - i]) {
            return true;
        }
    }
    return false;
}



/**
* Test Suite 
*/
describe('caseInsensitivePalindrome()', () => {
    it('returns true for a case insensitive palindrome', () => {
        // arrange
        const str = 'Anna';
        
        // act
        const result = caseInsensitivePalindrome(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });
    
    it('returns false when not a case insensitive palindrome', () => {
        // arrange
        const str = 'abac';
        
        // act
        const result = caseInsensitivePalindrome(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });    
});