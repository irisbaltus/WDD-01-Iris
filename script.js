document.startViewTransition(() => {
	filterItems();
	});

insertHeaderInfo()

async function insertHeaderInfo(){
	const url = "https://fdnd.directus.app/items/person/291";



let response = await fetch(url)
	console.log(response)

let headerNaam = await response.json()
	console.log(headerNaam)

let moneStudio = headerNaam.data

	let characterHTML =
	`<header>
		<h1> ${moneStudio.nickname}  </h1>    
    </header>`

document.body.insertAdjacentHTML("afterbegin", characterHTML)
}