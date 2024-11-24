const cardInner = document.getElementById('card-inner');
const nextCard = document.getElementById('next-card'); 
const previousCard = document.getElementById('previous-card');
const randomCard = document.getElementById('random');
const sys = document.getElementById('sys');
const sdd = document.getElementById('sdd');
const ddd = document.getElementById('ddd'); 
const frontIMG = document.getElementById('frontIMG');
const backIMG = document.getElementById('backIMG');

let cardNum = 0;
let section = 'sys';
let numCards = 21;

nextCard.addEventListener("click", ()=>{ cardNumber('next') });
previousCard.addEventListener("click",()=>{ cardNumber('prev') });
randomCard.addEventListener("click", ()=>{ cardNumber('rand')});
sys.addEventListener("click", ()=>{ changeSection('sys') });
sdd.addEventListener("click", ()=>{ changeSection('sdd') });
ddd.addEventListener("click", ()=>{ changeSection('ddd') });

previousCard.disabled = true;
previousCard.style.backgroundColor = 'grey';
sys.style.backgroundColor = 'orange';
sys.style.color = '#000000';

function cardNumber(action){
    if(action == 'next'){
        cardNum += 1;
    }else if(action == 'prev'){
        cardNum -= 1;
    }else{
        cardNum = Math.floor(Math.random() * numCards);
    }
    changeCard(cardNum);
};

function changeCard(n){
    if(n <= 0) { 
        n = 0; cardNum = 0; 
        previousCard.disabled = true;
        previousCard.style.backgroundColor = 'grey';
        nextCard.disabled = false;
        nextCard.style.backgroundColor = '#327be1';
    }else if(n >= numCards){
        nextCard.disabled = true;
        nextCard.style.backgroundColor = 'grey';
        previousCard.disabled = false;
        previousCard.style.backgroundColor = '#327be1';
    }else{
        previousCard.disabled = false;
        nextCard.disabled = false;
        previousCard.style.backgroundColor = '#327be1';
        nextCard.style.backgroundColor = '#327be1';
    }
    frontIMG.src = 'img/' + section + '/' + n + 'F.svg';
    backIMG.src = 'img/' + section + '/' + n + 'B.svg';
};

 function changeSection(s){
    if(s == 'sys'){
        sys.style.backgroundColor = 'orange';
        sys.style.color = '#000000';
        sdd.style.backgroundColor = '#327be1';
        sdd.style.color = '#ffffff';
        ddd.style.backgroundColor = '#327be1';
        ddd.style.color = '#ffffff';
        section = 'sys';
        numCards = 21;
        changeCard(0);
    }else if(s == 'sdd'){
        sdd.style.backgroundColor = 'orange';
        sdd.style.color = '#000000';
        sys.style.backgroundColor = '#327be1';
        sys.style.color = '#ffffff';
        ddd.style.backgroundColor = '#327be1';
        ddd.style.color = '#ffffff';
        section = 'sdd';
        numCards = 32;
        changeCard(0);
    }else{
        ddd.style.backgroundColor = 'orange';
        ddd.style.color = '#000000';
        sdd.style.backgroundColor = '#327be1';
        sdd.style.color = '#ffffff';
        sys.style.backgroundColor = '#327be1';
        sys.style.color = '#ffffff';
        section = 'ddd';
        numCards = 17;
        changeCard(0);
    }
};

  
  
  
