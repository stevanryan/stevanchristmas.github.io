const run = document.querySelector('.welcome');
run.addEventListener('click', function() {
    run.classList.add('active');
});

const snowOn = document.querySelector('#on');
const header = document.querySelector('.head');
snowOn.addEventListener('click', function() {
    header.classList.toggle('headerActive');
});