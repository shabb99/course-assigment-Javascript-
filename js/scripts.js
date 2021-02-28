async function getTvShows() {
	try {
		const response = await fetch('http://api.tvmaze.com/shows');
		const jsonResults = await response.json();
		const tvShowsArray = jsonResults;
		console.log(tvShowsArray);

		tvShowsArray.forEach(function (value) {
			document.querySelector('main').innerHTML += `
            <div class="card">
                <img src="${value.image.medium}" />
                <div class="card__body">
                    <h1>${value.name}</h1>
                    <a href="details.html?id=${value.id}">Read More</a>
                </div>
            </div>
        `;
		});
	} catch (error) {
		document.querySelector('.alert') += showAlertTouser(error, 'danger');
	} finally {
		setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 3000);
	}
}

getTvShows();