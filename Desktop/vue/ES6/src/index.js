//解构赋值
let [a,b,c]=[1,2,3]
console.log(a,b,c)


// 数组模式和赋值模式统一：
// 可以简单的理解为等号左边和等号右边的形式要统一，如果不统一解构将失败。
let[d,[e,f],g]=[1,[2,3],4]
console.log(d,e,f,g)
// 解构赋值是允许你使用默认值的，先看一个最简单的默认是的例子。
let [foo = true] =[];
console.log(foo); 


let [m,n="ariel"]=['哈哈']
console.log(m+n); //控制台显示“哈哈ariel”

// 注意：对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
let {foo2,bar2} = {foo2:'Ariel',bar2:'哈哈'};
console.log(foo2+bar2); //控制台打印出了“Ariel哈哈”

// 如果在解构之前就定义了变量，这时候你再解构会出现问题。下面是错误的代码，编译会报错。
// 要解决报错，使程序正常，我们这时候只要在解构的语句外边加一个圆括号就可以了。
let foo3;
({foo3} ={foo3:'Ariel'});
console.log(foo3); //控制台输出Ariel

const [k,l,o,j,v]='Ariel'
console.log(k,l,o,j,v);

// 扩展运算符和rest运算符
function test(...arg){
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
    console.log(arg[3])
}
test(1,2,3)

let arr1=['www','baidu','com'];
//let arr2=arr1;
let arr2=[...arr1];
console.log(arr2);
arr2.push('Ariel');
console.log(arr2);
console.log(arr1);

// rest运算符
function jspang(first,...arg){
    console.log(arg.length);
}
 
jspang(0,1,2,3,4,5,6,7);


// 字符串模版
let name='技术胖';
let blog = `非常高兴你能看到这篇文章，我是你的老朋友${name}。这节课我们学习字符串模版。`;
document.write(blog);

// 对运算的支持：
let aa=3;
let bb=4;
let result=`${aa+bb}`
console.log(result);

// 字符串查找
// ES6直接用includes就可以判断，不再返回索引值
let name2='技术胖';
let blog2 = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
document.write(blog.includes(name2));


// 判断开头是否存在：
blog2.startsWith(name2);
// 判断结尾是否存在：
blog2.endsWith(name2);


// 复制字符串
// 我们有时候是需要字符串重复的，比如分隔符和特殊符号，这时候复制字符串就派上用场了，语法很简单。
document.write('jspang|'.repeat(3));

// 二进制声明：
let binary = 0B010101;
console.log(binary);

// 八进制声明：
let bbb=0o666;
console.log(bbb);


// 数字判断和转换
// 数字验证Number.isFinite( xx )
// 可以使用Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。


let ab= 11/4;
console.log(Number.isFinite(ab));//true
console.log(Number.isFinite('jspang'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false

// NaN验证

// NaN是特殊的非数字，可以使用Number.isNaN()来进行验证。下边的代码控制台返回了true。
console.log(Number.isNaN(NaN));

// 判断是否为整数Number.isInteger(xx)
let ac=123.1;
console.log(Number.isInteger(ac)); //false


// 整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
let ad='9.18';
console.log(Number.parseInt(ad)); 
console.log(Number.parseFloat(ad));

// 整数取值范围操作
// 整数的操作是有一个取值范围的，它的取值范围就是2的53次方。我们先用程序来看一下这个数字是什么.
let ae = Math.pow(2,53)-1;
console.log(ae); //9007199254740991

// 在我们计算时会经常超出这个值，所以我们要进行判断，ES6提供了一个常数，叫做最大安全整数，以后就不需要我们计算了。

// 最大安全整数
console.log(Number.MAX_SAFE_INTEGER);

// 最小安全整数
console.log(Number.MIN_SAFE_INTEGER);

// 安全整数判断isSafeInteger( )
let af= Math.pow(2,53)-1;
console.log(Number.isSafeInteger(af));//false