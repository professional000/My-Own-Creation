/* =====================================================
   6 PHOTO SPECIAL MEMORY WEBSITE
   ===================================================== */


/* =====================================================
   FORMSPREE
   ===================================================== */

const FORMSPREE_URL =
    "https://formspree.io/f/xzepljrz";


/* =====================================================
   ONLY 6 PHOTOS
   ===================================================== */

const memories = [

    {
        image: "photo11.jpg",

        heading: "Our First Memory 💬",

        messageTitle: "Something Special 😁",

        message:
            "சில memories-க்கு பெரிய reason தேவையில்லை... " +
            "அதை நினைக்கும்போது நம்ம முகத்தில் வரும் அந்த ஒரு smile போதும். ❤️"
    },

    {
        image: "photo12.jpg",

        heading: "A Beautiful Moment 🤫",

        messageTitle: "Keep This Memory 😊",

        message:
            "இந்த photo ஒரு photo மட்டும் இல்ல... " +
            "எப்போதாவது இதைப் பார்த்தாலும் இந்த moment நினைவுக்கு வரணும். 💕"
    },

    {
        image: "photo13.jpg",

        heading: "A Moment To Remember 😆",

        messageTitle: "You Are Special 😋",

        message:
            "நிறைய பேர் நம்ம வாழ்க்கையில் வரலாம்... " +
            "ஆனா சில பேர் மட்டும் தான் நம்ம memories-ல special place பிடிப்பாங்க. ❤️"
    },

    {
        image: "photo14.jpg",

        heading: "One More Beautiful Memory 🥳",

        messageTitle: "A Little Secret 😅",

        message:
            "உன்னிடம் சொல்லாமல் வைத்திருந்த ஒரு small feeling... " +
            "இந்த memory-யோட சேர்த்து இன்னும் special ஆகிடுச்சு. 💗"
    },

    {
        image: "photo15.jpg",

        heading: "Almost There 😜",

        messageTitle: "Just One More... 🤐",

        message:
            "இன்னும் ஒரு memory மட்டும் தான்... " +
            "அதுக்கப்புறம் நான் ரொம்ப நாளா சொல்ல நினைத்த ஒரு கேள்வியை கேட்கப் போறேன். ❤️"
    },

    {
        image: "photo16.jpg",

        heading: "The Final Memory 😶‍🌫️",

        messageTitle: "Now It's Time... 🫠",

        message:
            "இந்த 6 memories-யும் பார்த்த பிறகு... " +
            "என் மனதில் இருப்பதை மறைக்காமல் உன்னிடம் கேட்கப் போறேன். ❤️"
    }

];


/* =====================================================
   ELEMENTS
   ===================================================== */

const startScreen =
    document.getElementById("startScreen");

const memoryScreen =
    document.getElementById("memoryScreen");

const finalScreen =
    document.getElementById("finalScreen");

const thankYouScreen =
    document.getElementById("thankYouScreen");

const openBtn =
    document.getElementById("openBtn");

const currentNumber =
    document.getElementById("currentNumber");

const memoryHeading =
    document.getElementById("memoryHeading");

const memoryPhoto =
    document.getElementById("memoryPhoto");

const scratchCanvas =
    document.getElementById("scratchCanvas");

const scratchHint =
    document.querySelector(".scratch-hint");

const specialMessage =
    document.getElementById("specialMessage");

const messageTitle =
    document.getElementById("messageTitle");

const messageText =
    document.getElementById("messageText");

const nextBtn =
    document.getElementById("nextBtn");

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const answerButtons =
    document.getElementById("answerButtons");

const feedbackBox =
    document.getElementById("feedbackBox");

const feedbackEmoji =
    document.getElementById("feedbackEmoji");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackDescription =
    document.getElementById("feedbackDescription");

const feedback =
    document.getElementById("feedback");

const submitBtn =
    document.getElementById("submitBtn");

const submitStatus =
    document.getElementById("submitStatus");

const thankMessage =
    document.getElementById("thankMessage");


const ctx =
    scratchCanvas.getContext("2d");


/* =====================================================
   VARIABLES
   ===================================================== */

let currentMemory = 0;

let drawing = false;

let scratchCount = 0;

let selectedAnswer = "";

let alreadySubmitted = false;


/* =====================================================
   SHOW SCREEN
   ===================================================== */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(item => {

            item.classList.remove("active");

        });

    screen.classList.add("active");

}


/* =====================================================
   OPEN
   ===================================================== */

