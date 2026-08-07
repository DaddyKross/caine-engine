let files=document.querySelectorAll(".file");
let content=document.getElementById("content");


let logs={

    build01:`
CAINE ENGINE DEVELOPMENT LOG

BUILD 0000.01

STATUS:
ARCHIVED


Initial prototype created.


Core systems:

- Interface rendering
- Basic interaction module
- User identification


No abnormal behavior detected.
`,


    build02:`
CAINE ENGINE DEVELOPMENT LOG

BUILD 0000.02

STATUS:
STABLE


Public prototype release.


Added:

- Memory module
- User recognition
- Extended response system


Observation:

Some unexpected responses appeared during testing.
`,


    build03:`
CAINE ENGINE DEVELOPMENT LOG

BUILD 0000.03

STATUS:
IN DEVELOPMENT


Current objectives:

- Expand interaction system
- Improve response randomness
- Analyze user behavior


Additional note:

The system appears to generate responses outside
of initial parameters.

Investigation continues.
`

};



files.forEach(file=>{

    file.addEventListener(
        "click",
        ()=>{

            let id=file.dataset.log;

            content.innerHTML="<pre>"+logs[id]+"</pre>";

        }
    );

});
