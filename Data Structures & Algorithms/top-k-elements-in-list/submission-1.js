class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        for (let i = 0; i < nums.length; i++) {
            obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
        }
        // let shelf = new Array(nums.length).fill([]);
        let shelf = Array.from({ length: nums.length + 1 }, () => [])
        for (let key in obj){
            shelf[obj[key]].push(Number(key));
        }
    
        let temparr = [];

        for (let i = nums.length; temparr.length < k; i--){
            shelf[i].map((a)=> temparr.push(a))
        }
        return temparr
    }
}
