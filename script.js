function addComment(){

let name=document.getElementById("name").value
let text=document.getElementById("text").value

if(name=="" || text=="") return

let box=document.getElementById("comments")

let div=document.createElement("div")
div.className="comment"

div.innerHTML="<b>"+name+"</b>: "+text

box.appendChild(div)

document.getElementById("name").value=""
document.getElementById("text").value=""
}
