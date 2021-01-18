const addMovieModalOut = document.querySelector('header button');
const modalView = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = modalView.querySelector('.btn--passive');
const userInputs = modalView.querySelectorAll('input');
const addMovieBtn = cancelAddMovieBtn.nextElementSibling;
const getSection = document.getElementById('entry-text');
const movies = [];

const clearSection = () => {
    if(movies.length > 0){
        getSection.style.display = 'none';
    }
}

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]);
}

const renderNewMovie = (id,title,image,ratingValue) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${image}" alt="${title}">
    </div>
    <div class="movie-elemet__info">
        <h2>${title}</h2>
        <p>${ratingValue}/5 stars</p>
    </div>
    `;

    newMovieElement.addEventListener('click',deleteMovie.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.appendChild(newMovieElement);
}

const backdropToggle = () => {
    backdrop.classList.toggle('visible');
}

const toggleMovieModal = () => {
    modalView.classList.toggle('visible');
    backdropToggle();
}

const backdropClickHandler = () => {
    toggleMovieModal();
}

const cancelAddMovie = () => {
    toggleMovieModal();
    clearMovieInput();
}

const clearMovieInput = () => {
    for(const usr of userInputs){
        usr.value = '';
    }
}

const addMovie = () => {
    const movieName = userInputs[0].value;
    const imageURL = userInputs[1].value;
    const rating = userInputs[2].value;

    if (movieName === '' || imageURL.trim() === '' || rating.trim() === ''){
        alert('Input Fields can not be empty');
        return;
    } else if(rating < 1 || rating > 5){
        alert('Yo can rate from 1 to 5 only');
        return;
    }

    const newMovies = {
        id: Math.random().toString(),
        title: movieName,
        image: imageURL,
        ratingValue: rating
    }
    movies.push(newMovies);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
    clearSection();
    renderNewMovie(newMovies.id, newMovies.title,newMovies.image,newMovies.ratingValue);
}

addMovieModalOut.addEventListener('click',toggleMovieModal);
backdrop.addEventListener('click',toggleMovieModal);
cancelAddMovieBtn.addEventListener('click',cancelAddMovie);
addMovieBtn.addEventListener('click',addMovie);
