import React, { Component } from 'react';
import './App.css';
import ApiRequest from './api/request';
import Wrapper from './Components/Wrapper/Wrapper.jsx';
import Searchbar from './Components/Searchbar/Searchbar.jsx';
import ImageGallery from './Components/ImageGallery/ImageGallery.jsx';
import Button from './Components/Button/Button.jsx';
import Loader from './Components/Loader/Loader.jsx';
import Modal from './Components/Modal/Modal.jsx';

class App extends Component {
	state = {
		images: [],
		page: 1,
		searchQuery: '',
		isLoading: false,
		showModal: false,
		largeImg: ''
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchQuery !== this.state.searchQuery) {
			this.fetchImages();
		}
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth'
		});
	}

	openModal = (event) => {
		console.log(event);
		this.toggleModal(event);
	};

	open;

	toggleModal = (event) => {
		// console.log(event);
		this.setState(({ showModal }) => ({
			showModal: !showModal,
			largeImg: event
		}));
	};

	requestSubmit = (query) => {
		this.setState({ searchQuery: query, page: 1, images: [] });
	};

	fetchImages = () => {
		const { page, searchQuery } = this.state;

		this.setState({ isLoading: true });

		ApiRequest.requestImg(searchQuery, page)
			.then((response) => {
				this.setState((prevState) => ({
					page: prevState.page + 1,
					images: [...prevState.images, ...response]
				}));
			})
			.finally(() => this.setState({ isLoading: false }));
	};

	render() {
		const { images, isLoading, showModal, largeImg } = this.state;

		return (
			<Wrapper>
				<Searchbar onSubmit={this.requestSubmit} />
				{isLoading && <Loader />}
				<ImageGallery onShowModal={this.openModal} data={images} />
				{showModal && <Modal onClose={this.toggleModal}>{largeImg}</Modal>}
				{images.length > 0 && <Button fetchImages={this.fetchImages} />}
			</Wrapper>
		);
	}
}

export default App;
