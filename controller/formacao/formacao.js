const container = document.querySelector('.container');


for (let i = 1; i <= 20; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = `Cartão ${i}`;
    container.appendChild(card);
}
