const heroBtn = document.querySelector('.hero__btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');


overlay.style.transitionDuration = '.3s';

heroBtn.addEventListener('click', () => {
    overlay.classList.add('overlay-open');
    modal.classList.add('modal-open');
});

overlay.addEventListener('click', (e) => {
    const target = event.target;
    if (target === overlay || target.closest('.modal__close')) {
        overlay.classList.remove('overlay-open');
        modal.classList.remove('modal-open');
    }
});


const form = document.querySelector('form');
const modalTitle = document.querySelector('.modal__title');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        name: form.name.value,
        surname: form.surname.value,
        tel: form.tel.value,
    };

    fetch('https://api-form-order.herokuapp.com/api/order', {
            method: 'post',
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
        .then((person) => {
            modalTitle.textContent = `${person.name}, ваша заявка успешно отправлена, номер: ${person.id}`;
            form.remove();

            setTimeout(() => {
                overlay.classList.remove('overlay-open');
                modal.classList.remove('modal-open');
            }, 3000);
        });
});