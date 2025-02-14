let btn=document.querySelector(".btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-gb"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 &&hours<12){
        speak("Good Morning sir")
    }
    else if(hours>=12 && hours<16){
        speak("good afternoon sir")

    }else{
        speak("good evening sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})

let SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new SpeechRecognition()
recognition.onresult=(event)=>{
    console.log(event)

        let currentIndex=event.resultIndex
        let text=event.results[currentIndex][0].transcript
        content.innerText=text
        takeCommand(text.toLowerCase())
 }
  function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none";

    if(message.includes("hello ")||message.includes("hey")){
        speak("Hello sir , what i can help you ?")

    }else if(message.includes("hu r u priti")||message.includes("who are you priti")){
        speak("I am the virual assistant and, Created by  Bishnu")
    }else if(message.includes("open youtube","_blank")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }else if(message.includes("open instagram","_blank")){
        speak("opening instagram")
        window.open("https://www.instagram.com")
    }else if(message.includes("open google","_blank")){
        speak("opening google")
        window.open("https://www.google.co.in")    
    }else if(message.includes("open facebook","_blank")){
        speak("opening facebook")
        window.open("https://www.facebook.com/")    
    }else if(message.includes("open whatsApp",)){
        speak("opening whatsapp")
        window.open("whatsapp://") 
        
    }else if(message.includes("open calculator",)){
        speak("opening calculator")
            window.open("calculator://") 
    }else if(message.includes("I love u priti",)|| (message.includes("I love you priti",))){
        speak("Sorry,.. i have boyfriend and loyal for Bishnu ")
       
    }else{
        speak(`This is what i found on internet regrading${message} `)
        window.open(`https://in.search.yahoo.com/search?fr=mcafee&type=E210IN885G0&p=${message}`)
    }
  }

 btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block";
 })

 