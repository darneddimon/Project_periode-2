const welcomeM = document.getElementById("welcome_morning");
const welcomeA = document.getElementById("welcome_afternoon");
const welcomeE = document.getElementById("welcome_evening");
const d = new Date;
const hours = d.getHours();


if (hours < 12) {
    welcomeM.classList.add("visible");
} else if (hours < 18) {
    welcomeA.classList.add("visible");
} else {
    welcomeE.classList.add("visible");
};

const imgConnectiviteit = document.getElementById("img_connectiviteit");
imgConnectiviteit.addEventListener("mouseover", () => {
    console.log("Op de afbeelding gewezen");
});

