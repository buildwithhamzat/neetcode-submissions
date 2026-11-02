class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(nums, target) {
    //     let pointer1 = 0;
    //     let pointer2 = 1;

    //     for (let i = 0; i < nums.length; i++) {
    //         let pointerSum = nums[pointer1] + nums[pointer2];
    //         if (pointerSum === target && pointer1 != pointer2){
    //             return [pointer1, pointer2]
    //         }
    //         if (pointerSum < target) {
    //             pointer2 += 1;  
    //             let leftSum = nums[pointer1 + 1] + nums [pointer2]    
    //             if (leftSum === target){
    //                 return [pointer1 + 1, pointer2]
    //             }          
    //         } else {
    //            pointer2 += 1;
    //         }
    //     }
    // }

    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++){
            for (let j = 1; j < nums.length; j++) {
                let sum = nums[i] + nums[j];
                if (sum === target && i !== j){
                    return [i, j];
                }
            }
        }
    }
}
