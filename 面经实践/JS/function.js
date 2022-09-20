function Hello() {}

console.log(Hello.constructor); // Function
console.log(Hello.prototype.constructor); // Hello
console.log(Function.constructor); // Function
console.log(Function.prototype.constructor); // Function
console.log(Function.prototype); // () 函数对象

// 与Object
console.log(Function.prototype.__proto__ === Object.prototype);

console.log(Function.__proto__.__proto__ === Object.prototype);
