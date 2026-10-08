const button = document.querySelector('.info');
const activbtn = document.querySelector('.activ-btn');

button.addEventListener('click', () => {
    if (activbtn.innerHTML === '') {
        activbtn.innerHTML = 'I come from Nigeria and I want to make my whole family proud of who I am';
    } else {
        activbtn.innerHTML = '';
    }
});