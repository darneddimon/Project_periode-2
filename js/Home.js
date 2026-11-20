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

//timer




function timer() {
    const timerRow = document.getElementById("timer");
    const date = new Date();
    const ded = new Date('2027-01-08T00:00:00');
    const time = ded - date;

    const totalDays = Math.floor(time / (1000 * 60 * 60 * 24));
    const totalHours = Math.floor(time / (1000 * 60 * 60) % 24);
    const totalMinutes = Math.floor(time / (1000 * 60) % 60);
    const totalSeconds = Math.floor(time / (1000) % 60);

    timerRow.textContent = `${totalDays} dagen ${totalHours} uur's ${totalMinutes} min ${totalSeconds} seconds`
}

setInterval(timer, 1000)











