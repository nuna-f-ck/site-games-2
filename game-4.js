function quizGameFunc() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    alert('Давай поиграем в викторину. Ответь на 3 вопроса (Вводи номер правильного ответа)');
    
    let correctCount = 0

    for (let i = 0; i < 3; i++) {
        let questionText = quiz[i].question;
        let optionsText = quiz[i].options.join('\n')
        
        let usersAnswer = prompt(`${questionText}\nВарианты ответа:\n${optionsText}`);
        
        if (Number(usersAnswer) === quiz[i].correctAnswer) {
            alert('Верно')
            correctCount++;
        } else {
            alert('Неверно')
        }
    }

    alert(`Молодец, ты ответил правильно на ${correctCount} из 3 вопросов`);
}
