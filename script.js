const counter = document.getElementById('counter');
let count = 0;


document.getElementById('increment').addEventListener('click', function() {
    count++;
    counter.textContent = count;
});


document.getElementById('decrement').addEventListener('click', function() {
    count--;
    counter.textContent = count;
});


