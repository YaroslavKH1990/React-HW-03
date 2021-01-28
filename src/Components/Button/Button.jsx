import React from 'react';
import style from './_button.module.scss';

const Button = ({ fetchImages }) => {
	return (
		<button onClick={fetchImages} className={style.btn} type="button">
			Load more
		</button>
	);
};

export default Button;
