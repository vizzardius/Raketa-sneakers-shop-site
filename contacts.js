let Name_input=document.getElementById("Name-input")
let Email_input=document.getElementById("Email-input")
let Message_input=document.getElementById("Message-input")
let button = document.querySelector("button")
let shop_logo = document.getElementsByClassName("shop-logo")
button.addEventListener("click",()=>{
   let input_name = Name_input.value.trim()
   let input_email = Email_input.value.trim()
   let input_message = Message_input.value.trim()
   if (input_name==="" || input_email==="" || input_message===""){
    alert("Fill blanks!")
   }
else{
   alert("Thank you,your message was sent")
   location.reload()
}
})
