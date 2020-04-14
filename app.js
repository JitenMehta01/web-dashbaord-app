// VARIABLES
// const alertSection = document.getElementById('alert-container');



// ALERT BANNER
// alert.addEventListener('click', (e) =>{
//   const alertX = e.target;
//   if (alertX.className === 'alert-banner-close'){
//     alertSection.style.display = 'none';
//   }
// });



const countWords = (str) => {
  return str.split(' ').length;
}

let words = document.querySelector('#alert-container p');


console.log(countWords(words));
