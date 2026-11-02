class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
  const record = {}; // storage object

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (record[value]) {
      // if this number already exists in record, it means duplicate found
      return true;
    } else {
      // otherwise, mark it as seen
      record[value] = 1;
    }
  }

  return false; // no duplicates found
}

}
