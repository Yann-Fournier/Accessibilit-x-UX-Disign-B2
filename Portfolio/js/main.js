var retour_haut = document.getElementById('retour-haut')

retour_haut.addEventListener('click', function () {
    window.scrollTo(0, 0);
})

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
