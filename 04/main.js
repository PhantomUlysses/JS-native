const toDoListID_1 = '53gf';
const toDoListID_2 = '10kh';

const toDoLists = [
    {
        id: toDoListID_1,
        title: 'What to buy',
        filter: 'all',
    },
    {
        id: toDoListID_2,
        title: 'What to learn',
        filter: 'all',
    }
]

const tasks = {
    [toDoListID_1]: [ // '53gf'
        {id: 'as76', title: 'Beer', isDone: false},
        {id: 'as77', title: 'Dark beer', isDone: false},
        {id: 'as78', title: 'Craft beer', isDone: true},
        {id: 'as79', title: 'Lager', isDone: false}
    ],
    [toDoListID_2]: [
        {id: 'as01', title: 'HTML', isDone: false},
        {id: 'as02', title: 'CSS', isDone: false},
        {id: 'as03', title: 'React', isDone: false},
        {id: 'as04', title: 'Redux', isDone: false}
    ]
}

tasks[toDoListID_1].find(t => t.id === 'as78').isDone = 'Yo!!';
console.log(tasks[toDoListID_1].find(t => t.id === 'as78').isDone);

// reduce

const arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((acc, el, i) => acc + el));
console.log(arr.reduce((acc, el, i) => acc > el ? acc : el));

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el, i) => acc + el.scores, 0));
console.log(students.reduce((acc, el, i) => {
    if(el.scores >= 100) {
        acc.push(el);
    }
    return acc;
}, []));