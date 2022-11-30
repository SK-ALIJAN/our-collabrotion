// To check the number if it is prime or not , if prime then it will output yes otherwise  no.
let num=13;
let c=0;

let i=0;
while(i<num){
  if(num%i!==0) c++
  i++;
}
(c==2)?(console.log("Yes")):(console.log("No"));


// To check, it is palindrom or not . if pallindrome then it will output yes otherwise  no.

let word="madam";
let str="";
for(let i=word.length;i<0;i++){
str+=word[i]
}
(word==str)?(console.log("Yes")):(console.log("No"));
