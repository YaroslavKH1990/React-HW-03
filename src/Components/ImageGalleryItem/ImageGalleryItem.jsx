import React from 'react';
import style from './_imageGalleryItem.module.scss';

const ImageGalleryItem = ({ url, onOpenModal, largeImageURL }) => {
	return (
		<li className={style.ImageGalleryItem}>
			<img
				onClick={() => onOpenModal(largeImageURL)}
				src={url}
				alt=""
				className={style.ImageGalleryItem_image}
			/>
		</li>
	);
};

export default ImageGalleryItem;
