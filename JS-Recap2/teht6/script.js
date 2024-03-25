'use strict';

const num = prompt('Kuinka monta elokuvaa?');

const movies = [];

for (let i = 0; i < num; i++) {
  const title = prompt('Elokuvan nimi:');
  const rating = prompt('Elokuvan arvio 1-5?');

  const elokuva = {
    title: title,
    rating: rating,
  };
  movies.push(elokuva);
}
console.log(movies);

function sort(a, b) {
  return b.rating - a.rating;
}
movies.sort(sort);

const highestRate = movies[0];

const movieList = document.createElement('ul');
for (const movie of movies) {
  const listItem = document.createElement('li');
  listItem.textContent = `${movie.title} Rating: ${movie.rating}`;
  movieList.appendChild(listItem);
}

document.body.appendChild(movieList);

const highRate = document.createElement('p');
highRate.textContent = `Top Rated Movie: ${highestRate.title}
                        Rating: ${highestRate.rating}`;
document.body.appendChild(highRate);
