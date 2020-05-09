import React from 'react';
import $ from 'jquery';

import {
	Header,
	Home,
	About,
	Resume,
	Portfolio,
	Contact,
	Footer
} from './components';
import './app.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			header: ["Home", "About", "Resume", "Portfolio", "Contact"]
		};
	}

	getData() {
		$.ajax({
			url: '/data.json',
			dataType: 'json',
			cache: false,
			success: data => {
				this.setState({ data: data });
			},
			error: (xhr, status, err) => {
				alert(err);
			}
		});
	}

	componentDidMount() {
		this.getData();
	}

	// Language selector click handler

	render() {
		return (
			<div>
				{/* <Header data={this.state.header} /> */}
				<Home data={this.state.data.home} networks={this.state.data.networks} />
				<About data={this.state.data.main} />
				<Resume data={this.state.data.resume} />
				<Portfolio data={this.state.data.portfolio} />
				<Contact data={this.state.data.main} />
				<Footer data={this.state.data.main} />
			</div>
		);
	}
}


export default App;
