import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.notFoundTitle}>404</h1>
      <p className={styles.notFoundText}>Oops! The page you requested could not be found.</p>
      <Link to='/' className={styles.notFoundLink}>
        Go back to the homepage
      </Link>
    </div>
  );
};
