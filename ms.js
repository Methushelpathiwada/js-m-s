//  You are given a string (STR) of length N, consisting of only the lower case English alphabet.
//  Your task is to remove all the duplicate occurrences of characters in the string.

// var str = "abcadeefcb";
 
// for (var i = 0; i < str.length; i++) {
//     var repeat = 0;
//     for (j = 0; j < str.length; j++) {
//         if (str.charAt(i) == str.charAt(j) && i != j) {
//             repeat = 1;
//             break;
//         }
//     }
//     if (repeat == 0)
//         document.write(str.charAt(i));
// }

// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb


// let str = "abcadeecfb";
//     const strTrim = str.replace('') 
//     const strArr=strTrim.split('')

//     let myMap = new Map();  

//     strArr.map(m=>{
//     let count =0
//     if(!myMap.get(m)){
//     myMap.set(m,++count)
//     }else {
//     let cnt=myMap.get(m)
//     myMap.set(m,++cnt)
//     }
//     console.log(myMap)
//     })
