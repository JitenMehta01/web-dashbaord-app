// VARIABLES
const alertContainer = document.getElementById('alert-container');






alertContainer.addEventListener('click', (e) =>{
  const alertX = e.target;
  if (alertX.id === 'alertclosesvg'){
    alertContainer.style.display = 'none';
  }
});




const countWords = (str) => {
  const text = str.textContent;
  return text.split(/\s+/);
};

const alertString = document.querySelector('#alert-container > .alert-inside-container > p .alertmessage');
const alertWords = countWords(alertString);
const mqDesktop = window.matchMedia( "(min-width: 798px)" );
const mqMobile = window.matchMedia( "(max-width: 797px)" );

if (alertWords.length > 30 && mqDesktop.matches){
  alertWords.splice(30);
  alertString.innerHTML = alertWords.join(' ') + ' ... ';
}
else if (alertWords.length > 10 && mqMobile.matches) {
  alertWords.splice(10);
  alertString.innerHTML = alertWords.join(' ') + ' ... '
}
