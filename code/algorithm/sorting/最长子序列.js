function lengthOfLIS(nums) {
	if(nums.length === 0) return 0;
	const dp = new Array(nums.length).fill(1);
	let max = 1;
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if(nums[i]>nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] +1);
			}
			max = Math.max(max, dp[i]);
		}
		
	}
	return max;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))