openBtn.addEventListener(
    "click",
    () => {

        currentMemory = 0;

        showScreen(memoryScreen);

        loadMemory();

    }
);


/* =====================================================
   LOAD MEMORY
   ===================================================== */

function loadMemory() {

    const memory =
        memories[currentMemory];

    currentNumber.textContent =
        currentMemory + 1;

    memoryHeading.textContent =
        memory.heading;

    memoryPhoto.src =
        memory.image;

    messageTitle.textContent =
        memory.messageTitle;

    messageText.textContent =
        memory.message;

    specialMessage.classList.remove(
        "show"
    );

    nextBtn.classList.remove(
        "show"
    );

    scratchHint.style.display =
        "block";

    scratchCount = 0;

    scratchCanvas.style.pointerEvents =
        "auto";

    setupScratch();

}


/* =====================================================
   SETUP SCRATCH
   ===================================================== */

function setupScratch() {

    /*
     * Wait until canvas has its actual size.
     */

    requestAnimationFrame(() => {

        scratchCanvas.width =
            scratchCanvas.offsetWidth;

        scratchCanvas.height =
            scratchCanvas.offsetHeight;

        ctx.globalCompositeOperation =
            "source-over";


        /* Cover */

        const gradient =
            ctx.createLinearGradient(
                0,
                0,
                scratchCanvas.width,
                scratchCanvas.height
            );

        gradient.addColorStop(
            0,
            "#ff4c9b"
        );

        gradient.addColorStop(
            0.5,
            "#871644"
        );

        gradient.addColorStop(
            1,
            "#ff7fba"
        );

        ctx.fillStyle =
            gradient;

        ctx.fillRect(
            0,
            0,
            scratchCanvas.width,
            scratchCanvas.height
        );


        /* Scratch text */

        ctx.fillStyle =
            "rgba(255,255,255,0.95)";

        ctx.textAlign =
            "center";

        ctx.textBaseline =
            "middle";

        const fontSize =
            Math.max(
                18,
                scratchCanvas.width * 0.06
            );

        ctx.font =
            `bold ${fontSize}px Arial`;

        ctx.fillText(
            "Scratch To Reveal ❤️",
            scratchCanvas.width / 2,
            scratchCanvas.height / 2
        );

    });

}


/* =====================================================
   GET POSITION
   ===================================================== */

function getPosition(event) {

    const rect =
        scratchCanvas.getBoundingClientRect();

    let clientX;
    let clientY;

    if (event.touches) {

        clientX =
            event.touches[0].clientX;

        clientY =
            event.touches[0].clientY;

    } else {

        clientX =
            event.clientX;

        clientY =
            event.clientY;

    }

    return {

        x:
            clientX - rect.left,

        y:
            clientY - rect.top

    };

}


/* =====================================================
   SCRATCH
   ===================================================== */

function scratch(event) {

    if (!drawing)
        return;

    const pos =
        getPosition(event);

    ctx.globalCompositeOperation =
        "destination-out";

    ctx.beginPath();

    ctx.arc(
        pos.x,
        pos.y,
        30,
        0,
        Math.PI * 2
    );

    ctx.fill();

    scratchCount++;


    /*
     * Enough scratching = reveal
     */

    if (scratchCount >= 35) {

        revealMemory();

    }

}


/* =====================================================
   MOUSE
   ===================================================== */

scratchCanvas.addEventListener(
    "mousedown",
    () => {

        drawing = true;

    }
);

scratchCanvas.addEventListener(
    "mouseup",
    () => {

        drawing = false;

    }
);

scratchCanvas.addEventListener(
    "mouseleave",
    () => {

        drawing = false;

    }
);

scratchCanvas.addEventListener(
    "mousemove",
    scratch
);


/* =====================================================
   TOUCH
   ===================================================== */

scratchCanvas.addEventListener(
    "touchstart",
    event => {

        event.preventDefault();

        drawing = true;

        scratch(event);

    },
    {
        passive: false
    }
);


scratchCanvas.addEventListener(
    "touchmove",
    event => {

        event.preventDefault();

        scratch(event);

    },
    {
        passive: false
    }
);


scratchCanvas.addEventListener(
    "touchend",
    () => {

        drawing = false;

    }
);


/* =====================================================
   REVEAL
   ===================================================== */

