
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};

window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
};

// Email Js

function validate() {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let envoyerBtn = document.querySelector('.envoyer-btn');

    envoyerBtn.addEventListener('onclick',(e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }   else{
                sendmail (name.value, email.value, msg.value);
                success();
        }
    });
}
validate();

function sendamil(name,email,msg) {
    emailjs.send("service_kvot3ly","template_nj8t6fh", {
        to_name: name,
        from_name: email,
        message: msg,
    });
}

function emptyerror() {
    swal({
        title: "OH NON....!",
        text: "Les champs de peuvent pas être vides!",
        icon: "erreur",
    });
}

function success() {
    swal({
        title: "Email envoyé!",
        text: "Nous répondrons dans les 24h !",
        icon: "success",
    });
}

// Header Background Change on Scroll 

let Header = document.querySelector('header')

window.addEventListener('scroll', () => {
    Header.classList.toggle('header-active', window.scrollY > 0);
});

// Scroll Top

let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
});