let myData = {};

function fetchData() {
    let number = Math.floor(Math.random() * 3000 )+1;

    fetch(`https://corsproxy.io/?https://xkcd.com/${number}/info.0.json`)
        .then(res => {
            if(res.ok){
                //gets response
                return res.json();
            }
            else{
                console.log(res);
            }
        }).then(res => {
                myData = res;
                console.log(myData);

                //title
                document.getElementById("title").innerHTML = myData.title;


                //display comic
                document.getElementById("comic").src = myData.img;

                //date 
                document.getElementById("date").innerHTML = `${myData.month}/${myData.day}/${myData.year}`
                
                //alt text
                document.getElementById("comic").alt = myData.alt;
    
    })
    .catch(error=> {console.log(error)})

}

document.getElementById("button").addEventListener("click", e=>{fetchData();});

