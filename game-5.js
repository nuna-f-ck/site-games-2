function generateNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    let num = Math.floor(Math.random() * (max - min + 1)) + min
    return num
}

function randomEl() {
    const elOfGame = ["камень", "ножницы", "бумага"]
    let randomNum = generateNum(0, 2)
    return elOfGame[randomNum]
}

function comparAnswers(computersAnswer, usersAnswer) {
    let programAnswer
    let computersPoint = 0
    let usersPoint = 0

    if (computersAnswer === usersAnswer) {
        programAnswer = 'Выборы совпадают, это ничья.'
    }
    else if (computersAnswer === 'камень' && usersAnswer === 'ножницы') {
        programAnswer = 'Камень побеждает ножницы.'
        computersPoint = 1
    }
    else if (computersAnswer === 'ножницы' && usersAnswer === 'бумага') {
        programAnswer = 'Ножницы побеждают бумагу.'
        computersPoint = 1
    }
    else if (computersAnswer === 'бумага' && usersAnswer === 'камень') {
        programAnswer = 'Бумага побеждает камень.'
        computersPoint = 1
    }
    else if (usersAnswer === 'камень' && computersAnswer === 'ножницы') {
        programAnswer = 'Камень побеждает ножницы.'
        usersPoint = 1
    }
    else if (usersAnswer === 'ножницы' && computersAnswer === 'бумага') {
        programAnswer = 'Ножницы побеждают бумагу.'
        usersPoint = 1
    }
    else if (usersAnswer === 'бумага' && computersAnswer === 'камень') {
        programAnswer = 'Бумага побеждает камень.'
        usersPoint = 1
    }

    return [programAnswer, computersPoint, usersPoint]
}

function rPS() {
    let computersPoint = 0
    let usersPoint = 0

    alert('Сыграй в камень, ножницы, бумага с компьютером. Будет 3 раунда.')

    for (let i = 0; i < 3; i++) {
        let usersAnswer = prompt('Введите один из вариантов:\n"камень", "ножницы" или "бумага"')
        
        if (usersAnswer === null) {
            alert('Игра прервана')
            return
        }
        
        usersAnswer = usersAnswer.toLowerCase()
        
        if (!["камень", "ножницы", "бумага"].includes(usersAnswer)) {
            alert('Некорректный ввод, попробуйте еще раз.')
            i--
            continue
        }
        
        let computerAnswer = randomEl()
        let resultOfGame = comparAnswers(computerAnswer, usersAnswer)

        computersPoint = computersPoint + resultOfGame[1]
        usersPoint = usersPoint + resultOfGame[2]
        alert(`Компьютер показал ${computerAnswer}, а Ваш ответ - ${usersAnswer}\n${resultOfGame[0]}`)
    }

    alert(`Игра завершена.\nВаши очки: ${usersPoint}\nОчки компьютера: ${computersPoint}`)
    if (computersPoint > usersPoint) {
        alert('Компьютер победил')
    } else if (computersPoint < usersPoint) {
        alert('Вы победили')
    } else {
        alert('Ничья')
    }
}