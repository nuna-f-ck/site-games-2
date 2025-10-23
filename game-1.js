
function comparNumbers() {
    let randomNum = Math.floor(Math.random() * 100 + 1)

    while (true) {
        let usersNum = Number(prompt('Привет! Программа загадала случайное число от 1 до 100, попробуйте угадать его'))

        if (randomNum > usersNum) {
            alert('Ваше число меньше загаданого, попробуйте еще раз')
        } else if (randomNum < usersNum) {
            alert('Ваше число больше загаданого, попробуйте еще раз')
        } else if (randomNum === usersNum) {
            alert('Вы угадали!')
            break
        } else {
            alert('Это неккоректное значение, введите число')
        }
    }
}
