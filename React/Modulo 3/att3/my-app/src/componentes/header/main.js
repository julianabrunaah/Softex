const ul = document.querySelector('nav ul');
const menubtn = document.querySelector('.menu-btn');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

export default menuShow;