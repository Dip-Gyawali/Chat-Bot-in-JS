let message = document.querySelector(".message");
let chat = document.querySelector(".chat");
let chatbox= document.querySelector('.chatbox');
let userMessage;
let apiKey="Your Api Key";
let apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`;
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

async function getResponse(){
    let responseData ;
    let requestOption= {
        method: "POST",
        headers: {"Content-Type" : "application/json" },
        body: JSON.stringify({
            contents:[{
                role:"user",
                parts: [{text: userMessage}]
            }] 
        })
    }
    try{
        let resposne = await fetch(apiUrl, requestOption);
        if(!resposne.ok){
            console.log("error");
        }
        let data = await resposne.json();
        responseData = data.candidates[0].content.parts[0].text;
    }
    catch(error){
      console.log("error");
    }

    let newli = document.createElement("li");
    let userChat = document.createElement("p");
    userChat.innerHTML = responseData;

    let userIcon = document.createElement("i");
    userIcon.classList.add("fa-solid", "fa-robot");

    newli.appendChild(userIcon);
    newli.appendChild(userChat);
    newli.classList.add("response");
    chatbox.appendChild(newli);
    let utterance = new SpeechSynthesisUtterance(responseData);
    speechSynthesis.speak(utterance);
    responseData='';
}