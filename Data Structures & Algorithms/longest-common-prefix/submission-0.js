class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    // longestCommonPrefix(strs) {
    //     let tempString = ''
    //     for (let i = 0; i < strs.length; i++){
    //         for (let j = 0; j < strs[0].length; j++) {
    //             if (strs[0][j] !== strs[i][j]){
    //                 return tempString;
    //             }
    //             tempString += strs[0][j]
    //         }
    //     }
    //     return tempString;
    // }

    longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let prefix = "";

    // loop through each letter of the first string
    for (let j = 0; j < strs[0].length; j++) {
        let currentChar = strs[0][j];

        // check if this character matches in all strings
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][j] !== currentChar) {
                return prefix;
            }
        }

        // if we survived the inner loop, add this char
        prefix += currentChar;
    }

    return prefix;
}

}
