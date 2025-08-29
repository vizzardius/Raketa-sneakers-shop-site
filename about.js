const list_button = document.getElementById("list-button")
const describing_list = document.getElementById("describe-list")
list_button.addEventListener("click",()=>{
   if(describing_list.style.display === "none"){
      describing_list.style.display = "block"
   }
   else{
      describing_list.style.display ="none"
   }
})