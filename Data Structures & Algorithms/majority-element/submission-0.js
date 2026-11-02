class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let storage={}
        for (let i = 0; i < nums.length; i++) {
            storage[nums[i]] = (storage[nums[i]] | 0) + 1;
        }
        for (let key in storage) {
            let temp = 0;
            if(storage[key] > (nums.length/2)){
                return key
            }
        }
    }
}
