import React, { Component } from 'react';
import style from './_searchbar.module.scss';

class Searchbar extends Component {
	state = {
		query: ''
	};

	handleChange = (event) => {
		this.setState({ query: event.currentTarget.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.query);

		this.setState({ query: '' });
	};

	render() {
		return (
			<header className={style.Searchbar}>
				<form onSubmit={this.handleSubmit} className={style.SearchForm}>
					<button type="submit" className={style.SearchForm_button}>
						<span className={style.SearchForm_button_label}>Search</span>
					</button>

					<input
						onChange={this.handleChange}
						className={style.SearchForm_input}
						type="text"
						value={this.state.query}
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
					/>
				</form>
			</header>
		);
	}
}

export default Searchbar;
