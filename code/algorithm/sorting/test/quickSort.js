function quickSort(arr, left = 0, right = arr.length) {
	console.log(right, '<== right')
	if(!arr.length || arr.length === 1) return arr;

	if(left < right) {
		let pIndex = partition(arr, left, right);
		quickSort(arr, left, pIndex -1);
		quickSort(arr, pIndex+1, right);
	}
	return arr;
}

function partition(arr, left, right) {
	let pivot = left;
	let index = pivot + 1;
	for (let i = index; i <= right; i++) {
		if(arr[i] <arr[pivot]) {
			swapArr(arr, index, i);
			index++;
		}
	}
	swapArr(arr, pivot, index -1);
	return index-1;
}

function swapArr(arr, a, b) {
	const temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}
let arr = [3, 4, 6, 7, 8];
const res = quickSort(arr)
console.log(res);