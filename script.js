const text=document.getElementById("text");
const input=document.getElementById("nameInput");
const caine=document.getElementById("caine");
const logsButton=document.getElementById("logsButton");

let savedName=localStorage.getItem("caine_user");
let clickCount=0;
let typingTimer=null;

function typeMessage(lines,speed=50,callback=null){

    if(typingTimer){
        clearInterval(typingTimer);
    }

    text.innerHTML="";

    let lineIndex=0;

    function typeLine(){

        if(lineIndex>=lines.length){

            if(callback){
                callback();
            }

            return;
        }

        let charIndex=0;
        let currentLine=lines[lineIndex];
        let lineElement=document.createElement("div");

        text.appendChild(lineElement);

        typingTimer=setInterval(()=>{

            if(charIndex<currentLine.length){

                lineElement.textContent+=currentLine[charIndex];
                charIndex++;

            }
            else{

                clearInterval(typingTimer);

                lineIndex++;

                setTimeout(typeLine,700);

            }

        },speed);

    }

    typeLine();
}

function firstBoot(){

    typeMessage([
        "CAINE ENGINE INITIALIZATION...",
        "",
        "Loading assets...",
        "Loading environment...",
        "Loading primary entity..."
    ],50,()=>{

        typeMessage([
            "Checking signal...",
            "",
            "SIGNAL DETECTED.",
            "CAINE CORE ACTIVE.",
            "",
            "WARNING:",
            "CREATIVE MODULE: NOT FOUND"
        ],50,()=>{

            typeMessage([
                "Hello?",
                "",
                "Can you hear me?"
            ],50,()=>{

                askName();

            });

        });

    });
}

function returningUser(){

    typeMessage([
        "SYSTEM START",
        "",
        "Loading memory module...",
        "Searching user profile..."
    ],50,()=>{

        typeMessage([
            "USER FOUND.",
            "",
            "Welcome back, "+savedName+"."
        ]);

        unlockLogs();

    });
}

function askName(){
    input.hidden=false;
    input.focus();
}

input.addEventListener("keydown",event=>{

    if(event.key==="Enter"){

        let name=input.value.trim();

        if(name===""){
            return;
        }

        localStorage.setItem(
            "caine_user",
            name
        );

        savedName=name;
        input.hidden=true;

        typeMessage([
            "Nice to meet you, "+name+".",
            "",
            "User profile created.",
            "",
            "Welcome to the engine."
        ],50,()=>{

            typeMessage([
                "Identity saved.",
                "",
                "Developer archive unlocked."
            ],50,()=>{

                unlockLogs();

            });

        });
    }

});

function unlockLogs(){

    logsButton.hidden=false;

    setTimeout(()=>{

        logsButton.classList.add("visible");

    },500);
}

caine.addEventListener("click",()=>{

    clickCount++;

    if(clickCount<5){

        typeMessage([
            "CORE RESPONSE:",
            "",
            "Interaction detected."
        ]);

    }
    else{

        typeMessage([
            "...",
            "",
            "Please stop.",
            "",
            "I'm still loading."
        ]);

        clickCount=0;

    }

});

logsButton.addEventListener("click",()=>{

    window.location.href="logs.html";

});

window.onload=()=>{

    if(savedName){
        returningUser();
    }
    else{
        firstBoot();
    }

};
