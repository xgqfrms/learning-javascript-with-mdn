// debounce
// 防抖，是指一个事件触发后在单位时间内，如果发生重复触发了同一事件，则取消上一次的事件，并重新计时⌛️
// 应用场景：实时搜索框，等待用户输入完成，才发送 ajax 请求；减少不必要的请求次数，提高性能

const log = console.log;

const debounce = (func, delay) => {
  return function(args) {
      const that = this;
      func.id && clearTimeout(func.id);
      func.id = setTimeout(() => {
        func.call(that, args);
      }, delay);
  };
};

const ajax = e => {
  const value = e.target.value || ``;
  console.log(`ajax value`, value);
  pre.insertAdjacentHTML(`beforeend`, `${value} \n`);
};

const input = document.querySelector(`[data-uid="input"]`);
const inputDebounce = document.querySelector(`[data-uid="inputDebounce"]`);
const pre = document.querySelector(`[data-uid="pre"]`);
const btn = document.querySelector(`[data-uid="btn"]`);

btn.addEventListener(`click`, () => {
  input.value = ``;
  inputDebounce.value = ``;
  pre.innerHTML = ``;
});

input.addEventListener(`input`, ajax);
inputDebounce.addEventListener(`input`, debounce(ajax, 500));


