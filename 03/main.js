// Обработчик, handler, cлушатель, listener, подписчик, subscriber

const sm = document.getElementById('small');
const md = document.getElementById('medium');
const bg = document.getElementById('big');
const fB = document.getElementById('firstButton')

// event/ ev/ e -> объект, стандартного типа,
// нам внутри этого обработчика доступны свойства и методы этого объекта
sm.onclick = () => alert("Всем привет!!!");
sm.onclick = null;

const greeting = (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.stopPropagation();
        alert(`Это див ${e.target.name}`);
    }
}

const hey = () => {
    alert('Hey!!!');
}

sm.onclick = greeting;
sm.onclick = null;

sm.addEventListener('click', greeting);
//sm.addEventListener('click', hey);
md.addEventListener('click', greeting);
//md.addEventListener('click', hey);
bg.addEventListener('click', greeting);
//bg.addEventListener('click', hey);
//sm.removeEventListener('click', greeting);
fB.addEventListener('click', greeting);
