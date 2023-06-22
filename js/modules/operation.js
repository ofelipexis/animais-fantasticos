export default function initOperation() {
    const operation = document.querySelector('[data-week]');
    const daysOfWeek = operation.dataset.week.split(',').map(Number);
    const timeOfOperation = operation.dataset.time.split(',').map(Number);

    const dateNow = new Date();
    const dayNow = dateNow.getDay();
    const timeNow = dateNow.getHours();

    const openDays = daysOfWeek.indexOf(dayNow) !== -1;
    const openTime = (timeNow >= timeOfOperation[0] && timeNow < timeOfOperation[1]);

    if (openDays && openTime) {
        operation.classList.add('open');
    }
}