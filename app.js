function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

{/* <div class="knyga">
<img id="ibook" class="ibook" src="" alt="">
<h4 id="nbook" class="nbook"></h4>
<p id="tbook" class="tbook"></p>
<p id="prbook" class="prbook"></p>
</div> */}



 fetch('https://in3.dev/knygos/')
 .then(response => response.json())
 .then(data => {
    localStorage.setItem("Lentyna1", JSON.stringify(data))
     })
.then( 
fetch('https://in3.dev/knygos/types/')
.then(response => response.json())
.then(data => {
   localStorage.setItem("Lentyna2", JSON.stringify(data))
    }))
.then(x => {
    const data1 = JSON.parse(localStorage.getItem("Lentyna1"))
    const data2 = JSON.parse(localStorage.getItem("Lentyna2"))
    
    const cont = document.querySelector(".container")
    let conText = ""
    
    console.log(data1);
    console.log(data2);


    
    
    data1.forEach((a)=> {
    
    const typas = data2[a.type-1].title    
    conText = conText + `<div id="book${a.id}" class="knyga">
    <img class="emptystar" id="es${a.id}" src="./img/emptystar.png" alt="not favorited">
    <img class="star noshow" id="s${a.id}" src="./img/star.png" alt="favorite">
    <img id="ibook${a.id}" class="ibook" src=${a.img} alt="knyga">
    <h4 id="nbook${a.id}" class="nbook">${a.title}</h4>
     <p id="abook${a.id}" class="abook">Autorius: ${a.author}</p>
     <p id="prbook${a.id}" class="prbook">${a.price}</p>
     <p id="tbook${a.id}" class="tbook">${typas}</p>
    </div>`     
     });
     cont.innerHTML = conText;



     const bookArr = document.querySelectorAll(".knyga")
     //Below checks if there is favorite books and assign status favorite to them.
    let memoryArr = JSON.parse(localStorage.getItem("Lentynafavorite"))
    
    
     if(memoryArr === null){
        memoryArr = [];
        localStorage.setItem("Lentynafavorite", JSON.stringify(memoryArr))
     }

    memoryArr.forEach(y => {
        const id = y;
        document.querySelector(`#${id}`).classList.add("favoritebook")   
        document.querySelector(`#es${id.substr(4)}`).classList.toggle("noshow")
        document.querySelector(`#s${id.substr(4)}`).classList.toggle("noshow")

     })
    
   
    //below generates click event
    bookArr.forEach( b => {
        b.addEventListener("click", () => {
        const id = b.id  
        console.log(id, `es${id.substr(4)}`); 
        document.querySelector(`#${id}`).classList.add("favoritebook") //not checked also 
        document.querySelector(`#es${id.substr(4)}`).classList.toggle("noshow")
        document.querySelector(`#s${id.substr(4)}`).classList.toggle("noshow")
        //block below checks if book favorited, and adds or removes it from memoryArr
        memoryArr = JSON.parse(localStorage.getItem("Lentynafavorite"))
        if (document.querySelector(`#es${id.substr(4)}`).classList.contains("noshow")) {
            memoryArr.push(id);
            console.log(id, "we are here", memoryArr);
            localStorage.setItem("Lentynafavorite", JSON.stringify(memoryArr)) 
        } else{
            const tempArr = [];
            memoryArr.forEach(z => {
            if (z !== id) {
            tempArr.push(z)      
         }
            })
            console.log("tempArr", tempArr);
            localStorage.setItem("Lentynafavorite", JSON.stringify(tempArr))  
        }
        //


        })
    })

    }
)   

 


 

// memoryArr = JSON.parse(localStorage.getItem("Lentynafavorite"))
//         memoryArr.push(id);
//         localStorage.setItem("Lentynafavorite", JSON.stringify(memoryArr))

