// Елементи input і span
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Подія input
nameInput.addEventListener('input', () => {
  // Очищаємо значення від пробілів по краях
  const trimmedValue = nameInput.value.trim();
  
  // Перевірка інпута  , інакше значення "Anonymous"
  nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});
