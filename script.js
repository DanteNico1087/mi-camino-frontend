document.addEventListener('DOMContentLoaded', function () {
    // Muestra mensaje de saludo inicial
    const greetingMessage = document.getElementById('greeting-message');
    setTimeout(() => {
        greetingMessage.classList.remove('hidden');
        setTimeout(() => {
            greetingMessage.classList.add('hidden');
        }, 3000); 
    }, 1000); 
});
