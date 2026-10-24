let score = 0;
let power = 1;
let upgradePrice = 25;

const scoreElement = document.querySelector("#score");
const powerElement = document.querySelector("#power");

const tapButton = document.querySelector("#tapButton");
const upgradeButton = document.querySelector("#upgradeButton");


// TAP
tapButton.addEventListener("click", function(event) {

    score += power;

    scoreElement.textContent = score;

    createPlus(event.clientX, event.clientY);

    updateShop();
});


// ПОКРАЩЕННЯ
upgradeButton.addEventListener("click", function() {

    if (score >= upgradePrice) {

        score -= upgradePrice;

        power++;

        upgradePrice = Math.floor(upgradePrice * 1.7);

        scoreElement.textContent = score;

        powerElement.textContent = power;

        upgradeButton.textContent =
            `⬆️ Покращити тап — ${upgradePrice} 🪙`;

        updateShop();
    }
});


// +1, +2, +3...
function createPlus(x, y) {

    const plus = document.createElement("div");

    plus.className = "plus";

    plus.textContent = "+" + power;

    plus.style.left = x + "px";
    plus.style.top = y + "px";

    document.body.appendChild(plus);

    setTimeout(function() {
        plus.remove();
    }, 800);
}


// Перевіряємо магазин
function updateShop() {

    if (score >= upgradePrice) {
        upgradeButton.disabled = false;
    } else {
        upgradeButton.disabled = true;
    }
}


updateShop();
