
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getTvShows(tvId) {
	try {
		console.log(tvId);
		const response = await fetch('http://api.tvmaze.com/shows' + tvId);
		const jsonResults = await response.json();

		document.title = jsonResults.name;
		document.querySelector('h1').innerHTML = `${jsonResults.name}`;
		document.querySelector(
			'.image'
		).style.image.medium= `url('${jsonResults.image}')`;

		document.querySelector('.desc').innerHTML = jsonResults.description;
	} catch (error) {
		// document.querySelector('.alert').innerHTML += showAlertTouser(
		// 	error,
		// 	'danger'
		// );
	} finally {
		// setTimeout(function () {
		// 	document.querySelector('.alert').innerHTML = '';
		// }, 3000);
	}
}

getTvShows(id);
