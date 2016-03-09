(function($) {
    $.rand = function(arg) {
        if ($.isArray(arg)) {
            return arg[$.rand(arg.length)];
        } else if (typeof arg == "number") {
            return Math.floor(Math.random() * arg);
        } else {
            return 4;  // chosen by fair dice roll
        }
    };
})(jQuery);

var items = [1,2,3,3,5,6,7,8,9];

console.log($.rand(10));
console.log($.rand(items));
console.log($.rand());
