const rule = document.querySelector('.rule-block');
const ruleTable = document.querySelector('.rule-table');
const deletebt = document.querySelector('.delete');

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

hands.forEach((hand) => {
  hand.addEventListener('click', handleChoose);
});

function handleChoose(e) {
  let target = e.target.dataset.id;
  createBLock(target);
  //   handleResponsive(target);
}

function createBLock(targer) {
  console.log('createBLock -> target', typeof targer);
  switch (targer) {
    case '1':
      console.log('aaa');
      chooseBlock.innerHTML = `<div class="your-choose">
        <div class="pick you-pick">
        <span>YOU PICK</span>
        <div class="handd">
            <img src="./images/icon-paper.svg" alt="" />
        </div>
        </div>

        <div class="RESULT">
        <span></span>
        <button>PLAY AGAIN</button>
        </div>

        <div class="pick house-pick">
        <span>THE HOUSE PICK</span>
        <div class="handd house">
            <img src="" alt="" />
        </div>
        </div>
        </div>`;
      break;
    case '2':
      console.log('sss');
      chooseBlock.innerHTML = `<div class="your-choose">
        <div class="pick you-pick">
        <span>YOU PICK</span>
        <div class="handd">
            <img src="./images/icon-scissors.svg" alt="" />
        </div>
        </div>

        <div class="RESULT">
        <span></span>
        <button>PLAY AGAIN</button>
        </div>

        <div class="pick house-pick">
        <span>THE HOUSE PICK</span>
        <div class="handd house">
            <img src="" alt="" />
        </div>
        </div>
        </div>`;
      break;
    case '3':
      console.log('aaaawwww');
      chooseBlock.innerHTML = `<div class="your-choose">
        <div class="pick you-pick">
        <span>YOU PICK</span>
        <div class="handd">
            <img src="./images/icon-rock.svg" alt="" />
        </div>
        </div>

        <div class="RESULT">
        <span></span>
        <button>PLAY AGAIN</button>
        </div>

        <div class="pick house-pick">
        <span>THE HOUSE PICK</span>
        <div class="handd house">
            <img src="" alt="" />
        </div>
        </div>
        </div>`;
      break;
  }
}

// function handleResponsive(target) {
//   let num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

//   switch (num) {
//     case 1:
//       break;

//     default:
//       break;
//   }
// }
