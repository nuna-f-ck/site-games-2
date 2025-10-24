function generateNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    let num = Math.floor(Math.random() * (max - min + 1)) + min

    return num
}

function simpleExercise() {
    signs = ['+', '-', '*', '/']
    sign = signs[generateNum(0, 3)]

    while (true) {
        let firstNum = generateNum(1, 10)
        let secondNum = generateNum(1, 10)
        let rightAnswer = Math.floor(eval(firstNum + sign + secondNum))

        usersAnswer = Number(prompt(`${firstNum} ${sign} ${secondNum}`))

        if (usersAnswer === rightAnswer) {
            alert('Правильно!')
            break
        } else if (usersAnswer != rightAnswer) {
            alert('Этот ответ неверный, попробуйте еще раз')
        } 
    }
}

function gameSimpleExercises() {
    alert('Привет, реши 3 простые арифметических задачи(округляй ответы до целого числа)')

    simpleExercise()
    simpleExercise()
    simpleExercise()

    alert('Молодец! Ты справился')
}
