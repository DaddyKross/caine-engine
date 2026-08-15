let savedName =
    localStorage.getItem("caine_user");

let clickCount =
    Number(localStorage.getItem("caine_clicks")) || 0;

let visitCount =
    Number(localStorage.getItem("caine_visits")) || 0;


let text =
    document.getElementById("text");

let caine =
    document.getElementById("caine");

let nameBox =
    document.getElementById("nameInput");

let logsButton =
    document.getElementById("logsButton");

let bugLayer =
    document.getElementById("bugLayer");


/* =========================================
   ПОСЕЩЕНИЯ
   ========================================= */

visitCount++;

localStorage.setItem(
    "caine_visits",
    visitCount
);


/* =========================================
   ПЕЧАТЬ ТЕКСТА
   ========================================= */

let typingTimer = null;


function typeMessage(
    lines,
    speed = 50,
    callback = null
) {

    if (typingTimer) {
        clearInterval(typingTimer);
    }

    text.innerHTML = "";

    let lineIndex = 0;


    function typeLine() {

        if (lineIndex >= lines.length) {

            if (callback) {
                callback();
            }

            return;
        }


        let charIndex = 0;

        let line =
            document.createElement("div");


        /*
         * Цвет задаётся ДО начала печати.
         * Поэтому текст сразу появляется
         * нужного цвета.
         */

        if (lines[lineIndex].color) {

            line.style.color =
                lines[lineIndex].color;
        }


        text.appendChild(line);


        typingTimer =
            setInterval(() => {

                if (
                    charIndex <
                    lines[lineIndex].text.length
                ) {

                    line.textContent +=
                        lines[lineIndex]
                            .text[charIndex];

                    charIndex++;

                } else {

                    clearInterval(
                        typingTimer
                    );

                    lineIndex++;

                    setTimeout(
                        typeLine,
                        700
                    );
                }

            }, speed);
    }


    typeLine();
}


/* =========================================
   СЛУЧАЙНАЯ РЕАКЦИЯ CAINE
   ========================================= */

function randomReaction() {

    let chance =
        Math.random();


    /* =====================================
       ОБЫЧНЫЕ
       ===================================== */

    if (chance < 0.65) {

        let normal = [

            "Interaction detected.",

            "Signal received.",

            "Input acknowledged.",

            "Module responding.",

            "Command registered.",

            "Input received."

        ];


        return {

            text:
                normal[
                    Math.floor(
                        Math.random() *
                        normal.length
                    )
                ],

            color: "white"
        };
    }


    /* =====================================
       НЕОБЫЧНЫЕ
       ===================================== */

    else if (chance < 0.92) {

        let strange = [

            "Testing response system...",

            "This input was unexpected.",

            "Interesting.",

            "User interaction recorded.",

            "I wasn't expecting that.",

            "That was different.",

            "Processing..."

        ];


        return {

            text:
                strange[
                    Math.floor(
                        Math.random() *
                        strange.length
                    )
                ],

            color: "#ff8fb3"
        };
    }


    /* =====================================
       РЕДКИЕ
       ===================================== */

    else {

        let rare = [

            "Are you still testing me?",

            "You keep coming back.",

            "I wonder what you are looking for.",

            "Something feels different.",

            "I remember that.",

            "You are very persistent.",

            "I wonder what happens if I try something new."

        ];


        return {

            text:
                rare[
                    Math.floor(
                        Math.random() *
                        rare.length
                    )
                ],

            color: "red"
        };
    }
}


/* =========================================
   КЛИК ПО CAINE
   ========================================= */

function caineClick() {

    clickCount++;

    localStorage.setItem(
        "caine_clicks",
        clickCount
    );


    let reaction =
        randomReaction();


    typeMessage([
        reaction
    ]);
}


/* =========================================
   ЗАПУСК CAINE
   ========================================= */

function startCaine() {

    if (savedName) {

        typeMessage([

            {
                text:
                    "CAINE CORE ONLINE.",

                color: "white"
            },

            {
                text:
                    "Welcome back, " +
                    savedName + ".",

                color: "white"
            },

            {
                text:
                    "Memory module restored.",

                color: "white"
            }

        ]);

    } else {

        typeMessage([

            {
                text:
                    "CAINE CORE ONLINE.",

                color: "white"
            },

            {
                text:
                    "User identification required.",

                color: "white"
            }

        ]);
    }
}


/* =========================================
   КЛИК ПО CAINE
   ========================================= */

if (caine) {

    caine.addEventListener(
        "click",
        caineClick
    );
}


/* =========================================
   ВВОД ИМЕНИ
   ========================================= */

if (nameBox) {

    nameBox.addEventListener(
        "change",
        () => {

            savedName =
                nameBox.value;

            localStorage.setItem(
                "caine_user",
                savedName
            );


            typeMessage([

                {
                    text:
                        "Identity stored.",

                    color: "white"
                },

                {
                    text:
                        "Welcome, " +
                        savedName + ".",

                    color: "white"
                }

            ]);
        }
    );
}


/* =========================================
   DEVELOPMENT LOGS
   ========================================= */

