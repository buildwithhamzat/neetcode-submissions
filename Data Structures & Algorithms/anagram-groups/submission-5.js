class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {};
        for (let i = 0; i < strs.length; i++){
            let arranged = strs[i].split("").sort().join("");
            if (arranged in obj){
                obj[arranged].push(strs[i])
                continue;
            }
            obj[arranged] = [strs[i]];

        }
        let temp = []
        for (let key in obj){
            // why didnt not notation work here?
            temp.push(obj[key]);
        }
        return temp;
    }


}