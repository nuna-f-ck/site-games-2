// Задание 1
let compar = (a, b) => {
    if (a < b) {
        return a
    } else if (b < a) {
        return b
    }
    else {
        return a
    }
};

// Задание 2
let parityFunc = (num) => {
    if (num % 2 == 0) {
        return "Число четное"
    } else {
        return "Число нечетное"
    }
}

// Задание 3
let sqrConLog = (a) => console.log(a**2)
let sqrReturne = (a) => a**2

// Задание 4
function checkAge() {
    let age = prompt("Сколько вам лет?");
    
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    }
}

// Задание 5
let multFunc = (a, b) => {
    let num1 = Number(a)
    let num2 = Number(b)

    if (isNaN(num1) || isNaN(num2)) {
        return 'Один или оба параметра не являются корректными числами'
    } else {
        return num1 * num2
    }

}

// Задание 6
function checkNum() {
    let num = prompt('Введите число')

    if (isNaN(num)) {
        return 'Переданный параметр не является числом'
    } else {
        return `n в кубе равняется ${num**3}`

    }
}

// Задание 7
const circle1 = {
    radius: 5,

    getArea: function() {
        return Math.PI * this.radius * this.radius
    },

    getPerimeter: function() {
        return Math.PI * this.radius * 2
    }
}

const circle2 = {
    radius: 8,

    getArea: function() {
        return Math.PI * this.radius * this.radius
    },

    getPerimeter: function() {
        return Math.PI * this.radius * 2
    }
}
