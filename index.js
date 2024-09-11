// script.js
document.addEventListener('mousemove', (event) => {
    const tracker = document.getElementById('x');
    tracker.textContent = `X: ${event.clientX}`;

    const tracker2 = document.getElementById('y');
    tracker2.textContent = `Y: ${event.clientY}`;
});

