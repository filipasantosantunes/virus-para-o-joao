document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const heartBox = document.getElementById('heartBox');
    const responseContainer = document.getElementById('responseContainer');
    const confettiContainer = document.getElementById('confettiContainer');

    yesButton.addEventListener('click', () => {
        heartBox.classList.add('hidden'); // Esconde a caixa com o botão
        responseContainer.classList.remove('hidden'); // Mostra a mensagem de resposta
        triggerConfetti(); // Ativa a chuva de confettis
    });

    function triggerConfetti() {
        const colors = ['#ff99cc', '#ffb3e6', '#ffcccc', '#ccffcc', '#ffff99']; // Tons de rosa, verde e amarelo
        const shapes = ['circle', 'square'];

        for (let i = 0; i < 100; i++) { // Cria 100 pedacinhos de confetti
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            // Posição inicial aleatória no topo
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duração da animação entre 2 e 5 segundos
            confetti.style.animationDelay = Math.random() * 0.5 + 's'; // Pequeno atraso para parecer mais natural
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Tamanho aleatório
            const size = Math.random() * 10 + 5; // Entre 5 e 15px
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';

            // Forma aleatória (círculo ou quadrado)
            if (shapes[Math.floor(Math.random() * shapes.length)] === 'square') {
                confetti.style.borderRadius = '0';
            } else {
                confetti.style.borderRadius = '50%';
            }

            confettiContainer.appendChild(confetti);

            // Remove o confetti após a animação para limpar o DOM
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }
});