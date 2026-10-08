const listings = document.querySelector('ul');
const text = document.querySelector('input');
const item = document.querySelector('li');
const button = document.querySelector('button');

button.addEventListener('click',() => {
    const li = document.createElement('li');
    const input = text.value.trim();
    if(input === ""){return};
    li.textContent = input;
    listings.prepend(li);
    
});

listings.addEventListener('click', e =>{
    if(e.target.tagName === 'LI'){
       e.target.remove(); 
    }
});



