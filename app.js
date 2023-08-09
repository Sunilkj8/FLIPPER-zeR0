const cardArray = [


    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png'

    },
    

    {
        name: 'fries',
        image: 'images/fries.png'
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    },
    
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png'

    },

    {
        name: 'fries',
        image: 'images/fries.png'
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    }
];

cardArray.sort(()=> 0.5 - Math.random());
console.log(cardArray)

const gridDisplay = document.querySelector("#grid");
const resultDisplay=document.querySelector('#result');


let cardsChosen = [];
 
let cardsChosenIds = [];
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);


    }
}

createBoard();


function checkMatch() {
    const cards = document.querySelectorAll('img');

    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];


    console.log('Check for a match');

    if(optionOneId==optionTwoId){ 
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        console.log("you've chosen the same card again");
    }

   else if (cardsChosen[0] == cardsChosen[1]) {
        console.log('You found a match');
        cards[optionOneId].setAttribute('src','images/white.png')
        
        cards[optionTwoId].setAttribute('src','images/white.png')

        cards[optionOneId].removeEventListener('click', flipCard)

        cards[optionTwoId].removeEventListener('click', flipCard)
        
        cardsWon.push(cardsChosen)

    }
    else{ 
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
    }
    cardsChosen = [];
    cardsChosenIds = [];

    resultDisplay.innerHTML=cardsWon.length
    

    if(cardsWon.length==cardArray.length/2){ 
            resultDisplay.innerHTML='Breakthrough'
            document.querySelector('#grid').setAttribute('id','nodisp');
            document.querySelector('h3').setAttribute('id','noh3')
            document.querySelector('#result').setAttribute('id','breakthrough')


             
            
    }
}

function flipCard() {

    const CARDID = this.getAttribute('data-id');
    this.setAttribute('src', cardArray[CARDID].image);
    cardsChosen.push(cardArray[CARDID].name);
    cardsChosenIds.push(CARDID);
    

    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 500)
    }

}
 