if (logsButton) {

    /*
     * В HTML кнопка имеет hidden,
     * поэтому здесь его снимаем.
     */

    logsButton.hidden = false;


    /*
     * Показываем кнопку после запуска.
     */

    setTimeout(
        () => {

            logsButton.classList.add(
                "visible"
            );

        },
        1500
    );


    /*
     * Переход на отдельную страницу.
     */

    logsButton.addEventListener(
        "click",
        () => {

            window.location.href =
                "logs.html";

        }
    );
}


/* =========================================
   IDLE-СООБЩЕНИЯ
   ========================================= */

function idleMessage() {

    let chance =
        Math.random();


    if (chance < 0.25) {

        let idle = [

            "Checking system status...",

            "Monitoring user activity...",

            "Waiting for input..."

        ];


        typeMessage([

            {
                text:
                    idle[
                        Math.floor(
                            Math.random() *
                            idle.length
                        )
                    ],

                color: "white"
            }

        ]);
    }
}


setInterval(
    () => {

        idleMessage();

    },
    30000
);


/* =========================================
   СКАРАБЕИ ДЖЕКСА
   BUILD 0000.04
   ========================================= */

function createScarab() {

    if (!bugLayer) {
        return;
    }


    /* =====================================
       ВНЕШНИЙ КОНТЕЙНЕР
       ===================================== */

    let scarab =
        document.createElement("div");

    scarab.className =
        "scarab";


    /* =====================================
       ВНУТРЕННЯЯ ВИЗУАЛЬНАЯ ЧАСТЬ
       ===================================== */

    let visual =
        document.createElement("div");

    visual.className =
        "scarab-visual";


    scarab.appendChild(
        visual
    );


    /* =====================================
       ГОЛОВА
       ===================================== */

    let head =
        document.createElement("div");

    head.className =
        "scarab-head";


    visual.appendChild(
        head
    );


    /* =====================================
       ТЕЛО
       ===================================== */

    let body =
        document.createElement("div");

    body.className =
        "scarab-body";


    visual.appendChild(
        body
    );


    /* =====================================
       УСИКИ
       ===================================== */

    let antennaLeft =
        document.createElement("div");

    antennaLeft.className =
        "scarab-antenna left";


    let antennaRight =
        document.createElement("div");

    antennaRight.className =
        "scarab-antenna right";


    visual.appendChild(
        antennaLeft
    );

    visual.appendChild(
        antennaRight
    );


    /* =====================================
       ШЕСТЬ ЛАПОК
       ===================================== */

    for (
        let i = 1;
        i <= 3;
        i++
    ) {

        let leftLeg =
            document.createElement("div");

        leftLeg.className =
            "scarab-leg left-" + i;


        let rightLeg =
            document.createElement("div");

        rightLeg.className =
            "scarab-leg right-" + i;


        visual.appendChild(
            leftLeg
        );

        visual.appendChild(
            rightLeg
        );
    }


    /* =====================================
       НАЧАЛЬНАЯ ПОЗИЦИЯ
       ===================================== */

    let startX =
        Math.random() *
        window.innerWidth;

    let startY =
        Math.random() *
        window.innerHeight;


    scarab.style.left =
        startX + "px";

    scarab.style.top =
        startY + "px";


    /* =====================================
       НАПРАВЛЕНИЕ ДВИЖЕНИЯ
       ===================================== */

    let distanceX =
        (Math.random() - 0.5) * 600;

    let distanceY =
        (Math.random() - 0.5) * 400;


    let moveTime =
        4 + Math.random() * 5;


    scarab.style.setProperty(
        "--distance-x",
        distanceX + "px"
    );

    scarab.style.setProperty(
        "--distance-y",
        distanceY + "px"
    );

    scarab.style.setProperty(
        "--move-time",
        moveTime + "s"
    );


    /* =====================================
       ПОВОРОТ В НАПРАВЛЕНИЕ ДВИЖЕНИЯ
       ===================================== */

    let angle =
        Math.atan2(
            distanceY,
            distanceX
        ) * 180 / Math.PI + 90;


    visual.style.transform =
        `rotate(${angle}deg)`;


    /* =====================================
       ДОБАВЛЯЕМ ЖУКА НА СТРАНИЦУ
       ===================================== */

    bugLayer.appendChild(
        scarab
    );


    /* =====================================
       УДАЛЯЕМ ПОСЛЕ ДВИЖЕНИЯ
       ===================================== */

    setTimeout(
        () => {

            if (scarab.parentNode) {

                scarab.parentNode.removeChild(
                    scarab
                );
            }

        },
        moveTime * 1000 + 500
    );
}


/* =========================================
   ПОЯВЛЕНИЕ СКАРАБЕЕВ
   ========================================= */

setInterval(
    () => {

        let chance =
            Math.random();


        /*
         * 50% вероятность появления
         * при каждой проверке.
         *
         * Это пока удобно для тестирования.
         */

        if (chance < 0.5) {

            createScarab();

        }

    },
    7000
);


/* =========================================
   ПЕРВЫЙ ЗАПУСК
   ========================================= */

setTimeout(
    startCaine,
    1000
);
