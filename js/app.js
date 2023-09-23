const amount = document.querySelector('#amount');
const finishAmount = document.querySelector('.form__amount');
const nickname = document.querySelector('#nickname');

const transferButton = document.querySelector('.form_button');
const successButton = document.querySelector('.success__button');

const content = document.querySelector('.content');
const success = document.querySelector('.success');

const detail = document.querySelector('.success__detail');

const allMoney = document.querySelector('.content_money');

const loading = document.querySelector('.loader_container');

let money = 12402888;

//12,402,888.00 $

function sanitize (str, regex) {
  const string = str.replace(regex,"");
  return string.trim();
};

amount.addEventListener('keyup', () => {
  amount.value = sanitize(amount.value, /[^0-9áéíóúñü \.,_-]/gim);
  finishAmount.textContent = `${+amount.value}.00$`;
});

transferButton.addEventListener('click', () => {
  if (!amount.value || !nickname.value) {
    return;
  }

  content.style.display = `none`;
  loading.style.display = `block`;

  setTimeout(() => {
  loading.style.display = `none`;
  detail.innerHTML = `You paid ${amount.value}$ to ${nickname.value}. <br> Payment Completed within 24 hours.`
  success.style.display = `flex`;
  }, Math.floor(Math.random() * (2500 - 1500) + 1500));
});

successButton.addEventListener('click', () => {
  success.style.display = `none`;
  content.style.display = `flex`;
  money -= +amount.value;
  allMoney.textContent = `${money.toLocaleString()}.00$`;
  nickname.value = '';
  amount.value = '';
  finishAmount.textContent = '0.00$';
});

allMoney.textContent = `${money.toLocaleString()}.00$`;

//loader text
function iterateDots(){
  let el = document.querySelector('.dots')
  const dotsStr = el.innerHTML;
  const dotsLen = dotsStr.length;

  let maxDots = 3;
  el.innerHTML = (dotsLen < maxDots ? dotsStr + '.' : '');
}

function startLoading(){
  let intervalMs = 500;

  const interval = setInterval("iterateDots()", intervalMs);

  return interval;
} 

iterateDots();
startLoading();