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
        scores: 90,
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
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

// Проверка:
console.log(user===copyUser) // - что должно быть в консоли?
console.log(user.friends===copyUser.friends) // - что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser = _.cloneDeep(user);

//Проверка:
console.log(user===deepCopyUser) // - что должно быть в консоли?
console.log(user.friends===deepCopyUser.friends) // - что должно быть в консоли?

//3. Поверхностная копия массива students
const copyStudents = [...students];

//Проверка:
console.log(students === copyStudents) // - что должно быть в консоли?
console.log(students[0] === copyStudents[0]) // - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(m => ({...m}));

//Проверка:
console.log(students === deepCopyStudents) // - что должно быть в консоли?
console.log(students[0] === deepCopyStudents[0]) // - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = deepCopyStudents.sort( (a, b) => a.name <= b.name ? -1 : 1 );
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort( (a, b) => a.scores <= b.scores ? 1 : -1 );
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(f => f.scores >= 100);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3);
console.log(topStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents);


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter(f => !f.isMarried);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames  = students.map(m => m.name);
console.log(studentsNames);

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = studentsNames.join(' ');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(',');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let myDeepCopy = students.map(m => ({...m}));
let trueStudents = myDeepCopy.map(m => ({...m, isStudent: true}));
console.log(trueStudents);

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = myDeepCopy.map(m => m.name = 'Nick' ? {...m, isMarried: true} : m);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = studentsWithMarriedNick.find(f => f.name === 'Ann');
console.log(ann);

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - не испльзуя методы массивов и Math.max()
let myNewDeepCopy = students.map(m => ({...m}));
let bestStudent = myNewDeepCopy.reduce((acc, el) => {
    if(acc < el.scores) {
        acc = el.scores;
    }
    return acc;
}, 0);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
// И поднимаем руку!!!!

let scoresSum = myNewDeepCopy.reduce((acc, el) => acc + el.scores, 0);
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    const studentsWithFriends = students.map(m => ({...m, friends: []}));
    let friends = students.map(m => m.name);

    for (let i = 0; i < studentsWithFriends.length; i++) {
        studentsWithFriends[i].friends = friends.filter(f => f !== studentsWithFriends[i].name);
    }

    return studentsWithFriends;
}
console.log(addFriends(students));









