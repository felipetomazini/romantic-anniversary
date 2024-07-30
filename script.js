document.getElementById('specialMessageButton').addEventListener('click', function() {
    window.location.href = 'special_message.html';
});

document.addEventListener('DOMContentLoaded', () => {
    const message = document.querySelector('.message');
    const specialMessageButton = document.getElementById('specialMessageButton');
    const specialMessage = document.getElementById('specialMessage');
    const messages = [
        "Te amo mais a cada dia!",
        "Você é meu tudo!",
        "Feliz 1 ano de amor!",
        "Para sempre nós dois!",
        "Cada momento com você é mágico!"
    ];

    let currentMessageIndex = 0;

    setInterval(() => {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        message.textContent = messages[currentMessageIndex];
    }, 2000);

    specialMessageButton.addEventListener('click', () => {
        specialMessage.classList.toggle('hidden');
    });
});