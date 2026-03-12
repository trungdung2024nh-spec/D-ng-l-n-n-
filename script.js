// hiển thị bình luận khi mở trang
window.onload = function(){

let comments = JSON.parse(localStorage.getItem("comments")) || []

let box = document.getElementById("comments")

comments.forEach(function(c){

let div = document.createElement("div")
div.className="comment"

div.innerHTML = "<b>"+c.name+"</b>: "+c.text

box.appendChild(div)

})

}



function addComment(){

let name = document.getElementById("name").value
let text = document.getElementById("text").value

if(name=="" || text=="") return


let comments = JSON.parse(localStorage.getItem("comments")) || []

comments.push({
name:name,
text:text
})


localStorage.setItem("comments",JSON.stringify(comments))


let box=document.getElementById("comments")

let div=document.createElement("div")
div.className="comment"

div.innerHTML="<b>"+name+"</b>: "+text

box.appendChild(div)


document.getElementById("name").value=""
document.getElementById("text").value=""

}
