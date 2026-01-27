function reverseText() {
    alert('Введи текст, а программа его перевернет')

    usersText = prompt()
    usersText = usersText.split('').reverse().join('')

    alert(usersText)
}