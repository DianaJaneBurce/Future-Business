let icon = document.querySelector('.icon-burger');
let navbar = document.querySelector('.navbar');

icon.onclick = () => {
    icon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
