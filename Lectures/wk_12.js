let ourObject = {
    "name": "winnie",
    "profession": "Student",
    "age": 19,
}

console.log(ourObject);
let myData = {};
function fetchData(){
fetch('https://catfact.ninja/fact')
    .then(res => {
        if(res.ok){
            return res.json();
        }
        else{
            console.log(res);
        }
    

})  .then(res => {
    myData = res;
    console.log(myData);
    document.getElementById("fact").innerHTMl = myData.fact;
})
.catch (error => {console.log(error)})
}

fetchData();

document.getElementById("generate").addEventListener("click", e=> {fetchData();})

console.log(myData);