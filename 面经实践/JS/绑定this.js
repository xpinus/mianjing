let obj = {
	value: "obj",
};

let value = "window";

function fn() {
	console.log(this.value, arguments);
}

fn();

// call
Function.prototype.myCall = function (obj, ...args) {
	// 设置临时的函数
	obj.tempFunc = this;
	// 执行在obj下
	let res = obj.tempFunc(...args);
	// 删除临时函数
	delete obj.tempFunc;

	return res;
};
// fn.call(obj, 1, 2);
// fn.myCall(obj, 1, 2);

// aplly
Function.prototype.myApply = function (obj, args) {
	// 设置临时的函数
	obj.tempFunc = this;
	// 执行在obj下
	let res = obj.tempFunc(...args);
	// 删除临时函数
	delete obj.tempFunc;

	return res;
};
// fn.apply(obj, [1, 2]);
// fn.myApply(obj, [1, 2]);

// bind
Function.prototype.myBind = function (obj, ...args1) {
	let fn = this;

	return function (...args2) {
		return fn.call(obj, ...args1, ...args2);
	};
};
// let bfn = fn.bind(obj, 1);
// bfn(2);

// let bfn = fn.myBind(obj, 1);
// bfn(2);

debugger;
