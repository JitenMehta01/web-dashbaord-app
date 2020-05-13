
// LINE CHART VARIABLES
const hourlytrafficCanvas = document.getElementById('hourly-traffic-chart');
const dailytrafficCanvas = document.getElementById('daily-traffic-chart');
const weeklytrafficCanvas = document.getElementById('weekly-traffic-chart');
const monthlytrafficCanvas = document.getElementById('monthly-traffic-chart');

const trafficLinks = document.querySelectorAll('a[href$="-traffic-chart-container"]');

// DAILY
let dailyCanvas = document.getElementById('daily-chart');
let mobilePie = document.getElementById('mobile-chart');
////////////////////////////////////////////////////
// TRAFFIC - CHART

// Global datasets

console.log(Chart.defaults.global)
  Chart.defaults.global.animation.duration = '0';
  Chart.defaults.global.defaultColor = '#7377bf'
  Chart.defaults.global.legend.display = false;


/// hourly line chart

 let hourlytrafficData = {
  labels: ["09-10", "09-20", "09-30", "09-40", "09-50", "10"],
  datasets: [{
  data: [250, 150, 100, 700, 654, 987],
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

  let hourlytrafficOptions = {
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

  let hourlytrafficChart = new Chart(hourlytrafficCanvas, {
  type: 'line',
  data: hourlytrafficData,
  options: hourlytrafficOptions
  });


// Daily line chart

let dailytrafficData = {
 labels: ["08-09", "09-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17"],
 datasets: [{
 data: [250, 150, 100, 1000, 1100, 700, 1150, 654, 987],
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

 let dailytrafficOptions = {
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

 let dailytrafficChart = new Chart(dailytrafficCanvas, {
 type: 'line',
 data: dailytrafficData,
 options: dailytrafficOptions
 });


 // Weekly line chart

 let weeklytrafficData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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

  let weeklytrafficOptions = {
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

  let weeklytrafficChart = new Chart(weeklytrafficCanvas, {
  type: 'line',
  data: weeklytrafficData,
  options: weeklytrafficOptions
  });

  // Monthly line chart

  let monthlytrafficData = {
   labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
   datasets: [{
   data: [250, 150, 100, 1000, 1100, 700, 1150, 642, 823, 231, 498, 999],
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

   let monthlytrafficOptions = {
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

   let monthlytrafficChart = new Chart(monthlytrafficCanvas, {
   type: 'line',
   data: monthlytrafficData,
   options: monthlytrafficOptions
   });

   /////////////////////////////////////////////////
   // DAILY TRAFFIC BAR Chart

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


/////////////////////////////////////////////////
// MOBILE DOUGHNUT Chart

let piedata = {
    labels: ['Phones' , 'Tablets' , 'Desktop'],
    datasets: [{
      data: [70, 15, 15],
      backgroundColor: ['#7377bf', '#81c98f', '#74b1bf'],
    }]
  }




let pieoptions ={
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


/// loops throgh all traffic charts and stops the viewport going down towards the dfui
trafficLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
