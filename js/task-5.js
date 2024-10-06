function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримання елемента кнопки, тега body і спана з класом color 
const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

 
changeColorBtn.addEventListener('click', () => {
  // Генерація випадкового кольору
  const randomColor = getRandomHexColor();
  
  // Зміна кольору фону body
  body.style.backgroundColor = randomColor;
  
  // Виводимо значення кольору в спан
  colorSpan.textContent = randomColor;
});