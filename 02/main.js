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
]

const incAge = st => ({...st, age: st.age + 1});

const arr = students.map(incAge);
console.log(arr);
const myMap = (array, callback) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = callback(array[i]);
    }
    return result;
}

const arrS = myMap(students, incAge);



const checkScores = (st) => {
    return st.scores >= 100;
}

const myFilter = (arr, callback) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(myFilter(students, checkScores));

const alexFinder = (st) => {
    return st.name === "Alex";
};

console.log(students.find(alexFinder));

const myFind = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        }
    }
}

console.log(myFind(students, alexFinder));