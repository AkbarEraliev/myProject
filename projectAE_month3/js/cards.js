const cardsList = document.querySelector('.cards-list');

const fetchData = async () => {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data.slice(0, 18);
   } catch (error) {
      console.log(error);
   }
};

const createCards = async () => {
   try {
      const information = await fetchData();
      if (!information) return;

      information.forEach(tanks => {
            const cards = document.createElement('div');
            cards.classList.add('cards');

            const {title, body} = tanks;

            cards.innerHTML = `
               <img src="https://img.goodfon.ru/original/1920x1080/8/b0/world-of-tanks-e100-e-100.jpg" alt="Tank"/>
               <h2>${title}</h2>
               <h4>${body}</h4>
            `;
            cardsList.append(cards);
      });
   } catch (error) {
      console.log(error);
   }
};

createCards();