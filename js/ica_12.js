let ourObject = {
    "name": "winnie",
    "profession": "Student",
    "age": 19,
}

console.log(ourObject);
let myData = {};
function getJoke(){
    fetch('https://catfact.ninja/fact')
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
                console.log(res);
                
            }
    }) .then(res => {
        displayRes(res);
  
    })
    .catch (error => {
        console.log(error);
        alert("ERROR");

    })
}
document.getElementById("generate").addEventListener("click", e=> {getJoke();})


function displayRes(e){
    myData = e;
    document.getElementById("pp").innerHTML = myData.fact;
}

displayRes();
getJoke();