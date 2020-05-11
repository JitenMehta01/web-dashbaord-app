//////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIABLES
const main = document.getElementById('main');
const section = document.querySelectorAll('section');

const alertContainer = document.getElementById('alert-container');
const checkContainer = document.getElementById('alertchecksvg');
const bellSvg = document.querySelector('.bell img');

const header = document.querySelector('header');
// let trafficCanvas = document.getElementById('hourly-traffic-chart');
// let dailyCanvas = document.getElementById('daily-chart');
// let mobilePie = document.getElementById('mobile-chart');

const trafficNav = document.querySelector('.traffic-nav');

const sectionnodeList = document.querySelectorAll('section');
const sectionArray = Array.from(sectionnodeList);


const mqMobile = window.matchMedia("(max-width: 780px)");
const mqTablet = window.matchMedia("(max-width: 1024px)");
const mqDesktop = window.matchMedia("(min-width:1024px)");

const alertString = document.querySelector('#alert-container > .alert-inside-container > p .alertmessage');

// MQ



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

    else if (mqDesktop.matches){
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
});






//////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION WHICH ADDS A MAX NO. OF WORDS OF 30 FOR ALERT BANNER ON DESKTOP,
const countWords = (str) => {
  const text = str.textContent;
  return text.split(/\s+/);
};


let alertWords = countWords(alertString);


const alertRes = () =>{
    if (mqMobile.matches){
        alertWords.splice(8);
        alertString.innerHTML = alertWords.join(' ') + ' ... ';
      }

    else if (mqTablet.matches){
        alertWords.splice(13);
        alertString.innerHTML = alertWords.join(' ') + ' ... ';
      }

    else {
      alertWords.splice(30);
      alertString.innerHTML = alertWords.join(' ') + ' ... ';
      alertString.previousElementSibling.innerHTML = '<strong>Alert</strong>';

    }

  }



alertRes(mqMobile, mqTablet);

mqMobile.addListener(alertRes);
mqTablet.addListener(alertRes);



///////////////////////////////////////////////////////////////////////////////////////////////////////
// CREATING TABS FOR TRAFFIC charts


trafficNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A'){
  let activeTab = document.querySelectorAll('.active');
  for (let i =0; i < activeTab.length; i++){
    activeTab[i].className = activeTab[i].className.replace('active', '');
  }

  e.target.parentNode.className = 'active';
      document.getElementById(e.target.href.split('#')[1]).className += ' active';
  }
}
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////
// ADDING MARGIN TO THE FIRST CHILD OF EACH SECTION.

for (let i =0; i < section.length; i++){
  if (section[i].firstElementChild.tagName === 'H3'){
    section[i].firstElementChild.style.marginBottom = '30px';
    }
  }


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ADDING MARGIN-BOTTOM TO SECTIONS [ 2-9 ]
sectionArray.splice(0, 2);
for(let i =0; i < sectionArray.length; i++){
sectionArray[i].style.paddingTop = '40px';
sectionArray[i].lastElementChild.style.marginBottom = '40px';
sectionArray[i].style.borderBottom = '1px solid grey';
}
