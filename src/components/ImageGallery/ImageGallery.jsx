import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ arrImg, openModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {arrImg.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};
PropTypes.ImageGallery = {
  arrImg: PropTypes.array,
  openModal: PropTypes.func,
};

export default ImageGallery;
