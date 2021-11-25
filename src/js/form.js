const enter = document.querySelector('.header__link-active-mobile');
const btnClose = document.querySelector('.form-close')
const btnRegister = document.querySelector('.btn-register');
const headerActive = document.querySelector('.header__link-active');

enter.addEventListener("click", scrollBody);
btnClose.addEventListener("click", scrollBody);
btnRegister.addEventListener("click", scrollBody);
headerActive.addEventListener("click", scrollBody);


function scrollBody() {
    if (document.body.classList.contains("stop-scrolling")) {
        document.body.classList.remove("stop-scrolling");
    } else {
        document.body.classList.add("stop-scrolling");
    }
}

function openForm() {
    document.querySelector('#myForm').style.display = "block";
}

function closeForm() {
    document.querySelector("#myForm").style.display = "none";
}