const startDate = new Date('2023-10-12');

const currentDate = new Date();

const differenceInTime = currentDate - startDate;

const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

const daysElement = document.querySelector('h1.days');

if (daysElement) {
    daysElement.textContent = `${differenceInDays}.`;
}
