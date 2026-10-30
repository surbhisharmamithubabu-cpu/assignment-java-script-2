// function reverseString(str){
//     let reversed="";
//        for(let i=str.length-1;i>=0;i--){
//         reversed+=str[i]
//     }
// return result;
// }
// console.log(reverseString("hello"))
// exaplanation; at first we take a function of reverse string,
// now takebrecult blank then use for loop,now increases result bt string
//output is 0lleh

//wap to check whether the function is polindrome
function isPalindrome(str){
let reverse="";
for(let i=str.length-1;i>=0;i--){
    reverse=reverse+str[i]
}
if(str===reverse){
    return true;
}
else{
    return false
}
}
console.log(isPalindrome("madam"));
//explanation:- at first we take a function which is palindrome,now we twken a loop,then we take true or false cindition with conditional statement

// 3,count vowel and consonent in string

// function countVowelsConsonants(str){
//     let vowel=0
//     let consonent=0
//     for(let i=0;i<str.length;i++){
//         let ch=str[i].toLowerCase();
//         if(ch>="a"&&ch<="z"){
//         if("aeiou".includes(ch)){
//             vowel++;

//         }else{
//             consonent++;
//         }

//     }
// }
// console.log("Vowels:",vowel);
// console.log("Consonants:",consonent)
// }
// countVowelsConsonants("surbhi")
// explain-at first we take vowel and consonant 0,now apply for lop for check charecter,by lowew case we turn capital lattr to small,
// now check charector wit increament and count it

//4 find second largest distinct number
//  


//5.remove duplicate elements
// function removeDuplicates(arr){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         if(result.includes(arr[i])==false){
//             result.push(arr[i]);
//         }
// }
// return result;
// }
// console.log(removeDuplicates[1,2,2,3,1])

// explanation; at first we take a function,now creat an empty array,by loop we can check every no one by one,to check whether tn no is already presents


// sun of even no in array
 
// function evenSum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         sum=sum+arr[i];
//      } 
//     }
//      return sum;
// }
// console.log(evenSum[1,2,3,4,5,6])
//exaplanation;
// take a function,let dum=0,now apply for loop,
// appy condition for finding even no,increases sum ,now apply console for final uotput

//7. find the frequency of an elements
// function frequency(arr,num){
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] == num)(
//             count++
//         )
//     }
//     return count;
// }
// console.log(frequency([1,2,2,3,2,4],2));

//exaplanation;first of all we take a function of array and num,
// initially take count=o
//now apply for lop for repetation
//increases count by 1;
// return to count// finaly we find output


//8 ques.check anagrams
// function anagrams(str1,str2){
//     let a=str1.split("").sort().join("");
//     let b=str2.split("").sort().join("");
//     if(a==b){
//         return true;

//     } else{
//         return false;
//     }
// }
// console.log(anagrams("listen","silence"));
// exaplanation; at first we take a function of two strings
//now both string will be split.sort and join'
// if bothstring are same then true else false


//9.move all zero to ends
// function moveZeros(arr){
//     let result=[];
//     for(let i=0;i<=arr.length-1;i++){
//         if(arr[i]!==0){
//             result.push(arr[i]);
//         }
    
//     while(result.length<arr.length)
//         result.push(0)}

//         return result;
// }
// console.log(moveZeros([0,1,0,3,13]))
// exaplanations;. at first we take a function
// now take loop 
//now take return results