const diamond = function(height) {
	if(height % 2 == 0) {
		height = height + 1;
	}
	let n=0;
	for (let i = 1; i <= height; i++) {
		let s=''; 
		if(i < (height+1)/2) {
			n=i;
		}
		else {
			n=height+1-i;
		}
		for (let j = 1; j <= (height+1)/2-n; j++) {
			s+=" ";
		}
		for (let k = 1; k < n; k++) {
			s+="*";
		}
		for (let m = 0;  m < n; m++) {
			s+="*";
		}
		console.log(s);
	}
}