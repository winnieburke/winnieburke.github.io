// console.log(document.querySelector('button'));
// console.log(document.querySelectorAll('button'));
// console.log(document.querySelector('button')[1]);
// console.log(document.getElementsByClassName('button'));
// console.log(document.getElementsByClassName('button')[2]);
// console.log(document.querySelectorAll("#myId. my_class"));
hello("Winnie");

function hello(name){
    return ("hello" + name);
}

function even(n){
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log.apply(even(20));
console.log.apply(even(1));
console.log.apply(even(5));


let text = ["one", "two", "three"];
let paragraph = " ";
function buildText(arr){
    for(let i=0; i<arr.length;i++){
        console.log(arr[i]);
        paragraph += arr[i] + " ";
    }
    document.getElementById("my_para").innerHTML = paragraph



}

buildText(text);