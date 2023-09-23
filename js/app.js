const amount = document.querySelector('#amount');
const finishAmount = document.querySelector('.form__amount');
const name = document.querySelector('#nickname');

const transferButton = document.querySelector('.form_button');
const successButton = document.querySelector('.success__button');

const content = document.querySelector('.content');
const success = document.querySelector('.success');

const detail = document.querySelector('.success__detail');

const allMoney = document.querySelector('.content_money');

let money = 12402888;

//12,402,888.00 $

function sanitize (str) {
  const string = str.replace(/[^0-9áéíóúñü \.,_-]/gim,"");
  return string.trim();
};

amount.addEventListener('keyup', () => {
  amount.value = sanitize(amount.value);
  finishAmount.textContent = `${+amount.value}.00$`;
});

transferButton.addEventListener('click', () => {
  if (!amount.value || !name.value) {
    return;
  }

  detail.innerHTML = `You paid ${amount.value}$ to ${name.value}. <br> Payment Completed within 24 hours.`


  content.style.display = `none`;
  success.style.display = `flex`;
});

successButton.addEventListener('click', () => {
  success.style.display = `none`;
  content.style.display = `flex`;
  money -= +amount.value;
  allMoney.textContent = `${money.toLocaleString()}.00$`;
  name.value = '';
  amount.value = '';
  finishAmount.textContent = '0.00$';
});

allMoney.textContent = `${money.toLocaleString()}.00$`;