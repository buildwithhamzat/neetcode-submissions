class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }
        let obj1 = {}
        let obj2 = {}

        for(let i = 0; i < s.length; i++){
            obj1[s[i]] = (obj1[s[i]] || 0) + 1
        }
        for(let i = 0; i < t.length; i++){
            obj2[t[i]] = (obj2[t[i]] || 0) + 1
        }
        console.log('obj1', obj1);
        console.log('obj2', obj2);

        for (let key in obj1) {
            if (!(key in obj2)){
                return false
            }
            if (obj1[key] !== obj2[key]){
                return false;
            }
        }
        return true;
    }
}
