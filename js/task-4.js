// Отримуємо елемент форми
const form = document.querySelector('.login-form');

// Додаємо обробник події submit
form.addEventListener('submit', event => {
  // Запобігаємо перезавантаженню сторінки
  event.preventDefault();
  
  // Отримуємо значення елементів форми через form.elements
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // Перевірка, заповнення полів
  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  // Створення об'єкта з даними
  const formData = {
    email: email,
    password: password,
  };

  // Виводення об'єкта у консоль
  console.log(formData);

  // Очищення форми
  form.reset();
});

