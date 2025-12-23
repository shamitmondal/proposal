const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const girlInput = document.getElementById("girlName");
const questionText = document.getElementById("questionText");
const letterText = document.getElementById("letterText");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");

let girlName = "";

function goQuestion(){
    girlName = girlInput.value.trim();
    if(!girlName){
        alert("Pls enter your name 💕");
        return;
    }

    questionText.innerText = `Will you be mine, ${girlName}? ❤️`;
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
}

function moveNo(){
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}


noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);

yesBtn.addEventListener("click", () => {
    letterText.innerHTML = `
    <b>Dear ${girlName},</b><br><br>

    I hope this letter finds you with a gentle smile, because every word I write comes straight from my heart.
From the moment you came into my life, something within me quietly changed, in the most beautiful and unexpected way.<br><br>

Your smile has the power to brighten even my darkest days, and your presence turns the simplest moments into something truly special.
I admire the way you speak, the way you care, and the way you effortlessly make my heart race without even trying.
With you, everything feels calmer, warmer, and filled with meaning.<br><br>

I may not know what the future holds, but I am certain of one thing — I want to walk toward it with you by my side.
I want to laugh with you, stand by you in every moment, and grow together through every chapter life has to offer.<br><br>

With all my love, hope, and sincerity ❤️<br>
    <b>Shamit</b>
    `;

    page2.classList.add("hidden");
    page3.classList.remove("hidden");
});
