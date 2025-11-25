function generateNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    let num = Math.floor(Math.random() * (max - min + 1)) + min
    return num
}

function randomColor() {
    const colors = ['#090941', '#2b0941', '#202027', '#314935', '#493148', '#314749'];
    let randomColor = generateNum(0, 5);
    return colors[randomColor];
};

function changingRandomColor() {
    alert('Сейчас появится кнопка, которая меняет цвет фона');
    const buttonChangeColor = document.createElement('button');
    buttonChangeColor.textContent = 'Изменить цвет фона';
    buttonChangeColor.classList.add('button_random_color');
    
    const miniGamesSection = document.querySelector('.mini-games');
    miniGamesSection.appendChild(buttonChangeColor);
    buttonChangeColor.style.cssText = `
        font-family: Montserrat;
        height: 55px;
        box-sizing: border-box;
        border: 1px solid #202027;
        border-radius: 60px;
        background-color: #FFFFFF;
        border-width: 1px;
        padding-top: 16px;
        padding-right: 28px;
        padding-bottom: 16px;
        padding-left: 28px;
        font-size: 16px;
        font-weight: 600;
        line-height: 141.69%;
        text-align: center;
        color: #202027;
        cursor: pointer;
    `;

    buttonChangeColor.addEventListener('click', () => {
        const colorCurrent = randomColor()
        const background = document.querySelector('.about-games');
        background.style.cssText = `background-color: ${colorCurrent}`;
        const backgroundSecond = document.querySelector('.mini-games');
        backgroundSecond.style.cssText = `background-color: ${colorCurrent}`;
        const backgroundMobileVersion = document.querySelector('.mobile-games');
        backgroundMobileVersion.style.cssText = `background-color: ${colorCurrent}`;
    });
};

function changingRandomColorMobileVersion() {
    alert('Сейчас появится кнопка, которая меняет цвет фона');
    const buttonChangeColor = document.createElement('button');
    buttonChangeColor.textContent = 'Изменить цвет фона';
    buttonChangeColor.classList.add('button_random_color');
    
    const miniGamesSection = document.querySelector('.mobile-games');
    miniGamesSection.appendChild(buttonChangeColor);
    buttonChangeColor.style.cssText = `
        font-family: Montserrat;
        height: 55px;
        box-sizing: border-box;
        border: 1px solid #202027;
        border-radius: 60px;
        background-color: #FFFFFF;
        border-width: 1px;
        padding-top: 16px;
        padding-right: 28px;
        padding-bottom: 16px;
        padding-left: 28px;
        font-size: 16px;
        font-weight: 600;
        line-height: 141.69%;
        text-align: center;
        color: #202027;
        cursor: pointer;
    `;

    buttonChangeColor.addEventListener('click', () => {
        const colorCurrent = randomColor()
        const background = document.querySelector('.about-games');
        background.style.cssText = `background-color: ${colorCurrent}`;
        const backgroundSecond = document.querySelector('.mini-games');
        backgroundSecond.style.cssText = `background-color: ${colorCurrent}`;
        const backgroundMobileVersion = document.querySelector('.mobile-games');
        backgroundMobileVersion.style.cssText = `background-color: ${colorCurrent}`;
    });
};

