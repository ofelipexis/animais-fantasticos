export default function initAnimateNumbers() {
    function animateNumbers() {
        const numbers = document.querySelectorAll('[data-number]');
        
        numbers.forEach((number) => {
            const total = +number.innerText;
            const increment = Math.floor(total / 100);

            let start = 0;
            const timer = setInterval(() => {
                start += increment;
                number.innerText = start;
                if (start > total) {
                    number.innerText = total;
                    clearInterval(timer);
                }
            }, 25 * Math.random());
        });
    }

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animateNumbers();
        }
    }

    const observerTarget = document.querySelector('.numbers');
    const observer = new MutationObserver(handleMutation);

    observer.observe(observerTarget, {attributes: true});
}
