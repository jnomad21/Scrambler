const timer = document.getElementById('timer');
let timerInterval;

startTimer = () => {
    clearInterval(timerInterval);
    let second = 0;
    timerInterval = setInterval(function () {
        timer.innerHTML = (second < 10 ? '0' + second : second);
        second++;
}, 1000)
}