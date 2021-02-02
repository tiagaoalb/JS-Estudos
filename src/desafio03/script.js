const getList = async () => {
  fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
      .then((response) => response.json())
      .then((data) => data.results)
      .then((data) =>
        data.map((i) => {
          return {
            id: i.id,
            title: i.title,
          };
        }),
      )
      .then((data) => data.filter((i) => i.title.includes('Intel')))
      .then((data) => {
        const el = document.getElementById('main');
        data.forEach((i) => {
          el.innerHTML += `<section> <span>${i.id}</span> <span>${i.title}</span> </section>`;
        });
      });
};

setTimeout(() => getList(), 1000);
