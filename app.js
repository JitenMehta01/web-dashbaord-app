// VARIABLES
const alertSection = document.getElementById('alert-container');





// ALERT BANNER
// alert.addEventListener('click', (e) =>{
//   const alertX = e.target;
//   if (alertX.className === 'alert-banner-close'){
//     alertSection.style.display = 'none';
//   }
// });




const countWords = (str) => {
  const text = str.textContent;
  return text.split(/\s+/);
};

const alertString = document.querySelector('#alert-container > p .alertmessage');
const alertWords = countWords(alertString);
const mq = window.matchMedia( "(max-width: 798px)" );

if (alertWords.length > 10 && mq.matches){
alertWords.splice(10);
alertString.innerHTML = alertWords.join(' ') + ' ... ';
}
