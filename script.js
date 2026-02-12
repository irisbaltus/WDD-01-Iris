document.startViewTransition(() => {
	filterItems();
	});

insertInfo()

async function insertInfo(){
	const baseURL = 'https://fdnd.directus.app/items';
	const moneEndpoint = '/person/291?fields=nickname';
	// const endpoint = '/person/291?fields=nickname,fav_music_genre.name';
	const moneUrl = baseURL + moneEndpoint

	let moneResponse = await fetch(moneUrl)
	console.log(moneResponse)

	let moneData = await moneResponse.json()
	console.log(moneData.data)	

	let nickname = moneData.data.nickname;

	let characterHTML =
		`<header>
			<h1> ${nickname}  </h1>    
		</header>`;

	document.body.insertAdjacentHTML("afterbegin", characterHTML)


	const countEndpoint = '/person?fields=name,fav_music_genre&filter[fav_music_genre][_nnull]=true&meta=filter_count';
	countUrl = baseURL + countEndpoint

	let countResponse = await fetch(countUrl);
	let countData = await countResponse.json();

	let total = countData.meta.filter_count;
	let randomOffset = Math.floor(Math.random() * (total - 5));
	
	console.log(countData.meta);

	const studentsEndpoint = `/person?fields=name,fav_music_genre&filter[fav_music_genre][_nnull]=true&limit=5&offset=${randomOffset}`;
	studentsUrl = baseURL + studentsEndpoint

	let studentsResponse = await fetch(studentsUrl);
	let studentsData = await studentsResponse.json();
	console.log(studentsData.data)

	const container = document.getElementById("students-container");

	studentsData.data.forEach(person => {
		container.insertAdjacentHTML("beforeend", 
			`<p>${person.name}: ${person.fav_music_genre}</p>`
		);	
	});
}

// chatGPT prompt: top alles werkt nu, dat wil ik zo houden. kan ik die p ook op andere andere plek in de html plaatsen dat die in een div of iets wordt geplaatst die al in de html staat of kan het alleen aan het begin of einde van de html?


// let studentsHTML = 
			

// 		document.body.insertAdjacentHTML("beforeend", studentsHTML)



