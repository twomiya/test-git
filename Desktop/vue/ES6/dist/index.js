'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//解构赋值
var a = 1,
    b = 2,
    c = 3;

console.log(a, b, c);

// 数组模式和赋值模式统一：
// 可以简单的理解为等号左边和等号右边的形式要统一，如果不统一解构将失败。
var d = 1,
    e = 2,
    f = 3,
    g = 4;

console.log(d, e, f, g);
// 解构赋值是允许你使用默认值的，先看一个最简单的默认是的例子。
var _ref = [],
    _ref$ = _ref[0],
    foo = _ref$ === undefined ? true : _ref$;

console.log(foo);

var _ref2 = ['哈哈'],
    m = _ref2[0],
    _ref2$ = _ref2[1],
    n = _ref2$ === undefined ? "ariel" : _ref2$;

console.log(m + n); //控制台显示“哈哈ariel”

// 注意：对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
var _foo2$bar = { foo2: 'Ariel', bar2: '哈哈' },
    foo2 = _foo2$bar.foo2,
    bar2 = _foo2$bar.bar2;

console.log(foo2 + bar2); //控制台打印出了“Ariel哈哈”

// 如果在解构之前就定义了变量，这时候你再解构会出现问题。下面是错误的代码，编译会报错。
// 要解决报错，使程序正常，我们这时候只要在解构的语句外边加一个圆括号就可以了。
var foo3 = void 0;
var _foo = { foo3: 'Ariel' };
foo3 = _foo.foo3;

console.log(foo3); //控制台输出Ariel

var _Ariel = 'Ariel',
    _Ariel2 = _slicedToArray(_Ariel, 5),
    k = _Ariel2[0],
    l = _Ariel2[1],
    o = _Ariel2[2],
    j = _Ariel2[3],
    v = _Ariel2[4];

console.log(k, l, o, j, v);

// 扩展运算符和rest运算符
function test() {
    console.log(arguments.length <= 0 ? undefined : arguments[0]);
    console.log(arguments.length <= 1 ? undefined : arguments[1]);
    console.log(arguments.length <= 2 ? undefined : arguments[2]);
    console.log(arguments.length <= 3 ? undefined : arguments[3]);
}
test(1, 2, 3);

var arr1 = ['www', 'baidu', 'com'];
//let arr2=arr1;
var arr2 = [].concat(arr1);
console.log(arr2);
arr2.push('Ariel');
console.log(arr2);
console.log(arr1);

// rest运算符
function jspang(first) {
    console.log(arguments.length <= 1 ? 0 : arguments.length - 1);
}

jspang(0, 1, 2, 3, 4, 5, 6, 7);

// 字符串模版
var name = '技术胖';
var blog = '\u975E\u5E38\u9AD8\u5174\u4F60\u80FD\u770B\u5230\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u6211\u662F\u4F60\u7684\u8001\u670B\u53CB' + name + '\u3002\u8FD9\u8282\u8BFE\u6211\u4EEC\u5B66\u4E60\u5B57\u7B26\u4E32\u6A21\u7248\u3002';
document.write(blog);

// 对运算的支持：
var aa = 3;
var bb = 4;
var result = '' + (aa + bb);
console.log(result);

// 字符串查找
// ES6直接用includes就可以判断，不再返回索引值
var name2 = '技术胖';
var blog2 = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
document.write(blog.includes(name2));

// 判断开头是否存在：
blog2.startsWith(name2);
// 判断结尾是否存在：
blog2.endsWith(name2);

// 复制字符串
// 我们有时候是需要字符串重复的，比如分隔符和特殊符号，这时候复制字符串就派上用场了，语法很简单。
document.write('jspang|'.repeat(3));

// 二进制声明：
var binary = 21;
console.log(binary);

// 八进制声明：
var bbb = 438;
console.log(bbb);

// 数字判断和转换
// 数字验证Number.isFinite( xx )
// 可以使用Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。


var ab = 11 / 4;
console.log(Number.isFinite(ab)); //true
console.log(Number.isFinite('jspang')); //false
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(undefined)); //false

// NaN验证

// NaN是特殊的非数字，可以使用Number.isNaN()来进行验证。下边的代码控制台返回了true。
console.log(Number.isNaN(NaN));

// 判断是否为整数Number.isInteger(xx)
var ac = 123.1;
console.log(Number.isInteger(ac)); //false


// 整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
var ad = '9.18';
console.log(Number.parseInt(ad));
console.log(Number.parseFloat(ad));

// 整数取值范围操作
// 整数的操作是有一个取值范围的，它的取值范围就是2的53次方。我们先用程序来看一下这个数字是什么.
var ae = Math.pow(2, 53) - 1;
console.log(ae); //9007199254740991

// 在我们计算时会经常超出这个值，所以我们要进行判断，ES6提供了一个常数，叫做最大安全整数，以后就不需要我们计算了。

// 最大安全整数
console.log(Number.MAX_SAFE_INTEGER);

// 最小安全整数
console.log(Number.MIN_SAFE_INTEGER);

// 安全整数判断isSafeInteger( )
var af = Math.pow(2, 53) - 1;
console.log(Number.isSafeInteger(af)); //false
