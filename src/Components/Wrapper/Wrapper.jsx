import React from 'react';
import style from './_wrapper.module.scss';

const Wrapper = ({ children }) => {
	return <div className={style.wrapper}>{children}</div>;
};

export default Wrapper;
