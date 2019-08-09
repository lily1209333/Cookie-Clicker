document.addEventListener(`DOMContentLoaded`, init);

let amount, num = 0; //paragraph element, total # of cookies
let costR = 10; //cost
let costB = 45;
let costG = 100;
let secR = 2; //cookies/second for each batch
let secB = 7;
let secG = 20;
let countR = 0; //#of batches bought
let countB = 0;
let countG = 0;
let rv, bv, gv;

function init() {
    amount = document.querySelector(`#amount`);

    const cookie = document.querySelector(`#cookie`);
    const regular = document.querySelector(`#regular`);
    const bakery = document.querySelector(`#bakery`);
    const grandma = document.querySelector(`#grandma`);
    const clear = document.querySelector(`#clear`)

    cookie.addEventListener(`click`, addCookie);
    regular.addEventListener(`click`, buyR);
    bakery.addEventListener(`click`, buyB);
    grandma.addEventListener(`click`, buyG);
    clear.addEventListener(`click`, restart);

    setInterval(updateText, 1000);
    updateText();
}

function addCookie() {
    num++;
    updateText();
}

function buyR() {
    if (costR <= num) {
        countR++;
        secR += 2;
        function intR() {
            num += 2;
        }
        rv = setInterval(intR, 1000);
        num -= costR;
        costR = Math.floor(costR * 9 / 8);
    }
    regular.innerText = `REGULAR \n Count: ${countR} \n Cost: ${costR} cookies \n ${secR} cookies/s`;
}

function buyB() {
    if (costB <= num) {
        countB++;
        secB += 7;
        function intB() {
            num += 7;
        }
        bv = setInterval(intB, 1000);
        num -= costB;
        costB = Math.floor(costB * 8 / 7);
    }
    bakery.innerText = `BAKERY \n Count: ${countB} \n Cost: ${costB} cookies \n ${secB} cookies/s`;
}

function buyG() {
    if (costG <= num) {
        countG++;
        secG += 20;
        function intG() {
            num += 20;
        }
        gv = setInterval(intG, 1000);
        num -= costG;
        costG = Math.floor(costG * 8 / 7);
    }
    grandma.innerText = `GRANDMA \n Count: ${countG} \n Cost: ${costG} cookies \n ${secG} cookies/s`;
}

function restart() {
    location.reload();
    updateText();
}

function updateText() {
    amount.innerText = `${num} Cookies`;
}
