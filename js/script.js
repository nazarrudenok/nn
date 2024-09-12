// Дата початку (12 жовтня 2023 року)
const startDate = new Date('2023-10-12');

// Поточна дата
const currentDate = new Date();

// Обчислюємо загальну різницю в мілісекундах
let differenceInTime = currentDate - startDate;

// Обчислюємо кількість хвилин
const differenceInMinutes = Math.floor(differenceInTime / (1000 * 60));

// Обчислюємо кількість днів
const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

// Обчислюємо кількість років
const years = currentDate.getFullYear() - startDate.getFullYear();

// Обчислюємо кількість місяців
let months = currentDate.getMonth() - startDate.getMonth();
if (months < 0) {
    months += 12;
}

// Корекція років, якщо поточний місяць менший за місяць початку
if (currentDate.getMonth() < startDate.getMonth() || 
    (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())) {
    years--;
}

// Якщо кількість днів ще не повна для поточного місяця
let days = currentDate.getDate() - startDate.getDate();
if (days < 0) {
    const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    days += previousMonth.getDate();
}

// Шукаємо елемент з класом "days"
const daysElement = document.querySelector('h1.days');

// Вставляємо результат з нового рядка для кожної одиниці часу
if (daysElement) {
    daysElement.innerHTML = `
        ${years}<br>
        ${months}<br>
        ${days}<br>
        ${differenceInMinutes}.
    `;
}
