import React from 'react';
import PropTypes from 'prop-types';

import '../style/merc-card.css';

const MercCard = (props) => {
	const {
		name,
		class: charClass,
		level,
		gender,
		strength,
		dexterity,
		constitution,
		wisdom,
		intelligence,
		charisma,
	} = props;

	return (
		<div className="merc-card_container">
			<h1 className="merc-card_header">{name}</h1>

			<div className="merc-card_row-1">
				<span className="merc-card_row-1_item">{`Class: ${charClass}`}</span>
				<span className="merc-card_row-1_item">{`Level: ${level}`}</span>
				<span className="merc-card_row-1_item">{`Gender: ${gender === 0 ? 'female' : 'male'}`}</span>
			</div>

			<div className="merc-card_row-2">
				<div className="merc-card_row-2_item">
					<span className="merc-card_row-2_item-line">Strength</span>
					<span className="merc-card_row-2_item-line">{strength}</span>
				</div>
				<div className="merc-card_row-2_item">
					<span className="merc-card_row-2_item-line">Dexterity</span>
					<span className="merc-card_row-2_item-line">{dexterity}</span>
				</div>
				<div className="merc-card_row-2_item">
					<span className="merc-card_row-2_item-line">Constitution</span>
					<span className="merc-card_row-2_item-line">{constitution}</span>
				</div>
				<div className="merc-card_row-2_item">
					<span className="merc-card_row-2_item-line">Intelligence</span>
					<span className="merc-card_row-2_item-line">{intelligence}</span>
				</div>
				<div className="merc-card_row-2_item">
					<span className="merc-card_row-2_item-line">Wisdom</span>
					<span className="merc-card_row-2_item-line">{wisdom}</span>
				</div>
				<div className="merc-card_row-2_item">
					<span className="merc-card_row-2_item-line">Charisma</span>
					<span className="merc-card_row-2_item-line">{charisma}</span>
				</div>
			</div>
		</div>
	);
};

MercCard.propTypes = {
	name: PropTypes.string.isRequired,
	class: PropTypes.string.isRequired,
	level: PropTypes.number.isRequired,
	gender: PropTypes.number.isRequired,
	strength: PropTypes.number.isRequired,
	dexterity: PropTypes.number.isRequired,
	constitution: PropTypes.number.isRequired,
	wisdom: PropTypes.number.isRequired,
	intelligence: PropTypes.number.isRequired,
	charisma: PropTypes.number.isRequired,
};

export default MercCard;
