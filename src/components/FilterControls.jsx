import React from 'react';
import styles from '../styles.module.css';

const FilterControls = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.filter}>
      <label>
        <input
          type="radio"
          name="filter"
          checked={filter === 'all'}
          onChange={() => onFilterChange('all')}
        /> Все
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          checked={filter === 'want'}
          onChange={() => onFilterChange('want')}
        /> Хочу посмотреть
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          checked={filter === 'watched'}
          onChange={() => onFilterChange('watched')}
        /> Посмотрено
      </label>
    </div>
  );
};

export default FilterControls;