import Loader from 'react-loader-spinner';
import style from './_loader.module.scss';
import React from 'react';

export default class App extends React.Component {
	render() {
		return (
			<div className={style.loader}>
				<Loader
					type="ThreeDots"
					color="#00BFFF"
					height={100}
					width={100}
					timeout={3000}
				/>
			</div>
		);
	}
}
