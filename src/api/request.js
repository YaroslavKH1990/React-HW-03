import axios from 'axios';

const API_KEY = '19983079-0a142a69d503edc96e1843c75';

const requestImg = (query = '', page = 1, per_page = 12) => {
	return axios
		.get(
			`https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&images_type=photo&orientation=horizontal&per_page=${per_page}`
		)
		.then((response) => response.data.hits);
};

export default { requestImg };
