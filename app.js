//////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIABLES
const main = document.getElementById('main');
const section = document.querySelectorAll('section');

const alertContainer = document.getElementById('alert-container');
const checkContainer = document.getElementById('alertchecksvg');
const bellSvg = document.querySelector('.bell img');

const header = document.querySelector('header');

const dropdownContainer = document.querySelector('.dropdown-container');

const form = document.querySelector('form');

const trafficNav = document.querySelector('.traffic-nav');

const sectionnodeList = document.querySelectorAll('section');
const sectionArray = Array.from(sectionnodeList);



const alertString = document.querySelector('#alert-container > .alert-inside-container > p .alertmessage');

// MQ

const mqDesktop = window.matchMedia("(min-width:1024px)");



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








/////////////////////////////////////////////////////////////////////////////////////////////////////
// COG DROPDOWN MENU FUNCTIONALITY

dropdownContainer.addEventListener('click', () =>{
  const dropdown = document.getElementById('dropdown');
  dropdown.classList.toggle('show');

})



//////////////////////////////////////////////////////////////////////////////////////////////////////
// AUTO COMPLETE FOR SEARCH NAME INPUT

const names = [
'Victoria Chambers',
'Dale Bryd',
'Dawrin Wood',
'Dan Oliver'
];





const nameSuggcontainer = document.querySelector('.name-suggestion-container');
  const searchInput = document.querySelector('.widget-container > input');
  // loads all names into container from the start
	names.forEach((name) => {
		nameSuggcontainer.innerHTML += `
			<p class="name-suggestion">${name}</p>
		`
	});
	// keyup event listener
  searchInput.addEventListener('keyup', (e) => {
	  const input = searchInput.value.toLowerCase();
	  if (input === '') {
		  nameSuggcontainer.style.display = 'none';
	  } else {
		  nameSuggcontainer.style.display = 'initial';
	  }
	  // display name based on search
	  const suggestion = document.querySelectorAll('.name-suggestion');
	  	suggestion.forEach((name, index) => {
			if (name.textContent.toLowerCase().includes(input)) {
				name.style.display = 'block';
			} else {
				name.style.display = 'none';
			}
		  });
  });
  //event listener for name suggestions
  nameSuggcontainer.addEventListener('click', e => {
	  const name = document.querySelectorAll('.name-suggestion');
	 for (let i = 0; i < name.length; i ++) {
		if (e.target === name[i]) {
			searchInput.value = e.target.textContent;
			nameSuggcontainer.style.display = 'none';
		}
	 }
  });

  // Removes the suggested names if the user clicks outside the input
  window.addEventListener('click', e =>{
    if(! e.target.className === 'name-suggestion-container');{
      nameSuggcontainer.style.display = 'none';
    }
  })







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



///////////////////////////////////////////////////////////////////////////////////////////////////////
// Event listener for the Form


  form.addEventListener('click', (e) =>{
    const formInput = form.querySelector('input');
    const formtextArea = form.querySelector('textarea');

    const errorStyling = (error) =>{
      error.style.color = 'red';
      error.style.textAlign = 'left';
      error.style.marginBottom = '20px';
    }

    const inputError = () =>{
      const p = document.createElement('p');
      p.className = 'inputerror';
      p.textContent = '* please type in a name';
      errorStyling(p);
      form.insertBefore(p, formInput);
    }

    const textareaError = () =>{
      const p = document.createElement('p');
      p.className = 'textareaerror';
      p.textContent = '* please type in a message';
      errorStyling(p);
      form.insertBefore(p, formtextArea);
    }

    e.preventDefault();


      if (formInput.value!== '' && formtextArea.value !== ''){
       e.preventDefault();
       form.style.display = 'none';
       const formSection = document.getElementById('message-container');
       const p = document.createElement('p');

       p.innerHTML = 'Thank you <b>' + formInput.value + '</b>. We will be in touch soon.' ;
       p.firstElementChild.style.fontWeight = '700';
       p.style.textAlign = 'left';
       formSection.appendChild(p);

     }

     else if (form.children[0].tagName !== 'P' && form.children[3].tagName !== 'P' ){

                  if (formInput.value=== '' && formtextArea.value === ''){
                    e.preventDefault();
                    inputError();
                    textareaError();

                 }
                 else if (formInput.value=== '' && formtextArea.value !== ''){
                   e.preventDefault();
                   inputError();

                 }
                 else if (formtextArea.value === '' && formInput.value !== ''){
                   e.preventDefault();
                   textareaError();
                 }

              }
  });

///////////////////////////////////////////////////////////////////////////////////////////////////////
// LOCAL STORAGE


const emailToggle = document.querySelectorAll('#toggle-container input[type="checkbox"]')[0];
const profileToggle = document.querySelectorAll('#toggle-container input[type="checkbox"]')[1];
const timeZone = document.getElementById('timezone');
const saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');
// Event handler for save button
saveButton.addEventListener('click', () =>{
localStorage.setItem('email', emailToggle.checked);
localStorage.setItem('public', profileToggle.checked);
localStorage.setItem('Timezone', timezone.selectedIndex);
});
// clears localStorage for cancel button
cancelButton.addEventListener('click', () =>{
localStorage.clear();
emailToggle.checked = false;
profileToggle.checked = false;
timezone.selectedIndex = 0;
});
emailToggle.checked = JSON.parse(localStorage.getItem('email'));
profileToggle.checked = JSON.parse(localStorage.getItem('public'));
timeZone.selectedIndex = localStorage.getItem('Timezone')
