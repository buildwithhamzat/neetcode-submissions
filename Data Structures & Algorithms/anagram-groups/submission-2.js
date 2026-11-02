class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let tempStrs = [];
        let storage = {};

        for (let i = 0; i < strs.length; i++) {
            tempStrs.push(strs[i].split("").sort().join("")); 
        }
        for (let j = 0; j < tempStrs.length; j++){
            storage[tempStrs[j]] = storage[tempStrs[j]] || [];
            storage[tempStrs[j]].push(strs[j])
        }

        return Object.values(storage);
    }
}
