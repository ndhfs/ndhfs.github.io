// 1. Массив фильмов
let films = [
  { title: "Начало", genre: "фантастика", director: "Кристофер Нолан", year: 2010 },
  { title: "Зеленая миля", genre: "драма", director: "Фрэнк Дарабонт", year: 1999 },
  { title: "Матрица", genre: "фантастика", director: "Вачовски", year: 1999 },
  { title: "Интерстеллар", genre: "фантастика", director: "Кристофер Нолан", year: 2014 },
  { title: "1+1", genre: "драма", director: "Оливье Накаш", year: 2011 }
];

// 2. Сортировка по алфавиту
function renderFilmsAlphabetically(films) {
  return [...films].sort((a, b) => a.title.localeCompare(b.title));
}

// 3. Фильтрация по жанру
function filterByGenre(films, genre) {
  return films.filter(film => film.genre.toLowerCase() === genre.toLowerCase());
}

// 4. Фильтрация по году
function filterByYear(films, year) {
  return films.filter(film => film.year > year);
}

// 5. Фильтрация по режиссёру
function filterByDirector(films, director) {
  return films.filter(film => film.director.toLowerCase() === director.toLowerCase());
}

// 6. Добавление фильма через форму
document.getElementById("film-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const newFilm = {
    title: document.getElementById("title").value.trim(),
    genre: document.getElementById("genre").value.trim(),
    director: document.getElementById("director").value.trim(),
    year: parseInt(document.getElementById("year").value)
  };

  if (newFilm.title && newFilm.genre && newFilm.director && newFilm.year) {
    films.push(newFilm);
    renderFilms();
    this.reset();
  }
});

// 7. Отображение фильмов
function renderFilms(filmsToRender = films) {
  const tbody = document.querySelector("#film-table tbody");
  tbody.innerHTML = "";
  filmsToRender.forEach(film => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${film.title}</td>
          <td>${film.genre}</td>
          <td>${film.director}</td>
          <td>${film.year}</td>
        `;
    tbody.appendChild(row);
  });
}

(function() {
  // Протестируем функции
  console.log('renderFilmsAlphabetically', renderFilmsAlphabetically(films));
  console.log('filterByGenre', filterByGenre(films, 'драма'));
  console.log('filterByYear', filterByYear(films, 2010));
  console.log('filterByDirector', filterByDirector(films, 'Кристофер Нолан'));

  // Инициализация таблицы при загрузке
  renderFilms(films);
})()

