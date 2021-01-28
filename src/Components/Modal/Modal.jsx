import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './_modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	handleKeyDown = (event) => {
		if (event.code === 'Escape') {
			this.props.onClose();
		}
	};

	clickOverlay = (event) => {
		if (event.currentTarget === event.target) {
			this.props.onClose();
		}
	};

	render() {
		return createPortal(
			<div onClick={this.clickOverlay} className={style.Overlay}>
				<div className={style.Modal}>
					<img src={this.props.children} alt="" />
				</div>
			</div>,
			modalRoot
		);
	}
}

export default Modal;
