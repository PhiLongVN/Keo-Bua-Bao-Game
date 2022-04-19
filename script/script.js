const rule = document.querySelector('.rule-block');
const ruleTable = document.querySelector('.rule-table');
const deletebt = document.querySelector('.delete');
const choose = ['rock', 'scissors', 'paper'];

/* ============================================ */
/*                    TOGGLE                    */
/* ============================================ */
rule.onclick = () => {
  ruleTable.style.display = 'flex';
};

deletebt.onclick = () => {
  ruleTable.style.display = 'none';
};

/* ============================================ */
/*                    CHOOSE                    */
/* ============================================ */

const hands = document.querySelectorAll('.hand');
const chooseBlock = document.querySelector('.choose-block');
const step1 = document.querySelector('.step-1');
const step2 = document.querySelector('.step-2');

hands.forEach((hand) => {
  hand.addEventListener('click', () => {
    let selection = hand.dataset.select;
    let selectionCOM = randomSelection();

    step1.style.display = 'none';
    step2.style.display = 'flex';

    createSelection(selection, selectionCOM);
    setTimeout(() => {
      checkWinner(selection, selectionCOM);
    }, 1000);
  });
});

const handCom = document.querySelector('.hand-com');
const handUser = document.querySelector('.hand-user');

function createSelection(selection, selectionCOM) {
  // user
  handUser.className = `handd hand-user ${selection}`;
  handUser.querySelector('img').src = `./images/icon-${selection}.svg`;

  // computer
  setTimeout(() => {
    handCom.className = `handd hand-com ${selectionCOM}`;
    handCom.querySelector('img').src = `./images/icon-${selectionCOM}.svg`;
  }, 1000);
}

function randomSelection() {
  let selection = choose[Math.floor(Math.random() * choose.length)];
  return selection;
}

const resultBlock = document.querySelector('.RESULT');
const result = document.querySelector('.RESULT span');

function checkWinner(selection, selectionCOM) {
  if (selection == selectionCOM) {
    result.innerHTML = 'IT IS TIE';
  } else if (
    (selection == 'rock' && selectionCOM == 'scissors') ||
    (selection == 'paper' && selectionCOM == 'rock') ||
    (selection == 'scissors' && selectionCOM == 'paper')
  ) {
    result.innerHTML = 'YOU WIN';
    handleScore(1);
  } else {
    result.innerHTML = 'YOU LOSE';
    handleScore(-1);
  }

  resultBlock.style.display = 'flex';
  playAgain();
}

function playAgain() {
  const Again = document.querySelector('.RESULT button');

  Again.onclick = () => {
    step1.style.display = 'flex';
    step2.style.display = 'none';
    resultBlock.style.display = 'none';
    handCom.querySelector('img').src = '';
    handCom.className = `handd hand-com `;
  };
}

let score = 0;
const scoreBlock = document.querySelector('.score');

function handleScore(point) {
  score += point;
  scoreBlock.innerText = score;
  
}
