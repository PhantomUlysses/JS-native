const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

console.log(students.map(s => s.name));

console.log(students.map(s => {
    return `Привет - я ${s.name}. Мне ${s.age} лет.`;
}));

const st = students.map(s => {
    if (s.isMarried === false) {
        return {...s, isMarried: true};
    }
    return s;
});

console.log(st);

const st = students.map(s => {
    if (s.isMarried === false) {
        return {...s, isMarried: true};
    }
    return s;
});

const st = students.map(s => {
    if (s.isMarried === false) {
        return {...s, isMarried: true};
    }
    return s;
});

const st = students.map(s => {
    if (s.isMarried === false) {
        return {...s, isMarried: true};
    }
    return s;
});

const st = students.map(s => {
    if (s.isMarried === false) {
        return {...s, isMarried: true};
    }
    return s;
});

const st = students.map(s => {
    if (s.isMarried === false) {
        return {...s, isMarried: true};
    }
    return s;
});