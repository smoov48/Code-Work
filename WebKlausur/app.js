const button = document.querySelector('button');
const infotext = document.querySelector('.info-text');

button.addEventListener('click', () => {
    if (infotext.innerHTML === '') {
        infotext.innerHTML = 'Danke fur dein zeit';
    } else {
        infotext.innerHTML = '';
    }
});