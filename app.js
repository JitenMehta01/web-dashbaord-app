//////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIABLES
const main = document.getElementById('main');

const alertContainer = document.getElementById('alert-container');
const checkContainer = document.getElementById('alertchecksvg');
const bellSvg = document.querySelector('.bell img');

const header = document.querySelector('header');
let chartWidget = document.getElementById('#traffic-chart');


const alertString = document.querySelector('#alert-container > .alert-inside-container > p .alertmessage');

// MQ
const mqMobile = window.matchMedia("(max-width:475px)");
const mqTablet = window.matchMedia("(min-width: 780px)");
const mqDesktop = window.matchMedia("(min-width: 980px)");


/////////////////////////////////////////////////////////////////////////////////////////////////////
// CLICK EVENT FOR THE ALERT MESSAGE.


checkContainer.addEventListener('click', (e) =>{
  const alertDiv = alertContainer.children[0];
  alertDiv.style.opacity = '0';
  window.setTimeout( () => {
    alertDiv.style.display = 'none';} ,
    1000
  );
  if(alertDiv.style.opacity === '0'){
    const p = document.createElement('p');
    p.className = 'checkedalertText';
    p.style.opacity = '0';
    p.textContent = 'You alert message has been cleared. Click the bell icon to view it again.';
    p.style.transition = 'all 1s ease-out';
    window.setTimeout( () => {
      alertContainer.style.justifyContent = 'center';
      alertContainer.style.alignItems = 'center';
      alertContainer.appendChild(p);
      p.style.opacity = '1';
      } ,
      1000
    );
  }
});



// When the check element is clicked, the message stating the alert message is down below will be removed
checkContainer.addEventListener('click', () =>{
  if (bellSvg.parentNode.lastElementChild.tagName === 'P'){
    const pContainer = bellSvg.parentNode;
    const p = bellSvg.parentNode.lastElementChild;
    p.style.opacity = '0';
    window.setTimeout( () => {
    pContainer.removeChild(p);
    },1000
    );
  }

});





/////////////////////////////////////////////////////////////////////////////////////////////////////
// CLICK EVENT FOR BELL ICON. THIS WILL TRIGGER THE ALERT MESSAGE.
bellSvg.addEventListener('click', (e) =>{



      if (alertContainer.children[0].style.display === 'none' && alertContainer.children[0].style.opacity === '0' ){
        alertContainer.removeChild(alertContainer.children[1]);
        alertContainer.children[0].style.display = 'flex';
        alertContainer.children[0].style.opacity = '1';
        alertContainer.style.justifyContent = 'initial';
        alertContainer.style.alignItems = 'initial';

      }

      if (alertContainer.style.display === 'none'){
      alertContainer.style.display = 'flex';
        window.setTimeout( () => {
        alertContainer.style.opacity = '1';} ,
        200
        );
      }

    else{
        if (mqDesktop.matches){
          const svgDiv = bellSvg.parentNode;
          if(svgDiv.lastElementChild.tagName !== 'P'){
            const p = document.createElement('p')
            svgDiv.appendChild(p);
            p.className = 'alert-bell-text';
            p.innerHTML = 'Your alert message is displaying down below. Click the check button to clear it of your list. ';
            const text = document.querySelector('.alert-bell-text');
            text.style.display = 'block';
            text.style.right = '300px';
            text.style.opacity = '1';
            text.style.color = 'white';
        }
      }
    }
});






//////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION WHICH ADDS A MAX NO. OF WORDS OF 30 FOR ALERT BANNER ON DESKTOP,
const countWords = (str) => {
  const text = str.textContent;
  return text.split(/\s+/);
};


alertWords = countWords(alertString);

// Tblet
if (mqTablet.matches && mqDesktop.matches === false ){
alertWords.splice(13);
alertString.innerHTML = alertWords.join(' ') + ' ... ';
}
// Desktop
else if (mqTablet.matches && mqDesktop.matches){
  alertWords.splice(30);
  alertString.innerHTML = alertWords.join(' ') + ' ... ';
}

// Mobile
else {
  alertWords.splice(8);
  alertString.innerHTML = alertWords.join(' ') + ' ... ';
  alertString.previousElementSibling.innerHTML = '<strong>Alert</strong>';

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
