import './styles.css';


const buttons = document.querySelectorAll('.btn');
const costInput: HTMLInputElement = document.querySelector('.form-control');

let selectedButton: number = -1;

buttons.forEach(b => b.addEventListener('click', handleClick));
costInput.addEventListener('keyup', verifyCostInput);

function handleClick() {
    const but = this as HTMLButtonElement;
    buttons.forEach(b => b.classList.remove('disabled'));
    but.classList.add('disabled');
    if (but.classList.contains('ten')) {
        selectedButton = 10;
    } else if (but.classList.contains('fif')) {
        selectedButton = 15;
    } else {
        selectedButton = 20;
    }
    updateDisplayPercentage(selectedButton);
}
function updateDisplayPercentage(p: number) {
    let dsection: HTMLDivElement = document.querySelector('.displayPercentage');

    let inputNum = costInput.valueAsNumber;

    let bsection: HTMLLIElement = document.querySelector('.billAmount');
    let tipsection: HTMLLIElement = document.querySelector('.tipPercentage');
    let asection: HTMLLIElement = document.querySelector('.tipAmount');
    let totalsection: HTMLLIElement = document.querySelector('.total');

    dsection.innerHTML = `You are tipping ${p}%`;

    bsection.innerText = `Bill Amount: $${inputNum}`;
    tipsection.innerText = `Tip Percentage: ${p}%`;

    let tipAmount: number = (p * .01) * inputNum;
    let finalCost = tipAmount + inputNum;
    asection.innerText = `Amount of tip: $${tipAmount}`;
    totalsection.innerText = `Total to be Paid: $${finalCost}`;

}

function verifyCostInput() {
    let inputNum = costInput.valueAsNumber;
    let errorSection: HTMLDivElement = document.querySelector('.errorMessageSpace');
    if (isNaN(inputNum)) {
        errorSection.innerHTML = 'MAKE IT A POSITIVE NUMBER HOE';
    }
    if (inputNum <= 0) {
        errorSection.innerHTML = 'MAKE IT A POSITIVE NUMBER HOE';
    }
    if (inputNum > 0) {
        errorSection.innerHTML = "";
    }
}
