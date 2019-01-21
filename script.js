arraytolist = () => {
	Arr = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
	ArrLen = Arr.length;
	console.log(Arr);
	var tList = '';
	for (i = 0; i < ArrLen; i++) {
		tList += Arr[i];
		if (ArrLen != i + 1) tList += ',';
	}
	console.log(JSON.stringify({ tList }));
};
//reversing a string
reverseString = () => {
	console.log('fjdhfjdhfjk');
	var str = document.getElementById('string').value;
	console.log(str);
	var splitString = str.split('');
	console.log(splitString);
	var reverseArray = splitString.reverse();
	console.log(reverseArray);
	var joinArray = reverseArray.join('');
	console.log(joinArray);
	return joinArray; 
};

//looping a triangle
loopingatriangle = () => {
	for (i = 1; i <= 7; i++) {
		var str = '';
		for (j = 1; j <= i; j++) {
			str += '#';
			document.write('#');
		}
		document.write('<br>');
		console.log(str);
	}
};
//comparing two arrays
comparingArrays = () => {
	let a1 = ['1', '2', '3'];
	let a2 = ['1', '2', '3', '4'];
	//using join method
	console.log(a1.join('') === a2.join(''));
	//using toString method
	console.log(a1.toString() === a2.toString());
};
