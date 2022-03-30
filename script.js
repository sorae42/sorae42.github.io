let currentYear = new Date().getFullYear();

document.querySelector('#currentyear').innerHTML = currentYear;

// name changing
const names = ['Rosetta', 'skyventuree', 'sorae_42', 'shigukk', 'jdewfiez']
const displayName = document.querySelector('#name');
let currentName = 1;
setInterval(() => {
    displayName.classList.add('hidden');
    setTimeout(() => {
        displayName.innerHTML = names[currentName];
        displayName.classList.remove('hidden');
        currentName === names.length - 1 ? currentName = 0 : currentName++;
    }, 500);
}, 3500);