const pokelist = document.querySelector('.pokelist')

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
	.then(response => response.json())
	.then(data => {
		data.results.forEach(pokemon => {
			const listItem = document.createElement('li')
			listItem.classList.add('pokemon')
			listItem.innerHTML = `<a href="/details.html?name=${pokemon.name}">${pokemon.name}</a>`
			pokelist.appendChild(listItem)
		})
	})
