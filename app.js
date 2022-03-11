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
   console.log("ping");
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
    conText = conText + `<div class="knyga">
    <img id="ibook${a.id}" class="ibook" src=${a.img} alt="knyga">
    <h4 id="nbook${a.id}" class="nbook">${a.title}</h4>
     <p id="abook${a.id}" class="abook">Autorius: ${a.author}</p>
     <p id="prbook${a.id}" class="prbook">${a.price}</p>
     <p id="tbook${a.id}" class="tbook">${typas}</p>
    </div>`     
     });
    
    cont.innerHTML = conText;
    }
)   

 



// function extractor1(){
//     const a = 
//     if (Array.isArray(a)){
//         localStorage.removeItem("Lentyna1");
//         return a
//     } 
// setTimeout(extractor1, 300)
// }    

// function extractor2(){
//     const a = JSON.parse(localStorage.getItem("Lentyna2"))
//     if (Array.isArray(a)){
//         localStorage.removeItem("Lentyna2");
//         return a
//     } 
// setTimeout(extractor1, 300)
// }   



