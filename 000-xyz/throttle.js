// throttle
// 节流，是指在单位时间内, 只会触发一次事件，如果事件触发后，又重复触发了同一事件，则忽略后面触发的事件，直到第一次事件的计时⌛️结束
// 应用场景：埋点???

const log = console.log;


const throttle = (func, delay) => {
    let flag = true;
    return function(args) {
        const that = this;
        if(flag) {
            flag = false;
            func.id = setTimeout(() => {
                func.call(that, args);
                clearTimeout(func.id);
                flag = true;
            }, delay);
        } else {
            // ignore
            console.log(`ignore event`);
        }
    };
};

const ajax = e => {
    const value = e.target.value || ``;
    console.log(`ajax value`, value);
    pre.insertAdjacentHTML(`beforeend`, `${value} \n`);
};

const input = document.querySelector(`[data-uid="input"]`);
const inputThrottle = document.querySelector(`[data-uid="inputThrottle"]`);
const pre = document.querySelector(`[data-uid="pre"]`);
const btn = document.querySelector(`[data-uid="btn"]`);

btn.addEventListener(`click`, () => {
    input.value = ``;
    inputThrottle.value = ``;
    pre.innerHTML = ``;
});

input.addEventListener(`input`, ajax);

inputThrottle.addEventListener(`input`, throttle(ajax, 3000));

