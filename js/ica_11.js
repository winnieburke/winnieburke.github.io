
let paragraph = " ";

function tellFortune(numChildren, partName, location, jobTitle){
 paragraph = " You will be in " + jobTitle + " in " + location + " , and married to " + partName + " with " + numChildren + " kids ";
 return paragraph;
}
paragraph= tellFortune("4", "niko","hawaii", "engineer" );
document.getElementById("my_para").innerHTML = paragraph;

paragraph= tellFortune("2", "niko","London", "doctor" );
document.getElementById("my_para2").innerHTML = paragraph;

paragraph= tellFortune("0", "niko","Spain", "space pirate" );
document.getElementById("my_para3").innerHTML = paragraph;



function calculateDogAge(puppyAge){
    let dogAge = puppyAge * 7;
    paragraph = "your doggie is " + dogAge + " years old in dog years!";
    return paragraph;

}
paragraph = calculateDogAge(3)
document.getElementById("my_para4").innerHTML = paragraph;

paragraph = calculateDogAge(6)
document.getElementById("my_para5").innerHTML = paragraph;


paragraph = calculateDogAge(10)
document.getElementById("my_para6").innerHTML = paragraph;