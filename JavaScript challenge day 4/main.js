function arrayReplace(array, elemToReplace, substitutionElem) {
    array.forEach((el, i) => el === elemToReplace ? array[i] = substitutionElem : el);
    return array;
}



/**
* Test Suite 
*/
describe('arrayReplace()', () => {
    it('replace elements in an array', () => {
        // arrange
        const array = [1, 2, 1];
        const elemToReplace = 1;
        const substitutionElem = 3;
        
        // act
        const result = arrayReplace(array, elemToReplace, substitutionElem);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([3, 2, 3]);
    });
});