export default function initNumbersAnimation() {
  function numberAnimationA() {
    const numbersEl = document.querySelectorAll("[data-numbers]");
    numbersEl.forEach((number) => {
      const totalValue = +number.innerText;
      let start = 0;
      const increment = Math.floor(totalValue / 100);
      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start > totalValue) {
          number.innerText = totalValue;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  numberAnimationA();

  function initAnimationB() {
    // animation for thousand(k) numbers
    const numberTh = document.querySelectorAll("[data-number-th]");
    numberTh.forEach((item) => {
      const totalValue = +item.innerText;
      let start = 0;
      const timer = setInterval(() => {
        start++;
        item.innerText = start;
        if (start > totalValue) {
          item.innerText = `${totalValue}k`;
          clearInterval(timer);
        }
      }, 50);
    });
  }
  initAnimationB();
}
