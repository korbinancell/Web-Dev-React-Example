// returns array with amount specified amount of random characters
import { rnorm } from 'randgen';
import shortid from 'shortid';
import getRandomClass from './class-types';

const startingSd = 4;
const mercLevelSd = 4;
const statArray = ['strength', 'constitution', 'dexterity', 'intelligence', 'wisdom', 'charisma'];

const getRandomInt = (max = 2) => Math.floor(Math.random() * max);

const getNormDistInt = (mean = 0, sd = 1) => Math.floor(Math.abs(rnorm(mean, sd)));

const generateMercenaryArray = (mercNumber, guildPopularity) => {
	const mercList = [];
	for (let index = 0; index < mercNumber; index++) {
		const gender = getRandomInt();
		const classType = getRandomClass(guildPopularity);
		let level = Math.min(getNormDistInt(0, mercLevelSd), 10);
		level = level < 1 ? 1 : level;

		const newMerc = {
			id: shortid.generate(),
			classType,
			class: classType.name,
			gender,
			level,
			name: classType.nameFunction(gender),
		};

		newMerc[classType.mainStats[0]] = Math.min(10 + getNormDistInt(0, startingSd + level) + Math.floor(level / 2), 20);
		for (let q = 1; q < classType.mainStats.length; q++) {
			newMerc[classType.mainStats[q]] = Math.min(8 + getNormDistInt(0, startingSd + level), Math.min(10 + (level * 2), 20));
		}
		statArray.forEach((stat) => {
			if (!classType.mainStats.includes(stat)) {
				newMerc[stat] = Math.min(8 + getNormDistInt(0, startingSd + Math.floor(level / 3)), 10 + Math.floor(level / 2));
			}
		});

		mercList.push(newMerc);
	}

	return mercList;
};

export default generateMercenaryArray;
