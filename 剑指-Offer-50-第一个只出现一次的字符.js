/**
 * @param {string} s
 * @return {character}
 */
 
var firstUniqChar = function(str) {
    var same = " "
    if (str.length == 0){
        return " ";
    }
        

    var map = {};
    //  对象key 不能重复 ，但是数组的key 能够重复
    for (var i = 0; i < str.length; i++) {
        var charX = str[i]
        if (!map[charX]) {
            map[charX] = 1;
        } else {
            map[charX]++;
        }
    }

    for (var i = 0; i < str.length; i++) {
        var charY = str[i];
        if (map[charY ] == 1){
            same =  str[i];
            break;
        }
    }
    return same

};
