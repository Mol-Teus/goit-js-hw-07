function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо необхідні елементи
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Додаємо click на кнопки Create та Destroy
createBtn.addEventListener('click', () => {
  const amount = Number(input.value.trim());
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // очищення інпута
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

// Функція для створення колекції елементів
function createBoxes(amount) {
  destroyBoxes(); // очищаємо попередню колекцію перед створенням нової
  
  const fragment = document.createDocumentFragment();
  let size = 30; // Початковий розмір першого елемента

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = '10px'; // Відступ між блоками
    fragment.appendChild(box);
    size += 10; // Збільшення розміру наступного елемента на 10px
  }

  boxesContainer.appendChild(fragment); // Додавання всіх елементів за одну операцію
}

// Функція для очищення колекції
function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Видаляємо всі дочірні елементи
}