const reverse = function(arr) {
	const revArray = [];
	for(let i = 0; i<arr.length; i++) {
		revArray[i]=arr[arr.length-1-i];
	}
	return revArray;
}