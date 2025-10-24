// Задание 1
let str = 'js'
str = str.toUpperCase()
console.log(str)

// Задание 2
function checkSubStr(myArr, myStr) {
    let newArr = []
    myArr.forEach((item) => {
        if (item.toLowerCase().startsWith(myStr.toLowerCase())) {
            newArr.push(item)
        }
    })
    return newArr
}

// Задание 3
let num = 32.58884

console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))

// Задание 4
let nums = [52, 53, 49, 77, 21, 32]
nums.sort()

console.log(`Минимальное значение в ряде чисел: ${nums[0]}`)
console.log(`Минимальное значение в ряде чисел: ${nums[nums.length - 1]}`)

// Задание 5
function generateNum1And10() {
    let num = Math.floor(Math.random() * 10) + 1

    console.log(num)
}

// Задание 6
function generateArr(num) {
    let myArr = []
    const length = Math.floor(num / 2)

    for (let i = 0; i < length; i++) {
        let el = Math.floor(Math.random() * (num + 1))
        myArr.push(el)
    }
  
    return myArr
}

// Задание 7
function generateNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    let num = Math.floor(Math.random() * (max - min + 1)) + min

    return num
}

// Задание 8
console.log(new Date)

// Задание 9
let currentDate = new Date

let futureDate = new Date(currentDate)
futureDate.setDate(futureDate.getDate() + 73)

console.log("Текущая дата:", currentDate.toLocaleDateString())
console.log("Дата через 73 дня:", futureDate.toLocaleDateString())

// Задание 10
function formatedDate(date) {
    const months = [
        'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
        'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
    ]
    
    const daysOfWeek = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ]
    
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const dayOfWeek = daysOfWeek[date.getDay()]
    
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
   
    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`
}
