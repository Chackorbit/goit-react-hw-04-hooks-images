import PropTypes from 'prop-types';
import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  id,
  tags,
  webformatURL,
  largeImageURL,
  openModal,
}) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        id={id}
        src={webformatURL}
        alt={tags}
        className={s.image}
        onClick={() => openModal(largeImageURL)}
      />
    </li>
  );
};
PropTypes.ImageGalleryItem = {
  id: PropTypes.number,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};
export default ImageGalleryItem;