function revealMemory() {

    /*
     * Clear scratch layer
     */

    ctx.clearRect(
        0,
        0,
        scratchCanvas.width,
        scratchCanvas.height
    );


    scratchCanvas.style.pointerEvents =
        "none";


    scratchHint.style.display =
        "none";


    /*
     * IMPORTANT:
     * Special message appears BELOW photo
     */

    setTimeout(() => {

        specialMessage.classList.add(
            "show"
        );

        nextBtn.classList.add(
            "show"
        );

    }, 250);


    createHeartBurst();

}


/* =====================================================
   NEXT MEMORY
   ===================================================== */

nextBtn.addEventListener(
    "click",
    () => {

        currentMemory++;

        /*
         * After exactly 6 photos
         */

        if (
            currentMemory >=
            memories.length
        ) {

            showScreen(finalScreen);

            createHeartBurst();

            return;

        }


        loadMemory();

    }
);


/* =====================================================
   YES
   ===================================================== */

yesBtn.addEventListener(
    "click",
    () => {

        selectedAnswer =
            "YES 😂";

        feedbackEmoji.textContent =
            "💖";

        feedbackTitle.textContent =
            "You Said YES! ❤️";

        feedbackDescription.textContent =
            "உன் answer ரொம்ப special. " +
            "உன் மனதில் இருக்கிறதை ஒரு small feedback-ஆ சொல்லு. 💕";

        openFeedback();

        createHeartBurst();

    }
);


/* =====================================================
   NO
   ===================================================== */

noBtn.addEventListener(
    "click",
    () => {

        selectedAnswer =
            "NO 😭";

        feedbackEmoji.textContent =
            "💌";

        feedbackTitle.textContent =
            "Thank You For Being Honest ❤️";

        feedbackDescription.textContent =
            "உன் answer-ஐ நான் respect பண்ணுகிறேன். " +
            "உன் honest feedback-ஐ சொல்லலாம். ❤️";

        openFeedback();

    }
);


/* =====================================================
   FEEDBACK OPEN
   ===================================================== */

function openFeedback() {

    answerButtons.style.display =
        "none";

    feedbackBox.classList.add(
        "show"
    );

}


/* =====================================================
   SUBMIT FEEDBACK
   ===================================================== */

submitBtn.addEventListener(
    "click",
    async () => {

        if (alreadySubmitted)
            return;


        submitBtn.disabled =
            true;

        submitBtn.textContent =
            "Sending...";


        const userFeedback =
            feedback.value.trim();


        /*
         * Formspree data
         */

        const formData =
            new FormData();


        formData.append(
            "answer",
            selectedAnswer
        );

        formData.append(
            "feedback",
            userFeedback ||
            "No additional feedback"
        );

        formData.append(
            "time",
            new Date().toLocaleString(
                "en-IN"
            )
        );

        formData.append(
            "website",
            window.location.href
        );


        try {

            const response =
                await fetch(
                    FORMSPREE_URL,
                    {
                        method: "POST",

                        body: formData,

                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );


            if (!response.ok) {

                throw new Error(
                    "Submission failed"
                );

            }


            alreadySubmitted =
                true;


            /*
             * Success page
             */

            if (
                selectedAnswer
                    .startsWith("YES")
            ) {

                thankMessage.textContent =
                    "உன் YES answer மற்றும் feedback எனக்கு கிடைத்துவிட்டது. ❤️ " +
                    "Thank you for this beautiful moment! 💕";

            } else {

                thankMessage.textContent =
                    "உன் NO answer மற்றும் feedback எனக்கு கிடைத்துவிட்டது. ❤️ " +
                    "Thank you for being honest.";

            }


            showScreen(
                thankYouScreen
            );

            createHeartBurst();


        } catch (error) {

            submitStatus.textContent =
                "Something went wrong. Please try again.";

            submitBtn.disabled =
                false;

            submitBtn.textContent =
                "Send My Answer 💌";

        }

    }
);


/* =====================================================
   FLOATING HEART
   ===================================================== */

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";


    const emojis = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💞"
    ];


    heart.textContent =
        emojis[
            Math.floor(
                Math.random() *
                emojis.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 20) +
        "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) +
        "s";


    document
        .getElementById("heartsContainer")
        .appendChild(heart);


    setTimeout(
        () => {

            heart.remove();

        },
        10000
    );

}


/* Continuous hearts */

setInterval(
    createFloatingHeart,
    800
);


/* =====================================================
   HEART BURST
   ===================================================== */

function createHeartBurst() {

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        setTimeout(
            createFloatingHeart,
            i * 60
        );

    }

          }
