let olist = document.querySelector(".list"); 
let obox = document.querySelector(".box");

let btn = obox.querySelectorAll("li");

btn.forEach((item,index) =>{
    item.onclick = ()=>{
        console.log(index)
    }
})