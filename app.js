function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}





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
    // This generates dropdown menu
    let categoryText = document.querySelector("#category").innerHTML
    data2.forEach(s => {
        categoryText = categoryText + `<option value="${s.title}">${s.title}</option>`
    })
    document.querySelector("#category").innerHTML = categoryText;
    //

    //This generates books
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
     //


     const bookArr = document.querySelectorAll(".knyga")
    //This filters only the chosen books
    const bb = document.querySelector("button")
    bb.addEventListener("click", () => {
    const selector = document.querySelector("#category")    
        if((selector.value !== "All")&&(selector.value !== "Fav")){
            bookArr.forEach(f => {
                const id = f.id.substring(4)
              const checker = document.querySelector(`#tbook${id}`).innerHTML
              if(checker === selector.value){
                    f.classList.remove("noshow")
              }  else{
                    f.classList.add("noshow") 
              }
            })
        } else {
        if (selector.value === "All") {
            bookArr.forEach(f => {
                f.classList.remove("noshow")
            })
        }
        if(selector.value === "Fav"){
            bookArr.forEach(f => {
                if (f.classList.contains("favoritebook")) {
                  f.classList.remove("noshow")  
                } else{
                    f.classList.add("noshow")    
                }
            })  
        }
    } 
    })

    //

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

 


 



