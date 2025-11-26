import React from 'react';
import styles from '../styles.module.css';

const MovieItem = ({ movie, onToggle, onDelete }) => {
  return (
    <li className={styles.movieItem}>
      <div>
        <strong>{movie.title}</strong>
        {movie.year && <span> ({movie.year})</span>}
        <span className={styles.status}>
          {movie.status === 'want' ? '👀 Хочу посмотреть' : '✅ Посмотрено'}
        </span>
      </div>
      <div>
        <button
          onClick={() => onToggle(movie.id)}
          className={styles.toggleBtn}
        >
          {movie.status === 'want' ? 'Отметить как просмотренное' : 'Вернуть в "хочу посмотреть"'}
        </button>
        <button onClick={() => onDelete(movie.id)} className={styles.deleteBtn}>
          Удалить
        </button>
      </div>
    </li>
  );
};

export default MovieItem;