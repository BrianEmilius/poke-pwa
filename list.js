(async function() {
	const pokelist = document.querySelector('.pokelist');

	try {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
		const data = await response.json();

		data.results.forEach(pokemon => {
			const listItem = document.createElement('li');
			listItem.classList.add('pokemon');
			listItem.innerHTML = `<a href="/details.html?name=${pokemon.name}">${pokemon.name}</a>`;
			pokelist.appendChild(listItem);
		});
	} catch (error) {
		console.error(error);
		pokelist.innerHTML = '<li>Couldn\'t load the list of pokemon</li>';
	}
})()
