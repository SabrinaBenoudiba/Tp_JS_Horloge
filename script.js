//*********************Horloge Analogique***********************

function updateClock() {
    const date = new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const degHr = hr * 360/12;
    const degMin = min * 360/60;
    const degSec = sec * 360/60;

    document.getElementById("hours").style.transform = `translate(-50%, 0) rotate(${degHr}deg)`;
    document.getElementById("minutes").style.transform = `translate(-50%, 0) rotate(${degMin}deg)`;
    document.getElementById("seconds").style.transform = `translate(-50%, 0) rotate(${degSec}deg)`;
}
setInterval(updateClock, 1000);
updateClock();

const numbers = document.querySelectorAll('.numbers');
const radius = 18; // rayon en em, à ajuster selon votre horloge

numbers.forEach((number, i) => {
    const angle = (i / 12) * 360;
    number.style.position = "absolute";
    number.style.transform = `
        rotate(${angle}deg)
        translate(${radius}em)
        rotate(-${angle}deg)
    `;
});


//************************ Horloge Numérique*********************

function updateClock2(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    let minutes = now.getMinutes().toString().padStart(2,0);
    let seconds = now.getSeconds().toString().padStart(2,0);

    document.getElementById("clock2").textContent = `${hours} : ${minutes} : ${seconds}`
}

setInterval(updateClock2, 1000);
updateClock2();

