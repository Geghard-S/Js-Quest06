/*
**
** QWASAR.IO -- my_string_index
**
**
** @param {String} param_1
** @param {Character} param_2
** @return {integer}
**
*/


function my_string_index(haystack, needle) {
    index = 0;

    while(index < haystack.length){
        if(needle==haystack[index]){
            return index;
        }
        index ++;
    }
    return -1;

};