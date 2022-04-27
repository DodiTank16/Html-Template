const button = document.getElementById("togglebutton");
const nav = document.getElementById("mynav");

button.addEventListener('click', () => {
    nav.classList.toggle('show');
});