var twoSum = function(nums, target) {
    for (let i = 0; i <nums.length; i++){

        const complement = target - nums[i]
        
        if (complement in nums){
            return nums[complement, i]
        }
        }
};
