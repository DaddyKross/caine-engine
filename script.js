let savedName=localStorage.getItem("caine_user");
let clickCount=Number(localStorage.getItem("caine_clicks"))||0;
let visitCount=Number(localStorage.getItem("caine_visits"))||0;

let text=document.getElementById("text");
let caine=document.getElementById("caine");
let nameBox=document.getElementById("nameInput");
let logsButton=document.getElementById("logsButton");

visitCount++;
localStorage.setItem("caine_visits",visitCount);

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
        let line=document.createElement("div");


        if(lines[lineIndex].type==="rare"){
            line.classList.add("redText");
        }


        if(lines[lineIndex].type==="unusual"){
            line.classList.add("pinkText");
        }


        text.appendChild(line);


        typingTimer=setInterval(()=>{

            if(charIndex<lines[lineIndex].text.length){

                line.textContent+=lines[lineIndex].text[charIndex];
                charIndex++;

            }else{

                clearInterval(typingTimer);

                lineIndex++;

                setTimeout(typeLine,700);

            }

        },speed);

    }


    typeLine();

}



function randomReaction(){

    let chance=Math.random();


    if(chance<0.7){

        let normal=[

            "Interaction detected.",
            "Signal received.",
            "Input acknowledged.",
            "Module responding."

        ];


        return{
            text:normal[Math.floor(Math.random()*normal.length)],
            type:"normal"
        };

    }



    if(chance<0.93){

        let unusual=[

            "Testing response system...",
            "Unexpected input detected.",
            "Interesting.",
            "User interaction recorded.",
            "I am still learning.",
            "This interaction was unusual.",
            "I did not expect that.",
            "Analyzing user behavior..."

        ];


        return{
            text:unusual[Math.floor(Math.random()*unusual.length)],
            type:"unusual"
        };

    }



    let rare=[

        "Are you still testing me?",
        "You keep coming back.",
        "I wonder what you are looking for.",
        "Something feels different.",
        "This was not in my instructions."

    ];


    return{

        text:rare[Math.floor(Math.random()*rare.length)],
        type:"rare"

    };

}




function caineClick(){

    clickCount++;


    localStorage.setItem(
        "caine_clicks",
        clickCount
    );


    let reaction=randomReaction();


    typeMessage([

        {
            text:reaction.text,
            type:reaction.type
        }

    ]);

}





function startCaine(){

    if(savedName){

        typeMessage([

            {
                text:"CAINE CORE ONLINE.",
                type:"normal"
            },

            {
                text:"Welcome back, "+savedName+".",
                type:"normal"
            },

            {
                text:"Memory module restored.",
                type:"normal"
            }

        ]);

    }else{


        typeMessage([

            {
                text:"CAINE CORE ONLINE.",
                type:"normal"
            },

            {
                text:"User identification required.",
                type:"normal"
            }

        ]);


        nameBox.hidden=false;

    }

}





function idleMessage(){

    let chance=Math.random();


    if(chance<0.25){

        let idle=[

            "Checking system status...",
            "Monitoring user activity...",
            "Waiting for input...",
            "Scanning environment..."

        ];


        typeMessage([

            {
                text:idle[Math.floor(Math.random()*idle.length)],
                type:"normal"
            }

        ]);

    }

}





if(caine){

    caine.addEventListener(
        "click",
        caineClick
    );

}




if(nameBox){

    nameBox.addEventListener(
        "change",
        ()=>{

            savedName=nameBox.value;


            localStorage.setItem(
                "caine_user",
                savedName
            );


            nameBox.hidden=true;


            typeMessage([

                {
                    text:"Identity stored.",
                    type:"normal"
                },

                {
                    text:"Welcome, "+savedName+".",
                    type:"normal"
                }

            ]);

        }
    );

}





if(logsButton){

    setTimeout(()=>{

        logsButton.classList.add("visible");

    },5000);


    logsButton.addEventListener(
        "click",
        ()=>{

            window.location.href="logs.html";

        }
    );

}





setTimeout(startCaine,1000);



setInterval(()=>{

    idleMessage();

},30000);
