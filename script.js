window.onload=function(){
showComments()
}

function addComment(){

let name=document.getElementById("name").value
let text=document.getElementById("text").value

if(name==""||text=="") return

let comments=JSON.parse(localStorage.getItem("comments"))||[]

let time=new Date().toLocaleString()

comments.push({name,text,time})

localStorage.setItem("comments",JSON.stringify(comments))

document.getElementById("name").value=""
document.getElementById("text").value=""

showComments()
}

function showComments(){

let comments=JSON.parse(localStorage.getItem("comments"))||[]

let box=document.getElementById("comments")

box.innerHTML=""

comments.forEach((c,i)=>{

let div=document.createElement("div")

div.className="comment"

div.innerHTML=
`<span class="delete" onclick="deleteComment(${i})">X</span>
<b>${c.name}</b> <span class="time">${c.time}</span>
<p>${c.text}</p>`

box.appendChild(div)

})

}

function deleteComment(i){

let comments=JSON.parse(localStorage.getItem("comments"))||[]

comments.splice(i,1)

localStorage.setItem("comments",JSON.stringify(comments))

showComments()

}
