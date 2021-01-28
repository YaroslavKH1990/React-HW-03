import React from 'react';
import style from './_imageGallery.module.scss';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';

const ImageGallery = ({ data, onShowModal }) => {
	return (
		<ul className={style.ImageGallery}>
			{data.map(({ id, webformatURL, largeImageURL }) => (
				<ImageGalleryItem
					largeImageURL={largeImageURL}
					onOpenModal={onShowModal}
					key={id}
					url={webformatURL}
				/>
			))}
		</ul>
	);
};

export default ImageGallery;
