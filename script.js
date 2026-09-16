/* =====================================================
   6 PHOTO SPECIAL MEMORY WEBSITE
   ===================================================== */


/* =====================================================
   FORMSPREE
   ===================================================== */

const FORMSPREE_URL =
    "https://formspree.io/f/xzepljrz";


/* =====================================================
   BACKGROUND SONG
   ===================================================== */

const bgMusic =
    document.getElementById("bgMusic");


/* =====================================================
   6 PHOTOS + SPECIAL MESSAGES
   ===================================================== */

const memories = [

    {
        image: "photo11.jpg",

        heading: "Memory 1 ❤️",

        messageTitle: "சின்ன ஒரு உண்மை 😏❤️",

        message:
            "உன்னை பார்த்ததும் காதல் வந்துச்சு... " +
            "அதுக்கு காரணம் என்னன்னு தேடினேன், கிடைக்கல... " +
            "நீ அழகா இருக்குறது தான் problem போல! 😂❤️"
    },


    {
        image: "photo12.jpg",

        heading: "Memory 2 😂💞",

        messageTitle: "First Booking! ❤️😂",

        message:
            "உன்னை காதலிக்கலாமா என்று யோசித்தேன்... " +
            "அப்புறம் நினைச்சேன், " +
            "இவ்வளவு அழகான பொண்ணை வேற யாராவது தூக்கிட்டு போயிட்டா? " +
            "அதனால்... நான் தான் first booking! ❤️😂"
    },


    {
        image: "photo13.jpg",

        heading: "Memory 3 😎❤️",

        messageTitle: "ஒரு சின்ன Promise ❤️",

        message:
            "நீ என் வாழ்க்கைக்கு வந்தா " +
            "Life செம்மையாகிடும்... " +
            "வரலன்னா பரவாயில்லை, " +
            "நான் தினமும் உன்னை தொந்தரவு பண்ணி வர வச்சிடுவேன்! 😂💕"
    },


    {
        image: "photo14.jpg",

        heading: "Memory 4 🙈❤️",

        messageTitle: "First Question ❤️😂",

        message:
            "உன்னை பார்த்த நாள் முதல் " +
            "என் மனசு ஒரே கேள்வி கேக்குது... " +
            "“இவந்தான் உன் ஆளா?” " +
            "நானும் சொல்லிட்டேன்... " +
            "“வேற option ஏதாவது இருக்கா? இவளே போதும்!” 😂❤️"
    },


    {
        image: "photo15.jpg",

        heading: "Memory 5 😜💞",

        messageTitle: "காதல் வந்ததுக்கு காரணம் ❤️",

        message:
            "காதல் வந்ததுக்கு நான் காரணம் இல்லை... " +
            "நீ தான் காரணம்! " +
            "அதனால் தண்டனையாக " +
            "என் காதலை accept பண்ணி " +
            "என்னோட life-long-ஆ இருக்கணும்! 😂❤️"
    },


    {
        image: "photo16.jpg",

        heading: "Memory 6 🥰🔥",

        messageTitle: "Final Question ❤️",

        message:
            "உன்னை காதலிக்கிறேன் என்று " +
            "சொல்ல வந்தேன்... " +
            "ஆனா நீ “No” என்று சொன்னா? 😶 " +
            "பரவாயில்லை... " +
            "“No” சொல்லுற practice முடிச்சதும் " +
            "“Yes” சொல்லலாம்! 😂❤️"
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

let memoryRevealed = false;


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
   OPEN SURPRISE + PLAY SONG
   ===================================================== */

openBtn.addEventListener(
    "click",
    () => {

        currentMemory = 0;

        /*
         * Start song after user interaction.
         * This works better with mobile browser autoplay rules.
         */

        if (bgMusic) {

            bgMusic.volume = 0.45;

            bgMusic.play()
                .catch(error => {

                    console.log(
                        "Music could not start:",
                        error
                    );

                });

        }


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

    memoryRevealed = false;


    scratchCanvas.style.pointerEvents =
        "auto";


    setupScratch();

}


/* =====================================================
   SETUP SCRATCH
   ===================================================== */

function setupScratch() {

    requestAnimationFrame(() => {

        scratchCanvas.width =
            scratchCanvas.offsetWidth;

        scratchCanvas.height =
            scratchCanvas.offsetHeight;


        ctx.globalCompositeOperation =
            "source-over";


        /* ================= COVER ================= */

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


        /* ================= TEXT ================= */

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

    }

    else {

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


    if (memoryRevealed)
        return;


    const pos =
        getPosition(event);


    ctx.globalCompositeOperation =
        "destination-out";


    ctx.beginPath();


    ctx.arc(
        pos.x,
        pos.y,
        32,
        0,
        Math.PI * 2
    );


    ctx.fill();


    scratchCount++;


    /*
     * Reveal after enough scratching
     */

    if (scratchCount >= 35) {

        revealMemory();

    }

}


/* =====================================================
   MOUSE EVENTS
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
   TOUCH EVENTS
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
   REVEAL MEMORY
   ===================================================== */

function revealMemory() {

    if (memoryRevealed)
        return;


    memoryRevealed = true;


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
     * SPECIAL MESSAGE
     * appears below photo
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

            showScreen(
                finalScreen
            );


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
            "YES 😂❤️";


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
            "NO 😭💔";


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
   OPEN FEEDBACK
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
         * Create Formspree data
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
             * YES success
             */

            if (
                selectedAnswer
                    .startsWith("YES")
            ) {

                thankMessage.textContent =
                    "உன் YES answer மற்றும் feedback எனக்கு கிடைத்துவிட்டது. ❤️ " +
                    "Thank you for this beautiful moment! 💕";

            }


            /*
             * NO success
             */

            else {

                thankMessage.textContent =
                    "உன் NO answer மற்றும் feedback எனக்கு கிடைத்துவிட்டது. ❤️ " +
                    "Thank you for being honest.";

            }


            showScreen(
                thankYouScreen
            );


            createHeartBurst();


        }

        catch (error) {

            console.error(
                error
            );


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
        .getElementById(
            "heartsContainer"
        )
        .appendChild(heart);


    setTimeout(
        () => {

            heart.remove();

        },
        10000
    );

}


/* =====================================================
   CONTINUOUS HEARTS
   ===================================================== */

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
        i < 25;
        i++
    ) {

        setTimeout(
            createFloatingHeart,
            i * 60
        );

    }

}
