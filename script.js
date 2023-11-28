// selecttin popup-box, popup-overlay, button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup")

addpopupbutton.addEventListener("click",function()
{
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button

var cancelbutton=document.getElementById("cancel-book")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select book-container,add-book,book-title-input,book-title-author,book-description-input

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
      event.preventDefault()
      var div=document.createElement("div")
      div.setAttribute("class","book-container")
      div.innerHTML=`<h2>${booktitle.value}</h2>  
      <h4>${bookauthor.value}</h4>
      <p>${bookdescription.value}</p>
      <button onclick="deletebtn(event)">Delete</button>`
      container.append(div)
      popupoverlay.style.display="none"
      popupbox.style.display="none"

})
function deletebtn(event){
    event.target.parentElement.remove()
}