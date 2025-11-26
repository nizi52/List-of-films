import React, { useState } from 'react';
import styles from '../styles.module.css';

const MovieForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(title, year || null);
    setTitle('');
    setYear('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название фильма"
        className={styles.input}
        required
      />
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Год (необязательно)"
        className={styles.input}
        min="1888"
        max="2030"
      />
      <button type="submit" className={styles.button}>
        Добавить
      </button>
    </form>
  );
};

export default MovieForm;