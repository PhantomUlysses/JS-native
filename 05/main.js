const array = [1, 3, 67, 34, 888, 55, 12];

// for (let j = 0; j < array.length - 1; j++) {
//     for (let i = 0; i < array.length - 1 - j; i++) {
//         console.log(array);
//         if (array[i] > array[i + 1]) {
//             [array[i], array[i + 1]] = [array[i + 1], array[i]];
//         }
//     }
// }

console.log(array);

const immutableSort = (array) => {
    const copy = [...array];
    const result = []
    for (let i = 0; i < array.length; i++) {
        const max = Math.max(...copy);
        const index = copy.indexOf(max);
        copy.splice(index, 1);
        result.unshift(max);
    }
    return result;
}

let newArray = immutableSort(array);

console.log(newArray);

//'999', '!alex', 'Юрий', '!юрий'

const names = ['Bob', 'Alex', 'Nick', 'Donald', 'Joe'];

const num = [1, 56, 790, 10, 100, 465, 320];

const compFn = (a, b) => a - b;

console.log(num.sort(compFn));

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

console.log(students.sort((a, b) => a.scores - b.scores).reverse());

console.log(students.sort((a, b) => a.name <= b.name ? -1 : 1));