// 1 - misol

// let person = {
// 	name: "Javokhir",
// 	age: 21,
// 	job: "student",
// 	interest: "coding",
// 	hobby: "gaming",
// 	username: "java",
// };

// function keysAndValues(person) {
// 	console.log(Object.keys(person));
// 	console.log(Object.values(person));

// 	return;
// }

// keysAndValues(person);

// 2 - misol

// const person1 = {
// 	name: "Javokhir",
// 	age: 21,
// };

// const person2 = {
// 	interest: "coding",
// 	hobby: "gaming",
// };

// function addObject(person1, person2) {
// 	let arrList = Object.assign(person1, person2);
// 	return console.log(arrList);
// }
// addObject(person1, person2);

// 3 - misol

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function arrList(arr) {
// 	let lastNum =(arr[arr.length - 1]) + 1;
//   arr.push(lastNum)
// 	return console.log(arr);
// }

// arrList(arr)

// 4 - misol

// let arr = [4,1, 2, 3, 4, 5, 6, 7, 8];

// function arrList(arr) {
// 	let addNumber = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		addNumber += arr[i];
// 	}
// 	if (arr[0] % 2 == 0) {
// 		arr.unshift(addNumber);
// 	} else {
// 		arr.push(addNumber);
// 	}
// 	return console.log(arr);
// }

// arrList(arr);

// 5 - misol

// let arr = [1, 2, 3, 4, 5, 6];

// function changePlace(arr) {
// 	let firstEl = arr[0];
// 	arr[0] = arr[arr.length - 1];
// 	arr[arr.length - 1] = firstEl
//   return console.log(arr);
// }

// changePlace(arr)

// 6 - misol

// let arr = [];
// let i = 0;

// function arrList(arr) {
// 	if (i < 6) {
// 		let word = prompt("so'z kiriting");
// 		arr.push(word);
// 		i++;
// 		arrList(arr);
// 	} else {
// 		return console.log(arr);
// 	}
// }

// arrList(arr, i);

// 7 -misol ishlash kerak

// 2.1 -misol
// let arr = [];
// let i = 0;

// function arrList(arr) {
// 	if (i < 6) {
// let word = String( prompt("so'z kiriting"));
// 		arr.push(word);
// 		i++;
// 		arrList(arr);
// 	} else {
// 		return console.log(arr);
// 	}
// }

// arrList(arr, i);

// 2.2 - misol

// let arr1 = [1, 2, 3, 4, 5, 7];
// let arr2 = [21, 4, 7, 2, 12, 34, 11];

// function arrList(arr1, arr2) {
// 	for (let j = 0; j < arr2.length; j++) {
// 		if (arr1.includes(arr2[j])) {
// 			let temp = arr2[j];
// 			arr2.splice(j, 1);
// 			arr2.unshift(temp);
// 		}
// 	}
// 	for (let j = 0; j < arr1.length; j++) {
// 		if (arr2.includes(arr1[j])) {
// 			let temp = arr1[j];
// 			arr1.splice(j, 1);
// 			arr1.unshift(temp);
// 		}
// 	}
// 	console.log(arr1);
// 	return console.log(arr2);
// }
// arrList(arr1, arr2);

// 2.3 - misol

// let person = {
// 	name: "Javokhir",
// 	age: 21,
// 	job: "student",
// 	study: "JS",
// 	travel: "none",
// };

// function objectList(person) {
// 	console.log(Object.keys(person).length);
// 	return;
// }
// objectList(person);

// 2.4 - misol

// let arr = [];
// let a = prompt("Nechta son kiritmoqchisz?");
// let i = 0;
// let plus = 0;

// function addList(arr, a, i) {
// 	if (i < a) {
// 		let arrEl = Number(prompt("Son kiriting"));
// 		arr.push(arrEl);
// 		plus += arr[i];
// 		i++;
// 		addList(arr, a, i);
// 	} else {
// 		console.log(plus);
// 		return console.log(arr);
// 	}
// }

// addList(arr, a, i);

// 2.5 - misol
// function object() {
// 	let person1 = {
// 		name: "Javokhir",
// 	};
// 	let person2 = {
// 		age: 21,
// 		job: "student",
// 	};

// 	let person3 = Object.assign(person1, person2);
// 	return console.log(person3);
// }

// object();
