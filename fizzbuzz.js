//console.log("fb!!!!");

var title = "title of fizzbuzz";
function sayHi(){console.log('Hi')};






//module.exports.title = title;
//module.exports.foo = sayHi;

module.exports = {
    sayHi: sayHi,
    generate: function(count) {
        //return [1,2,'fizz'];
        var arr = [];
        for (var i=1; i<=count; i++) {
            if (i%3==0 && i%5==0) {
                arr.push("fizzbuzz");
            } else if (i%3==0) {
                arr.push("fizz");
            } else if (i%5==0) {
                arr.push("buzz");
            } else {arr.push(i)}
        }
        return arr;
    }
}