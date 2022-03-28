import React from 'react';
import s from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <button
      type="button"
      className={s.button}
      // disabled={btnAction}
      onClick={loadMore}
    >
      Load more
    </button>
  );
};
export default Button;
