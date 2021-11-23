
let cards = document.querySelectorAll('.calculator__list-container .calculator__card');
let calculatorsBlocks = document.querySelectorAll('.calculator-for-card');
let activeCard;

cards.forEach((card) => {
    card.addEventListener('click', function (e) {


        cards.forEach(function (c) {
            c.classList.remove('bg');
        });

        calculatorsBlocks.forEach(function (cb) {
            cb.classList.remove('active');
        });

        if (activeCard === card) {
            activeCard = null;
            return;
        }

        let calculatorBlock = document.querySelector(`#${card.dataset.calculatorId}`);
        calculatorBlock.classList.add('active');

        console.log(calculatorBlock)


        card.classList.add('bg');
        activeCard = card;


    })
})