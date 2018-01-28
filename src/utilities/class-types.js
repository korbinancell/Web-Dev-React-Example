import {
	fighterName,
	mageName,
	bardName,
	clericName,
} from './name-generator';

/*
* main stats are listed in order of importance
* higher the weight the more likely they are to be picked
*/

export const classTypes = [
	{
		name: 'warrior',
		displayName: 'Warrior',
		statA: 'strength',
		statD: 'dexterity',
		statH: 'constitution',
		statS: 'strength',
		mainStats: ['strength', 'constitution'],
		nameFunction: fighterName,
		weight: 15,
		baseCost: 50,
		costPerDay: 0.2,
		minimumPopularity: 0,
	},
	{
		name: 'mage',
		displayName: 'Mage',
		statA: 'intelligence',
		statD: 'dexterity',
		statH: 'constitution',
		statS: 'intelligence',
		mainStats: ['intelligence', 'dexterity'],
		nameFunction: mageName,
		weight: 1,
		baseCost: 100,
		costPerDay: 1,
		minimumPopularity: 8,
	},
	{
		name: 'bard',
		displayName: 'Bard',
		statA: 'dexterity',
		statD: 'dexterity',
		statH: 'constitution',
		statS: 'charisma',
		mainStats: ['charisma', 'dexterity'],
		nameFunction: bardName,
		weight: 3,
		baseCost: 70,
		costPerDay: 0.4,
		minimumPopularity: 7,
	},
	{
		name: 'cleric',
		displayName: 'Cleric',
		statA: 'strength',
		statD: 'dexterity',
		statH: 'constitution',
		statS: 'wisdom',
		mainStats: ['wisdom', 'dexterity', 'constitution'],
		nameFunction: clericName,
		weight: 5,
		baseCost: 60,
		costPerDay: 0.5,
		minimumPopularity: 5,
	},
];

export const numberOfClasses = classTypes.length;

const getRandomClass = (guildPopularity) => {
	const allowedClasses = classTypes.filter(value => value.minimumPopularity <= guildPopularity);
	const totalWeight = allowedClasses.reduce((counter, value) => counter + value.weight, 0);

	let randomWeight = Math.floor(Math.random() * totalWeight);
	for (const classType of allowedClasses) {
		randomWeight -= classType.weight;
		if (randomWeight <= 0) {
			return classType;
		}
	}

	console.error('Reached end of getRandomClass with no class selected');
	return classTypes[0];
};

export default getRandomClass;
