
const state = {
    textBox : []
}

const DOM = {
    'symbol__weirdS' : document.querySelector('.symbol--§'),
    'num__1' : document.querySelector('.num--1'),
    'num__2' : document.querySelector('.num--2'),
    'num__3' : document.querySelector('.num--3'),
    'num__4' : document.querySelector('.num--4'),
    'num__5' : document.querySelector('.num--5'),
    'num__6' : document.querySelector('.num--6'),
    'num__7' : document.querySelector('.num--7'),
    'num__8' : document.querySelector('.num--8'),
    'num__9' : document.querySelector('.num--9'),
    'num__0' : document.querySelector('.num--0'),
    'symbol__minus' : document.querySelector('.symbol---'),
    'symbol__equal' : document.querySelector('.symbol--equal'),
    'command__back' : document.querySelector('command--back'),
}

const EventListeners = () => {
    
    DOM.symbol__weirdS.addEventListener('click', () => {
        console.log('§');
    });

    DOM.num__1.addEventListener('click', () => {
        console.log('1');
    });

    DOM.num__2.addEventListener('click', () => {
        console.log('2');
    });

    DOM.num__3.addEventListener('click', () => {
        console.log('3');
    });

    DOM.num__4.addEventListener('click', () => {
        console.log('4');
    });

    DOM.num__5.addEventListener('click', () => {
        console.log('5');
    });

    DOM.num__6.addEventListener('click', () => {
        console.log('6');
    });

    DOM.num__7.addEventListener('click', () => {
        console.log('7');
    });

    DOM.num__8.addEventListener('click', () => {
        console.log('8');
    });

    DOM.num__9.addEventListener('click', () => {
        console.log('9');
    });
    DOM.num__0.addEventListener('click', () => {
        console.log('0');
    });
    DOM.symbol__minus.addEventListener('click', () => {
        console.log('-');
    });

    DOM.symbol__equal.addEventListener('click', () => {
        console.log('=');
    });
}

(
    Init = () => {
    console.log(`the keyboard project is working`)
    EventListeners();
    }
)()