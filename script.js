// arraytolist = () => {
// 	Arr = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
// 	ArrLen = Arr.length;
// 	console.log(Arr);
// 	var tList = '';
// 	for (i = 0; i < ArrLen; i++) {
// 		tList += Arr[i];
// 		if (ArrLen !== i + 1) tList += ',';
// 	}
// 	console.log(JSON.stringify({ tList }));
// };
//reversing a string
reverseString = str => {
	// var reversedString = str.split('').reverse().join('');
	// console.log(reversedString);
	// let reversedString='';
	// for(let i=str.length-1;i>=0;i--){
	// 	reversedString=reversedString+str[i];
	// }
	// console.log(reversedString);
	let reversedString = '';
	str.split('').forEach(element => {
		reversedString = element + reversedString;
	});
	console.log(reversedString);
	return reversedString;
};

//palindrome
isPalindrome = str => {
	revString = str
		.split('')
		.reverse()
		.join('');
	console.log(revString === str);
	return revString === str;
};
textLength = () => {
	let str = 'Hi i am sheeeeeela from India';
	console.log(str);
	console.log('With space', str.split('').length);
	console.log('With space 2', str.length);
	console.log('With out space ', str.split(' ').join('').length);
	console.log('Word Count ', str.split(' ').length);
	let charCount = characterCount(str);
	console.log(charCount);
};

characterCount = str => {
	const charMap = {};
	let maxNum = 0;
	let maxChar = '';
	inputString = str
		.toLowerCase()
		.split(' ')
		.join('')
		.split('')
		.sort();
	inputString.forEach(function(char) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});
	console.log('charMap', charMap);

	for (let char in charMap) {
		if (charMap[char] > maxNum) {
			maxNum = charMap[char];
			maxChar = char;
		}
	}
	console.log(maxChar, ':', maxNum);
	return maxNum;
};

//looping a triangle
// loopingatriangle = () => {

// 	var result = '#';
// 	while (result.length <= 7) {
// 		console.log(result);
// 		result = result + '#';
// 	}
// for (i = 1; i <= 7; i++) {
// 	var str = '';
// 	for (j = 1; j <= i; j++) {
// 		str += '#';
// 		document.write('#');
// 	}
// 	document.write('<br>');
// 	console.log(str);
// }
// };

//comparing two arrays
comparingArrays = () => {
	let a1 = ['1', '2', '3'];
	let a2 = ['1', '2', '3', '4'];
	//using join method
	console.log(a1.join('') === a2.join(''));
	//using toString method
	console.log(a1.toString() === a2.toString());
};

//maxCharacters
maxCharacters = () => {
	let str = 'javaaaaaascript';
	let charMap = {};
	let maxNum = 0;
	maxChar = '';
	str.split('').forEach(char => {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});
	for (let char in charMap) {
		if (charMap[char] > maxNum) {
			maxNum = charMap[char];
			maxChar = char;
		}
	}
	console.log(maxChar, ':', maxNum);
};

//fizzBuzz
fizzBuzz = () => {
	for (let i = 0; i <= 100; i++) {
		if (i % 15 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
};
