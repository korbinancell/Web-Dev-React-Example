import React from 'react';
import PropTypes from 'prop-types';
import generateMercenaryArray from '../utilities/mercenary-generator';

import '../style/merc-generator.css';

class MercGenerator extends React.Component {
	static propTypes = {
		setMercArray: PropTypes.func.isRequired,
	};

	state = {
		mercNumber: '10',
		guildPopularity: '10',
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const { mercNumber, guildPopularity } = this.state;
		const mercArray = generateMercenaryArray(parseInt(mercNumber, 10), parseInt(guildPopularity, 10));
		this.props.setMercArray(mercArray);
	}

	render() {
		return (
			<div className="merc-generator_container">
				<form name="merc-generator_form" onSubmit={this.handleSubmit}>
					<label className="merc-generator_form_label" htmlFor="mercNumber">Number of Mercs &nbsp;
						<input
							type="text"
							className="merc-generator_form_input"
							name="mercNumber"
							value={this.state.mercNumber}
							onChange={this.handleChange}
						/>
					</label>
					<label className="merc-generator_form_label" htmlFor="guildPopularity">Guild Popularity &nbsp;
						<input
							type="text"
							className="merc-generator_form_input"
							name="guildPopularity"
							value={this.state.guildPopularity}
							onChange={this.handleChange}
						/>
					</label>

					<button className="merc-generator_form_submit">Generate</button>
				</form>
			</div>
		);
	}
}

export default MercGenerator;
