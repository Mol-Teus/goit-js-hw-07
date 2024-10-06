// Отримуємо всі елементи з класом 'item'
const categories = document.querySelectorAll('#categories .item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Для кожного елемента категорії виконуємо цикл
categories.forEach(category => {
  // Знаходимо заголовок категорії (тег <h2>)
  const categoryName = category.querySelector('h2').textContent;
  
  // Знаходимо кількість елементів у категорії 
  const elementsCount = category.querySelectorAll('ul li').length;
  
  // Виводимо назву категорії та кількість елементів 
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
