// random name generators thanks to mattconsto. Using moddified code from https://github.com/mattconsto/fantasy-names (under MIT license)
// I feel liker there is a better way to do these. Don't know how though
// gender 0 = female/ 1 = male

import { fighterNames1, fighterNames2, fighterNames3, fighterNames4, mageNames1, mageNames2, mageNames3, mageNames4, mageNames5,
	mageNames6, mageNames7, mageNames8, mageNames9, bardNames1, bardNames2, bardNames3, bardNames4, bardNames5, bardNames6,
	bardNames7, bardNames8, bardNames9, bardNames10, bardNames11, bardNames12, bardNames13, bardNames14, clericNames1, clericNames2,
	clericNames3, clericNames4, clericNames5, clericNames6, clericNames7, clericNames8, clericNames9, clericNames10, clericNames11,
	clericNames12,
} from './names';

const toTitleCase = str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
const getRandomMember = nameArray => nameArray[Math.floor(Math.random() * nameArray.length)];

export const fighterName = (gender) => {
	const names = gender === 1 ? `${getRandomMember(fighterNames2)} ${getRandomMember(fighterNames4)}` :
		`${getRandomMember(fighterNames1)} ${getRandomMember(fighterNames3)}`;

	return toTitleCase(names);
};

export const mageName = (gender) => {
	const i = Math.floor(Math.random() * 10);
	let names;
	if (gender === 1) {
		if (i < 2) {
			names = `${getRandomMember(mageNames1)}${getRandomMember(mageNames2)}${getRandomMember(mageNames3)}` +
				`${getRandomMember(mageNames4)}${getRandomMember(mageNames3)}${getRandomMember(mageNames8)}`;
		} else if (i < 4) {
			names = `${getRandomMember(mageNames1)}${getRandomMember(mageNames2)}${getRandomMember(mageNames3)}${getRandomMember(mageNames8)}`;
		} else if (i < 6) {
			names = `${getRandomMember(mageNames1)}${getRandomMember(mageNames9)}${getRandomMember(mageNames3)}${getRandomMember(mageNames7)}` +
				`${getRandomMember(mageNames3)}${getRandomMember(mageNames8)}`;
		} else if (i < 8) {
			names = `${getRandomMember(mageNames1)}${getRandomMember(mageNames9)}${getRandomMember(mageNames3)}${getRandomMember(mageNames8)}`;
		} else {
			names = `${getRandomMember(mageNames3)}${getRandomMember(mageNames4)}${getRandomMember(mageNames8)}`;
		}
	} else {
		names = `${getRandomMember(mageNames1)}${getRandomMember(mageNames2)}${getRandomMember(mageNames3)}${getRandomMember(mageNames4)}` +
			`${getRandomMember(mageNames3)}${getRandomMember(mageNames5)}`;
		if (i < 4) {
			names = `${getRandomMember(mageNames1)}${getRandomMember(mageNames2)}${getRandomMember(mageNames3)}${getRandomMember(mageNames5)}`;
		} else if (i < 6) {
			names = `${getRandomMember(mageNames1)}${getRandomMember(mageNames6)}${getRandomMember(mageNames3)}${getRandomMember(mageNames7)}` +
				`${getRandomMember(mageNames5)}`;
		} else if (i < 8) {
			names = `${getRandomMember(mageNames1)}${getRandomMember(mageNames6)}${getRandomMember(mageNames3)}${getRandomMember(mageNames6)}`;
		} else {
			names = `${getRandomMember(mageNames3)}${getRandomMember(mageNames4)}${getRandomMember(mageNames5)}`;
		}
	}
	return toTitleCase(names);
};

