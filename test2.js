let password = 'пароль';
let usersPassword = prompt('Введите пароль');
(password === usersPassword)? console.log('Пароль введен верно'):console.log('Пароль введен неправильно');


let c = 5;
if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно')
}


let d = 5
let e = 2

if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
}


let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));


let monthNumber = prompt('Введите номер месяца')
switch (monthNumber) {
    case 1:
        console.log('зима')
        break;

    case 2:
        console.log('зима')
        break;

    case 3:
        console.log('весна')
        break;

    case 4:
        console.log('весна')
        break;

    case 5:
        console.log('весна')
        break;

    case 6:
        console.log('лето')
        break;

    case 7:
        console.log('лето')
        break;

    case 8:
        console.log('лето')
        break;

    case 9:
        console.log('осень')
        break;

    case 10:
        console.log('осень')
        break;

    case 11:
        console.log('осень')
        break;

    case 12:
        console.log('зима')
        break;

    default:
        console.log('номер месяца не может быть больше 13')
        break;
}
