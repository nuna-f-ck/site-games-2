let i = 0
while (i < 2) {
    console.log("Привет")
    i++
};

let a = 1
while (a <= 5) {
    console.log(a)
    a++
};

let b = 7
while (b <= 22) {
    console.log(b)
    b++
};

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`)
};

n = 1000
num = 0
while (n > 50) {
    n = n / 2
    console.log(n)
    num++
}
console.log(`количество итераций: ${num}`);

let firstFri = 3

for (let i = firstFri; i <= 31; i = i + 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`)
}
