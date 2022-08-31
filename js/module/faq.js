const hide = (elem, answer) => {
      if (!elem.classList.contains('faq__item--show') ||
        elem.classList.contains('collapsing')) return;

    answer.style.height = `${answer.offsetHeight}px`;
    answer.offsetHeight;
    answer.style.display = 'block';
    answer.style.height = 0;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height 300ms ease-in-out';
    elem.classList.remove('faq__item--show');
    elem.classList.add('collapsing');

    setTimeout(() => {
        answer.style.display = '';
        answer.style.height = '';
        answer.style.overflow = '';
        answer.style.transition = '';
        elem.classList.remove('collapsing');
    }, 300)

}

const show = (elem, answer) => {
        if (elem.classList.contains('faq__item--show') ||
        elem.collapsing) return;

    answer.style.display = 'block';
    const height = answer.offsetHeight;
    answer.style.height = 0;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height 300ms ease-in-out';
    answer.offsetHeight;
    answer.style.height = `${height}px`;
    elem.collapsing = true;

    setTimeout(() => {
        elem.classList.add('faq__item--show');
        answer.style.display = '';
        answer.style.height = '';
        answer.style.overflow = '';
        answer.style.transition = '';
        elem.collapsing = false;
    }, 300)
}


export const accordion = () => {
    const list = document.querySelector('.faq__list');
    const faqItems = document.querySelectorAll('.faq__item');

    list.addEventListener('click', e => {
        const button = e.target.closest('.faq__question');

        if (button) {
            const item = button.closest('.faq__item');

            faqItems.forEach((faqItem, i) => {
                const answer = faqItem.querySelector('.faq__answer');
                if (item === faqItem) {
                    faqItem.classList.contains('faq__item--show') ? hide(faqItem, answer) : show(faqItem, answer);
                } else {
                    hide(faqItem, answer);
                }
            })
        }
    })
}