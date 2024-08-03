let message = document.querySelector(".message");
let chat = document.querySelector(".chat");
let chatbox= document.querySelector('.chatbox');
let userMessage;
chat.onclick=sendMessage;

function sendMessage(){
   userMessage = message.value.trim();
   if (userMessage === "") return;

   let newli = document.createElement("li");
   let userChat = document.createElement("p");
   userChat.innerHTML = userMessage;
  
   let userIcon = document.createElement("i");
   userIcon.classList.add("fa-solid", "fa-user");

   newli.appendChild(userChat);
   newli.appendChild(userIcon);
   newli.classList.add("request");

   chatbox.appendChild(newli);
   message.value="";

   getResponse();
}

function getResponse(){
    let 
}