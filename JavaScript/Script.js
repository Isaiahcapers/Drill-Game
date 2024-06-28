const disruption = ["Lower Back Pain", "Shoulder-Pain", "Hip Pain", "Hot Sleeper", "Cold Sleeper", "Tossing/Turning"];
const brand = ["Pressuresmart", "Tempur-Pedic", "iSeries", "Stearns & Foster", "Beautyrest Black", "King Koil"];
const tools = ["X-Ray", "Adjustable Base", "Ezzz Credit", "X-Ray Tool", "Ask For The Sale", "Ezzz Credit"];
const dBlock = document.getElementsByClassName('dice-block', "")
const images = [
    './assets/Images/dice-1.png',
    './assets/Images/dice-2.png',
    './assets/Images/dice-3.png',
    './assets/Images/dice-4.png',
    './assets/Images/diec-5.png',
    './assets/Images/dice-6.png'
];

function rollDice () {
    const index1 = Math.floor(Math.random() * images.length);
    const index2 = Math.floor(Math.random() * images.length);
    const index3 = Math.floor(Math.random() * images.length);

    const die1 = document.getElementById('img1');
    const die2 = document.getElementById('img2');
    const die3 = document.getElementById('img3');
    
    die1.src = images[index1];
    die2.src = images[index2];
    die3.src = images[index3];

    const card1 = document.querySelector('#card1 p');
    const card2 = document.querySelector('#card2 p');
    const card3 = document.querySelector('#card3 p');

    card1.textContent = disruption[index1];
    card2.textContent = brand[index2];
    card3.textContent = tools[index3];

    console.log(`Dice 1: ${index1}, Dice 2: ${index2}, Dice 3: ${index3}`);
}


document.querySelector('.button').addEventListener('click', rollDice);