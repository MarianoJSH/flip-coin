document.addEventListener('DOMContentLoaded', () => {
    const coin = document.getElementById('coin');
    const randomButton = document.getElementById('randomButton');
    const resultDiv = document.getElementById('result');

    function flipCoin() {
        const isHeads = Math.random() < 0.5;

        // Remover clases de animación previas
        coin.classList.remove('flip-cara');
        coin.classList.remove('flip-cruz');

        // Forzar un reflow
        void coin.offsetWidth;

        if (isHeads) {
            coin.classList.add('flip-cara');
            resultDiv.textContent = "¡Heads!";
        } else {
            coin.classList.add('flip-cruz');
            resultDiv.textContent = "¡Tails!";
        }
    }

    // Event listeners
    coin.addEventListener('click', flipCoin);
    randomButton.addEventListener('click', flipCoin);

    // Mostrar la cara inicialmente (puedes cambiarlo a cruz si prefieres)
    coin.classList.add('flip-cara');
});