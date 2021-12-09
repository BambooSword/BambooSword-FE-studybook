function quickPow(a, n) {
	let base = a, res = 1;

	while(n) {
		if(n&1) {
			res *=base;
		}
		base*=base;
		n >>= 1;
	}
	return res;
}
console.log(quickPow(2,10))