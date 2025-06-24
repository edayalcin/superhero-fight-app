const getHeroesBtn = document.getElementById('get-heroes');
const fightBtn = document.getElementById('fight-btn');
const container = document.getElementById('heroes-container');
const winnerText = document.getElementById('winner');

let selectedHeroes = [];

getHeroesBtn.addEventListener('click', async () => {
  const res = await fetch('/heroes.json');
  const heroes = await res.json();
  selectedHeroes = heroes.sort(() => 0.5 - Math.random()).slice(0, 2);

  renderHeroes();
  fightBtn.style.display = 'inline-block';
  winnerText.textContent = '';
});

fightBtn.addEventListener('click', () => {
  const winner = selectedHeroes[Math.floor(Math.random() * 2)];
  winnerText.textContent = `${winner.name} kazandı!`;
});

function renderHeroes() {
  container.innerHTML = '';
  selectedHeroes.forEach(hero => {
    const heroCard = document.createElement('div');
    heroCard.className = 'hero-card';
    heroCard.innerHTML = `
      <div class="hero-image-container">
        <img src="${hero.image}" alt="${hero.name}" />
      </div>
      <p>${hero.name}</p>
    `;
    container.appendChild(heroCard);
  });
}