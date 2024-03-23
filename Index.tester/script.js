function createCards(data) {
    const container = document.getElementById('card-container');
  
    data.reverse().forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const title = document.createElement('div');
      title.innerHTML = `
        <h1>${item.title}</h1>
        <p>${item.description}</p>
      `;
      card.appendChild(title);
  
      container.appendChild(card);
    });
  }
  
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
    createCards(data);
});