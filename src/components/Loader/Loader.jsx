import React from 'react';
import s from './Loader.module.css';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Oval color="#00BFFF" height={100} width={110} />
    </div>
  );
};

export default Loader;
