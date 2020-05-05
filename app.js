//////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIABLES
const main = document.getElementById('main');
const section = document.querySelectorAll('section');

const alertContainer = document.getElementById('alert-container');
const checkContainer = document.getElementById('alertchecksvg');
const bellSvg = document.querySelector('.bell img');

const header = document.querySelector('header');
let trafficCanvas = document.getElementById('traffic-chart');
let dailyCanvas = document.getElementById('daily-chart');
let mobilePie = document.getElementById('mobile-chart');

const sectionnodeList = document.querySelectorAll('section');
const sectionArray = Array.from(sectionnodeList);

const mqMobile = window.matchMedia("(max-width: 780px)");
const mqTablet = window.matchMedia("(max-width: 980px)");
const mqDesktop = window.matchMedia("(min-width:908px)");

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
// CHART WIDGET


// Global datasets

console.log(Chart.defaults.global)
  Chart.defaults.global.animation.duration = '0';
  Chart.defaults.global.defaultColor = '#7377bf'
  Chart.defaults.global.legend.display = false;



// Full width line chart

 let trafficData = {
  labels: ["08-15", "2-9", "20-15", "16-17", "5-19", "7-26", "1-3"],
  datasets: [{
  data: [250, 150, 100, 1000, 1100, 700, 1150],
  backgroundColor: 'rgba(116, 119, 191, .3)',
  borderWidth: 1,
  lineTension: 0,
  fill: '#e2e3f6',
  borderWidth: 2,
  pointRadius: 7,
  pointHoverRadius: 10,
  pointBorderColor: '#7377bf',
  pointHoverBorderColor: '#4d4c72',
  pointBackgroundColor: '#fff',
  borderColor: '#7377bf'
  }]
  };

  let trafficOptions = {
  maintainAspectRatio: false,
  aspectRatio: 2.5,
  scales: {
  yAxes: [{
  ticks: {
  beginAtZero:true
  }
  }]
  }
  };

  let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
  });


// HALF WIDTH BAR CHART


 let dailyOptions = {
 maintainAspectRatio: false,
 aspectRatio: 2.5,
 animation: {
 duration: 0
 },
 scales: {
 yAxes: [{
 ticks: {
 beginAtZero:true
 }
 }]
 }
 };

 let barChart = new Chart(dailyCanvas, {
 type: 'bar',
 data: {
     labels: ["S", "M", "T", "W", "T", "F", "S"],
     datasets: [{
         data: [54, 199, 156, 23, 65, 60, 237],
         backgroundColor: '#7377bf',
     }]
 },
 label:true,
 options: dailyOptions
 });

// Mobile Pie chart

const piedata = {
    labels: ['Phones' , 'Tablets' , 'Desktop'],
    datasets: [{
      data: [70, 15, 15],
      backgroundColor: ['#7377bf', '#81c98f', '#74b1bf'],
    }]
  }




const pieoptions ={
    rotation: -40 * Math.PI,
    legend: {
    display:true,
    position: 'right',
    aspectRatio: 4,
    labels: {
        boxWidth: 20,
        fontStyle: 'bold'
    }
  }
}


let pieChart = new Chart(mobilePie, {
  type: 'doughnut',
  data: piedata,
  options:pieoptions
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
sectionArray[i].style.marginBottom = '40px';
sectionArray[i].lastElementChild.style.marginBottom = '40px';
sectionArray[i].style.borderBottom = '1px solid grey';
}
