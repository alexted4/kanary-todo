const DAY = 86400000;
const HOUR = 3600000;
const TODAY = new Date();

const array = [
	{
		id: 1,
		name: 'Do laundry',
		dueDate: new Date(TODAY.getTime() + DAY * 7 + HOUR),
		timeToComplete: 15,
		dependencies: ['detergent'],
		excitement: 1,
	},
	{
		id: 2,
		name: 'Wash the dishes',
		dueDate: new Date(TODAY.getTime() + HOUR * 2),
		timeToComplete: 15,
		dependencies: ['fairy', 'sponge'],
		excitement: 2,
	},
	{
		id: 3,
		name: 'Take out the trash',
		dueDate: new Date(TODAY.getTime() + DAY + HOUR * 3),
		timeToComplete: 15,
		dependencies: [],
		excitement: 2,
	},
	{
		id: 4,
		name: 'Walk the dog',
		dueDate: new Date(TODAY.getTime() + HOUR * 4),
		timeToComplete: 30,
		dependencies: ['leash'],
		excitement: 3,
	},
	{
		id: 5,
		name: 'Clean the house',
		dueDate: new Date(TODAY.getTime() + DAY * 7 + HOUR * 5),
		timeToComplete: 160,
		dependencies: ['bleach', 'rags', 'mop'],
		excitement: 0,
	},
	{
		id: 6,
		name: 'Change the light bulb',
		dueDate: new Date(TODAY.getTime() + HOUR * 6),
		timeToComplete: 5,
		dependencies: ['light bulb'],
		excitement: 2,
	},
	{
		id: 7,
		name: 'Go to the store',
		dueDate: new Date(TODAY.getTime() + DAY * 7 + HOUR * 7),
		timeToComplete: 120,
		dependencies: ['money'],
		excitement: 3,
	},
	{
		id: 8,
		name: 'Study for an exam',
		dueDate: new Date(TODAY.getTime() + DAY * 31 + HOUR * 8),
		timeToComplete: 120,
		dependencies: [],
		excitement: 0,
	},
	{
		id: 9,
		name: 'Go to the dentist',
		dueDate: new Date(TODAY.getTime() + DAY * 31 + HOUR * 9),
		timeToComplete: 120,
		dependencies: [],
		excitement: 2,
	},
	{
		id: 10,
		name: 'Cook lunch',
		dueDate: new Date(TODAY.getTime() + DAY + HOUR * 10),
		timeToComplete: 60,
		dependencies: ['food'],
		excitement: 3,
	},
];

export default array;
