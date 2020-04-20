//////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIABLES
const main = document.getElementById('main');

const alertContainer = document.getElementById('alert-container');
const closeContainer = document.querySelector('#alertclosesvg');
const bellSvg = document.querySelector('.bell img');

const header = document.querySelector('header');
let chartWidget = document.getElementById('#traffic-chart');


const alertString = document.querySelector('#alert-container > .alert-inside-container > p .alertmessage');
const mqDesktop = window.matchMedia( "(min-width: 798px)" );
const mqMobile = window.matchMedia( "(max-width: 797px)" );


/////////////////////////////////////////////////////////////////////////////////////////////////////
// CLICK EVENT FOR THE ALERT MESSAGE.
closeContainer.addEventListener('click', (e) =>{
  alertContainer.style.opacity = '0';
  window.setTimeout( () => {
    alertContainer.style.display = 'none';} ,
    1000
  );
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
// CLICK EVENT FOR BELL ICON. THIS WILL TRIGGER THE ALERT MESSAGE.
bellSvg.addEventListener('click', (e) =>{

  if (alertContainer.style.display === 'none'){
  alertContainer.style.display = 'flex';
    window.setTimeout( () => {
    alertContainer.style.opacity = '1';} ,
    200
    );
  }

else{
  const svgDiv = bellSvg.parentNode;
  const p = document.createElement('p')
  if(svgDiv.lastElementChild !== 'p'){
    svgDiv.appendChild(p);
    }
  }

});

//////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION WHICH ADDS A MAX NO. OF WORDS OF 30 FOR ALERT BANNER ON DESKTOP, AND A MAX OF 10 ON MOBILE
const countWords = (str) => {
  const text = str.textContent;
  return text.split(/\s+/);
};


alertWords = countWords(alertString);
if (alertWords.length > 30 && mqDesktop.matches){
  alertWords.splice(30);
  alertString.innerHTML = alertWords.join(' ') + ' ... ';
}
else if (alertWords.length > 10 && mqMobile.matches) {
  alertWords.splice(10);
  alertString.innerHTML = alertWords.join(' ') + ' ... '
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// CHART WIDGET
// trafficData = {
//   labels: [​"8-23"​, ​"19-20"​, ​"20-20"​, ​"29-90"​, ​"04-19"​, ​"11-20"​, ​"9-13"​,"11-30"​, ​"4-17"​, ​"06-24"​, ​"28-31"​],
//   datasets: [{
//     data: [​750​, ​1250​, ​1000​, ​2000​, ​1500​, ​1750​, ​1250​, ​1850​, ​2250​, ​1500​,2500​],
//     backgroundColor: ​'rgba(116, 119, 191, .3)'​,
//     borderWidth: ​1​,
//   }]
//   };
