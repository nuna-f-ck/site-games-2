// Задание 1
const myArr = [1, 5, 4, 10, 0, 3]

for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] == 10) break
    console.log(myArr[i])
}

// Задание 2
console.log(myArr[4])

// Задание 3
const secondArr = [1, 3, 5, 10, 20]

console.log(secondArr.join(' '))

// Задание 4
const result = []

for (let i = 0; i < 3; i++) {
    result.push([])
    for (let j = 0; j < 3; j++) {
        result[i].push(1)
    }
}

console.log(result)

// Задание 5
const thirdArr = [1, 1, 1]

thirdArr.push(2, 2, 2)

console.log(thirdArr)

// Задание 6
let exercise6 = [9, 8, 7, 'a', 6, 5]

exercise6.sort().pop()

console.log(exercise6)

// Задание 7
const exercise7 = [9, 8, 7, 6, 5]

const userGuess = prompt('Угадайте число от 1 до 10')

if (exercise7.includes(Number(userGuess))) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8
let myStr = 'abcdef'

myStr = myStr.split('').reverse().join('')

console.log(myStr)

// Задание 9
const exercise9 = [[1, 2, 3], [4, 5, 6]];
const exercise9New = [].concat(exercise9[0], exercise9[1])
console.log(exercise9New)

// Задание 10
const nums = [3, 7, 2, 9, 5, 1, 8, 4, 6, 10]

for (let i = 0; i < nums.length - 1; i++) {
    const sum = nums[i] + nums[i + 1]
    console.log(`${nums[i]} + ${nums[i + 1]} = ${sum}`)
}

// Задание 11
function squaresNums(numbers) {
    return numbers.map(num => num * num)
}

// Задание 12
function lengthsInWords(someString) {
    return someString.map(str => str.length)
}

// Задание 13
function negativeNums(someString) {
    return someString.filter(num => num < 0)
}

// Задание 14
const exercise14 = []
for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 11)
    exercise14.push(randomNumber)
}
const evenNumbers = exercise14.filter(num => num % 2 === 0)
console.log('исходный массив:', exercise14)
console.log('четные числа:', evenNumbers)

// Задание 15
const exercise15 = []
for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * 10) + 1
    exercise15.push(randomNum)
}
const sum = exercise15.reduce((acc, num) => acc + num, 0)
const average = sum / exercise15.length
console.log('массив:', exercise15)
console.log('среднее арифметическое:', average)
