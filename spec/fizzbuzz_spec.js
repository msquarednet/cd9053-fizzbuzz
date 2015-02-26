var fizzbuzz = require("../fizzbuzz");

describe("Fizzbuzz", function() {
    it("exists", function() {
        expect(fizzbuzz).toBeDefined();
    });

    describe("Fizzbuzz.generate(3)", function() {
        var result;
        beforeEach(function() {
            result = fizzbuzz.generate(3);
        });
        it("returns [1,2,'fizz']", function() {
            expect(result).toEqual([1,2,"fizz"]);
        });
    });    
    
});