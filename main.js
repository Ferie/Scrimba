function addBorder(array) {
    let border = '*'.repeat(array.length + 2);
    for (let i = 0; i < array.length; i++) {
        array[i] = '*' + array[i] + '*';
        if (border.length < array[i].length) {
            border = '*'.repeat(array[i].length);
        }
    }
    array.unshift(border);
    array.push(border);
    return array;
}



/**
* Test Suite 
*/
describe('addBorder()', () => {
    it('adds a border around entire application', () => {
        // arrange
        const strings = ['abc', 'ded'];
        
        // act
        const result = addBorder(strings);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(
                ["*****",
                "*abc*",
                "*ded*",
                "*****"]
        );
    })
});
