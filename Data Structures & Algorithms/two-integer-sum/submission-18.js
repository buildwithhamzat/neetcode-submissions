class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {};
        for (let i = 0; i < nums.length; i++){
            let complement = 0;
            complement = target - nums[i]
            if (complement in obj){
                return [obj[complement], i]
            }
            obj[nums[i]] = i  
        }
    }
}
