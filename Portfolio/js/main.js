// Flip des cartes expériences ------------------------------------------------------------------------------------------
var cards = document.querySelectorAll(".flip-card-inner");
cards.forEach((card) => {
    card.addEventListener('click', function () {
        if (card.classList.contains('is-flipped')) {
            card.classList.remove('is-flipped');
        } else {
            card.classList.add('is-flipped');
        }

    });
});

// Validation du formulaire de contact --------------------------------------------------------------------------------------
var nom = document.getElementById("formulaire_contact-nom");
var nomPB = document.getElementById("nomPB");
var email = document.getElementById("formulaire_contact-email");
var emailPB = document.getElementById("emailPB");
var objet = document.getElementById("formulaire_contact-objet");
var objetPB = document.getElementById("objetPB");
var description = document.getElementById("formulaire_contact-description");
var descriptionPB = document.getElementById("descriptionPB");
var boutonEnvoyer = document.getElementById("boutonEnvoyer");

boutonEnvoyer.addEventListener('click', function () {
    var pb1 = document.createElement('p');
    var pb2 = document.createElement('p');
    var pb3 = document.createElement('p');
    var pb4 = document.createElement('p');
    if (nom.value == "" & nomPB.childElementCount == 0) {
        pb1.innerHTML = "Veuillez entrer votre nom.";
        pb1.style = "color: red; margin-top:5px; margin-bottom:15px;";
        nomPB.appendChild(pb1)
    } else if (nom.value != ""){
        nomPB.innerHTML = ""
    }
    if (email.value == "" & emailPB.childElementCount == 0) {
        pb2.innerHTML = "Veuillez entrer votre email.";
        pb2.style = "color: red; margin-top:5px; margin-bottom:15px;";
        emailPB.appendChild(pb2)
    } else if (email.value != ""){
        emailPB.innerHTML = ""
    }
    if (objet.value == "" & objetPB.childElementCount == 0) {
        pb3.innerHTML = "Veuillez entrer on objet.";
        pb3.style = "color: red; margin-top:5px; margin-bottom:15px;";
        objetPB.appendChild(pb3)
    } else if (objet.value != ""){
        objetPB.innerHTML = ""
    }
    if (description.value == "" & descriptionPB.childElementCount == 0) {
        pb4.innerHTML = "Veuillez entrer une description.";
        pb4.style = "color: red; margin-top:5px; margin-bottom:15px;";
        descriptionPB.appendChild(pb4)
    } else if (description.value != "") {
        descriptionPB.innerHTML = ""
    }
})


// Bouton retour en haut de la page --------------------------------------------------------------------------------------

var retour_haut = document.getElementById('retour-haut')

retour_haut.addEventListener('click', function () {
    window.scrollTo(0, 0);
})