export const bardName = (gender) => {	// halfling names
	const i = Math.floor(Math.random() * 10);
	let names;
	let nameLast;
	if (i % 3 === 0 && i % 2 !== 0) {
		nameLast = `${getRandomMember(bardNames9)}${getRandomMember(bardNames10)}${getRandomMember(bardNames11)}${getRandomMember(bardNames10)}` +
			`${getRandomMember(bardNames11)}${getRandomMember(bardNames10)}${getRandomMember(bardNames12)}`;
	} else if (i % 2 === 0) {
		nameLast = `${getRandomMember(bardNames13)}${getRandomMember(bardNames14)}`;
	} else {
		nameLast = `${getRandomMember(bardNames9)}${getRandomMember(bardNames10)}${getRandomMember(bardNames11)}${getRandomMember(bardNames10)}` +
			`${getRandomMember(bardNames12)}`;
	}
	if (gender === 1) {
		if (i < 5) {
			names = `${getRandomMember(bardNames5)}${getRandomMember(bardNames6)}${getRandomMember(bardNames7)}${getRandomMember(bardNames6)}` +
				`${getRandomMember(bardNames8)} ${nameLast}`;
		} else {
			names = `${getRandomMember(bardNames5)}${getRandomMember(bardNames6)}${getRandomMember(bardNames7)}${getRandomMember(bardNames6)}` +
				`${getRandomMember(bardNames7)}${getRandomMember(bardNames6)}${getRandomMember(bardNames8)} ${nameLast}`;
		}
	} else {
		if (i < 3) {
			names = `${getRandomMember(bardNames1)}${getRandomMember(bardNames2)}${getRandomMember(bardNames4)} ${nameLast}`;
		}
		if (i < 7) {
			names = `${getRandomMember(bardNames1)}${getRandomMember(bardNames2)}${getRandomMember(bardNames3)}${getRandomMember(bardNames2)}` +
				`${getRandomMember(bardNames4)} ${nameLast}`;
		} else {
			names = `${getRandomMember(bardNames1)}${getRandomMember(bardNames2)}${getRandomMember(bardNames3)}${getRandomMember(bardNames2)}` +
				`${getRandomMember(bardNames3)}${getRandomMember(bardNames2)}${getRandomMember(bardNames4)} ${nameLast}`;
		}
	}
	return toTitleCase(names);
};

export const clericName = (gender) => {	// aasimar names
	const i = Math.floor(Math.random() * 10);
	let names;
	let nameLast;
	if (i % 2 === 0) {
		nameLast = `${getRandomMember(clericNames9)}${getRandomMember(clericNames10)}${getRandomMember(clericNames11)}` +
			`${getRandomMember(clericNames10)}${getRandomMember(clericNames11)}${getRandomMember(clericNames10)}${getRandomMember(clericNames12)}`;
	} else {
		nameLast = `${getRandomMember(clericNames9)}${getRandomMember(clericNames10)}${getRandomMember(clericNames11)}` +
			`${getRandomMember(clericNames10)}${getRandomMember(clericNames12)}`;
	}
	if (gender === 1) {
		if (i < 6) {
			names = `${getRandomMember(clericNames5)}${getRandomMember(clericNames6)}${getRandomMember(clericNames7)}` +
				`${getRandomMember(clericNames6)}${getRandomMember(clericNames8)} ${nameLast}`;
		} else {
			names = `${getRandomMember(clericNames5)}${getRandomMember(clericNames6)}${getRandomMember(clericNames7)}` +
				`${getRandomMember(clericNames6)}${getRandomMember(clericNames7)}${getRandomMember(clericNames6)}` +
				`${getRandomMember(clericNames8)} ${nameLast}`;
		}
	} else {
		if (i < 7) {
			names = `${getRandomMember(clericNames1)}${getRandomMember(clericNames2)}${getRandomMember(clericNames3)}` +
				`${getRandomMember(clericNames2)}${getRandomMember(clericNames4)} ${nameLast}`;
		} else {
			names = `${getRandomMember(clericNames1)}${getRandomMember(clericNames2)}${getRandomMember(clericNames3)}` +
				`${getRandomMember(clericNames2)}${getRandomMember(clericNames3)}${getRandomMember(clericNames2)}` +
				`${getRandomMember(clericNames4)} ${nameLast}`;
		}
	}
	return toTitleCase(names);
};
