const answer1 = document.getElementById('answer_1');
const answer2 = document.getElementById('answer_2');
const answer3 = document.getElementById('answer_3');
const answer4 = document.getElementById('answer_4');
const question1 = document.getElementById('question_1');
const question2 = document.getElementById('question_2');
const question3 = document.getElementById('question_3');
const question4 = document.getElementById('question_4');

const plus1 = document.getElementById('plus_1');
const plus2 = document.getElementById('plus_2');
const plus3 = document.getElementById('plus_3');
const plus4 = document.getElementById('plus_4');
const minus1 = document.getElementById('minus1');
const minus2 = document.getElementById('minus2');
const minus3 = document.getElementById('minus3');
const minus4 = document.getElementById('minus4');


question1.addEventListener('click', (e) => {
    answer1.classList.toggle('hidden');
    plus1.classList.toggle('hidden');
    minus1.classList.toggle('hidden');

    if(answer1.ariaHidden === 'true') {
        answer1.setAttribute('aria-hidden', 'false');
    }
    else {
        answer1.setAttribute('aria-hidden', 'true');
    }

    if(plus1.ariaHidden === 'true') {
        plus1.setAttribute('aria-hidden', 'false');
    }
    else {
        plus1.setAttribute('aria-hidden', 'true');
    }
    
    if(minus1.ariaHidden === 'true') {
        minus1.setAttribute('aria-hidden', 'false');
    }
    else {
        minus1.setAttribute('aria-hidden', 'true');
    }


});

question2.addEventListener('click', () => {
    answer2.classList.toggle('hidden');
    plus2.classList.toggle('hidden');
    minus2.classList.toggle('hidden');

    if(answer2.ariaHidden === 'true') {
        answer2.setAttribute('aria-hidden', 'false');
    }
    else {
        answer2.setAttribute('aria-hidden', 'true');
    }

    if(plus2.ariaHidden === 'true') {
        plus2.setAttribute('aria-hidden', 'false');
    }
    else {
        plus2.setAttribute('aria-hidden', 'true');
    }
    
    if(minus2.ariaHidden === 'true') {
        minus2.setAttribute('aria-hidden', 'false');
    }
    else {
        minus2.setAttribute('aria-hidden', 'true');
    }
});

question3.addEventListener('click', () => {
    answer3.classList.toggle('hidden');
    plus3.classList.toggle('hidden');
    minus3.classList.toggle('hidden');

    if(answer3.ariaHidden === 'true') {
        answer3.setAttribute('aria-hidden', 'false');
    }
    else {
        answer3.setAttribute('aria-hidden', 'true');
    }

    if(plus3.ariaHidden === 'true') {
        plus3.setAttribute('aria-hidden', 'false');
    }
    else {
        plus3.setAttribute('aria-hidden', 'true');
    }
    
    if(minus3.ariaHidden === 'true') {
        minus3.setAttribute('aria-hidden', 'false');
    }
    else {
        minus3.setAttribute('aria-hidden', 'true');
    }
});

question4.addEventListener('click', () => {
    answer4.classList.toggle('hidden');
    plus4.classList.toggle('hidden');
    minus4.classList.toggle('hidden');

    if(answer4.ariaHidden === 'true') {
        answer4.setAttribute('aria-hidden', 'false');
    }
    else {
        answer4.setAttribute('aria-hidden', 'true');
    }

    if(plus4.ariaHidden === 'true') {
        plus4.setAttribute('aria-hidden', 'false');
    }
    else {
        plus4.setAttribute('aria-hidden', 'true');
    }
    
    if(minus4.ariaHidden === 'true') {
        minus4.setAttribute('aria-hidden', 'false');
    }
    else {
        minus4.setAttribute('aria-hidden', 'true');
    }
});