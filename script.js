const bootScreen = document.getElementById("bootScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const photoScreen = document.getElementById("photoScreen");
const incidentScreen = document.getElementById("incidentScreen");
const finalScreen = document.getElementById("finalScreen");

const bootProgress = document.getElementById("bootProgress");
const bootStatus = document.getElementById("bootStatus");

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");


/* Screen Change */

function showScreen(screen) {

    const screens = [
        bootScreen,
        birthdayScreen,
        photoScreen,
        incidentScreen,
        finalScreen
    ];

    screens.forEach((item) => {
        item.classList.remove("active");
    });

    screen.classList.add("active");
}


/* Boot Animation */

let progress = 0;

const bootMessages = [
    "Initializing birthday.exe...",
    "Searching for embarrassing memories...",
    "Scanning Foxy database...",
    "Birthday detected ✓",
    "Access granted."
];

let messageIndex = 0;

const bootTimer = setInterval(() => {

    progress += 2;

    bootProgress.style.width = progress + "%";

    if (progress % 20 === 0) {

        bootStatus.textContent =
            bootMessages[messageIndex];

        messageIndex++;
    }

    if (progress >= 100) {

        clearInterval(bootTimer);

        bootStatus.textContent =
            "ACCESS GRANTED ✓";

        setTimeout(() => {

            showScreen(birthdayScreen);

        }, 1200);
    }

}, 60);


/* Birthday → Photo */

document
    .getElementById("memoryButton")
    .addEventListener("click", () => {

        showScreen(photoScreen);

    });


/* Photo → Incident */

document
    .getElementById("incidentButton")
    .addEventListener("click", () => {

        showScreen(incidentScreen);

    });


/* Incident → Final */

document
    .getElementById("finalButton")
    .addEventListener("click", () => {

        showScreen(finalScreen);

    });


/* Final Celebration */

document
    .getElementById("celebrateButton")
    .addEventListener("click", () => {

        createConfetti(120);

    });


/* Confetti */

function createConfetti(amount) {

    const container =
        document.getElementById("confetti");

    const colors = [
        "#a855f7",
        "#ec4899",
        "#f59e0b",
        "#22c55e",
        "#38bdf8",
        "#f43f5e"
    ];

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        piece.style.animationDelay =
            Math.random() * 0.8 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 3500);
    }
}