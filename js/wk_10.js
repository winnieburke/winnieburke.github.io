let my_var = 100;
var my_other_var = "hello world";

const this_is_constsant = "constant";
// dont need to specify type in js


console.log("hello World");
my_other_var+="!";
// alert(my_other_var);
// alert("this is an alert");


// how to interact with the DOM (Document Object Model) how website is displaying html and js 
console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked the h1");
    document.getElementById("paragraph").innerHTML="Happy Halloween!";
    document.getElementById("paragraph").style.color="orange";
    document.getElementById("image").src= "images/unicorns/unicorn (2).png";

})