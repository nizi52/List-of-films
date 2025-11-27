import React, { useState, useEffect } from 'react';
import MovieForm from './components/filmform.jsx';
import MovieItem from './components/filmItem.jsx';
import FilterControls from './components/FilterControls.jsx';
import styles from './styles.module.css';

const App = () => {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem('movies');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');

  // Загрузка из localStorage
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (title, year) => {
    if (!title.trim()) return;
    const newMovie = {
      id: Date.now(),
      title: title.trim(),
      year: year || null,
      status: 'want', // 'want' или 'watched'
    };
    setMovies([newMovie, ...movies]);
  };

  const toggleStatus = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, status: movie.status === 'want' ? 'watched' : 'want' }
          : movie
      )
    );
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const filteredMovies = movies.filter((movie) => {
    if (filter === 'want') return movie.status === 'want';
    if (filter === 'watched') return movie.status === 'watched';
    return true;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список фильмов</h1>
      <MovieForm onAdd={addMovie} />
      <FilterControls filter={filter} onFilterChange={setFilter} />
      <ul className={styles.list}>
        {filteredMovies.length === 0 ? (
          <p className={styles.empty}>Нет фильмов</p>
        ) : (
          filteredMovies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onToggle={toggleStatus}
              onDelete={deleteMovie}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default App;