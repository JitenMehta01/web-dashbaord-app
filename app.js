//////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIABLES
const main = document.getElementById('main');
const section = document.querySelectorAll('section');

const alertContainer = document.getElementById('alert-container');
const checkContainer = document.getElementById('alertchecksvg');
const bellSvg = document.querySelector('.bell img');

const header = document.querySelector('header');

const dropdownContainer = document.querySelector('.dropdown-container');

// const nameSugg = document.querySelector('.name-suggestion');
// const searchInput = document.querySelector('.main-header-search > input');


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
            text.style.right = '350px';
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


/////////////////////////////////////////////////////////////////////////////////////////////////////
// COG DROPDOWN MENU FUNCTIONALITY

dropdownContainer.addEventListener('click', () =>{
  const dropdown = document.getElementById('dropdown');
  dropdown.classList.toggle('show');

})


// closes the dropdown if the clicks outside of it


// window.addEventListener('click', (e) =>{
//   if (!e.target.matches('.cog')){
//     const dropdown = document.querySelectorAll('dropdown');
//     for (let i =0; i < dropdown.length; i++){
//       let openDropdown = dropdown[i];
//       if (dropdown.classList.contains('show')) {
//         dropdown.classList.remove('show');
//       }
//    }
//   }
// });
//
// // window.onclick = function(event) {
// //   if (!event.target.matches('.dropbtn')) {
// //     var dropdowns = document.getElementsByClassName("dropdown-content");
// //     var i;
// //     for (i = 0; i < dropdowns.length; i++) {
// //       var openDropdown = dropdowns[i];
// //       if (openDropdown.classList.contains('show')) {
// //         openDropdown.classList.remove('show');
// //       }
// //     }
// //   }
// // }


//////////////////////////////////////////////////////////////////////////////////////////////////////
// AUTO COMPLETE FOR SEARCH NAME INPUT

  const names = [
    {name: 'Abner'},
    {name: 'Abram'},
    {name: 'Adam'},

    {name: 'Bella'},
    {name: 'Ben'},
    {name: 'Beatrice'},

    {name: 'Charlotte'},
    {name: 'Charlie'},
    {name: 'Connor'},

    {name: 'Diego'},
    {name: 'Dylan'},
    {name: 'Drake'},

    {name: 'Emily'},
    {name: 'Ethan'},
    {name: 'Evie'},

    {name: 'Faith'},
    {name: 'Fiona'},
    {name: 'Fernanda'},

    {name: 'Grayson'},
    {name: 'Giovanni'},
    {name: 'Grant.'},

    {name: 'Harper'},
    {name: 'Hudson'},
    {name: 'Harrison'},

    {name: 'Jessica'},
    {name: 'Jake'},
    {name: 'Jacob'},

    {name: 'Liam'},
    {name: 'Luke'},
    {name: 'Luna'},

    {name: 'Mia'},
    {name: 'Matthew'},
    {name: 'Madison'},

    {name: 'Nicholas'},
    {name: 'Noah'},
    {name: 'Nash'},

    {name: 'Oscar'},
    {name: 'Oliver'},
    {name: 'Omar'},

    {name: 'Penelope'},
    {name: 'Parker'},
    {name: 'Paisley'},
  ];

  const nameSuggcontainer = document.querySelector('.name-suggestion-container');
  const searchInput = document.querySelector('.main-header-search > input');

  searchInput.addEventListener('keyup', (e) =>{
    const input = searchInput.value;
    const suggestions = names.filter((inputData) =>{
      return inputData.name.toLowerCase().startsWith(input);
    });
    suggestions.forEach((suggested) => {
      const div = document.createElement('div');
      div.className = 'name-suggestion';
      div.innerHTML = suggested.name;
      nameSuggcontainer.appendChild(div);
    });
    if (searchInput.value === ''){
      for (let i =0; i < nameSuggcontainer.length; i++){
        nameSuggcontainer.removeChild();
      }
    }
  });





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
