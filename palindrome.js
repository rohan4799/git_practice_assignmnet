//You are given a string, whose size is stored in a variable with the nameN

//The string is stored in a variable with the namestr

//PrintYes, if the string is a palindrome, else printNo

//For example, consider the value stored instr = "naman", if we reverse the string, the reversed string will be the same as the original string, hence the string is considered as palindrome, therefore, the output isYes

//Note : A palindrome is a string which is the same read forwards or backwards




bag=0
    for(let i=str.length-1;i>=0;i--){
        bag=bag+i
    }
    if(bag===str){
        console.log("Yes")
    }
    else{
        console.log("No")
    }