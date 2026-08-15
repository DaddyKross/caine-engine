/* =========================================
   CAINE ENGINE
   DEVELOPMENT LOGS
   ========================================= */


/* =========================================
   ПОЛУЧАЕМ ЭЛЕМЕНТЫ
   ========================================= */

const builds =
    document.querySelectorAll(
        ".build.available"
    );


const logMessages =
    document.querySelectorAll(
        ".logMessage[data-content]"
    );


const defaultMessage =
    document.getElementById(
        "defaultMessage"
    );


/* =========================================
   ПОКАЗ ЗАПИСИ
   ========================================= */

function showBuild(buildNumber) {


    /* -------------------------------------
       Убираем активность со всех билдов
       ------------------------------------- */

    builds.forEach(
        build => {

            build.classList.remove(
                "active"
            );

        }
    );


    /* -------------------------------------
       Прячем все записи
       ------------------------------------- */

    logMessages.forEach(
        message => {

            message.classList.add(
                "hidden"
            );

        }
    );


    /* -------------------------------------
       Прячем стартовое сообщение
       ------------------------------------- */

    if (defaultMessage) {

        defaultMessage.classList.add(
            "hidden"
        );

    }


    /* -------------------------------------
       Находим нужный билд
       ------------------------------------- */

    const selectedBuild =
        document.querySelector(
            `.build[data-build="${buildNumber}"]`
        );


    const selectedMessage =
        document.querySelector(
            `.logMessage[data-content="${buildNumber}"]`
        );


    /* -------------------------------------
       Если запись существует
       ------------------------------------- */

    if (selectedBuild) {

        selectedBuild.classList.add(
            "active"
        );
    }


    if (selectedMessage) {

        selectedMessage.classList.remove(
            "hidden"
        );


        /*
         * Каждый раз после выбора
         * возвращаем скролл наверх.
         */

        const content =
            document.getElementById(
                "logContent"
            );


        if (content) {

            content.scrollTop = 0;
        }
    }

}


/* =========================================
   КЛИКИ ПО ДОСТУПНЫМ БИЛДАМ
   ========================================= */

builds.forEach(
    build => {

        build.addEventListener(
            "click",
            () => {

                const buildNumber =
                    build.dataset.build;


                showBuild(
                    buildNumber
                );

            }
        );

    }
);


/* =========================================
   ЗАЩИТА ЗАКРЫТЫХ ЗАПИСЕЙ
   ========================================= */

const lockedBuilds =
    document.querySelectorAll(
        ".build.locked"
    );


lockedBuilds.forEach(
    build => {

        build.addEventListener(
            "click",
            () => {

                /*
                 * Пока просто показываем
                 * сообщение в консоли.
                 *
                 * В будущих билдах здесь
                 * можно будет сделать
                 * настоящую систему пароля.
                 */

                console.log(
                    "ACCESS DENIED: " +
                    build.dataset.build
                );

            }
        );

    }
);


/* =========================================
   АВТОМАТИЧЕСКИ ПОКАЗЫВАЕМ 0000.03
   ========================================= */

/*
 * Последний полностью завершённый билд
 * показывается при открытии страницы.
 */

showBuild(
    "0000.03"
);
