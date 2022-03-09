const API_LINK = "https://api.adviceslip.com/advice";
const adviceNumberSpan = document.querySelector('.advice-generator__advice-number')
const adviceQuoteSlot= document.querySelector('.advice-generator__quote')
const fetchBtn = document.querySelector('button.advice-generator__btn')

const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK);
    const advice = await response.json();
    return advice
};

const renderAdvice = (adviceObj) => {
    const {id, advice} = adviceObj;
    adviceNumberSpan.textContent = `ADVICE #${id}`;
    adviceQuoteSlot.textContent = advice;
};

const generateNewAdvice = async () => {
    const data = await fetchNewAdvice()
    const advice = data.slip;
    renderAdvice(advice);
};

window.addEventListener('DOMContentLoaded', () => {
    fetchBtn.addEventListener('click', generateNewAdvice)
})