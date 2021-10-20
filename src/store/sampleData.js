const DAY = 86400000;
const TODAY = new Date();
const TOMORROW = new Date(TODAY.getTime() + DAY);
const IN_A_WEEK = new Date(TODAY.getTime() + DAY * 7);
const IN_A_MONTH = new Date(TODAY.getTime() + DAY * 31);

const array = [
	{
		id: 1,
		name: 'Do laundry',
		dueDate: IN_A_WEEK,
		timeToComplete: 15,
		dependencies: ['detergent'],
		excitement: 1,
	},
	{
		id: 2,
		name: 'Wash the dishes',
		dueDate: TODAY,
		timeToComplete: 15,
		dependencies: ['fairy', 'sponge'],
		excitement: 2,
	},
	{
		id: 3,
		name: 'Take out the trash',
		dueDate: TOMORROW,
		timeToComplete: 15,
		dependencies: [],
		excitement: 2,
	},
	{
		id: 4,
		name: 'Walk the dog',
		dueDate: TODAY,
		timeToComplete: 30,
		dependencies: ['leash'],
		excitement: 3,
	},
	{
		id: 5,
		name: 'Clean the house',
		dueDate: IN_A_WEEK,
		timeToComplete: 160,
		dependencies: ['bleach', 'rags', 'mop'],
		excitement: 0,
	},
	{
		id: 6,
		name: 'Change the light bulb',
		dueDate: TODAY,
		timeToComplete: 5,
		dependencies: ['light bulb'],
		excitement: 2,
	},
	{
		id: 7,
		name: 'Go to the store',
		dueDate: IN_A_WEEK,
		timeToComplete: 120,
		dependencies: ['money'],
		excitement: 3,
	},
	{
		id: 8,
		name: 'Study for an exam',
		dueDate: IN_A_MONTH,
		timeToComplete: 120,
		dependencies: [],
		excitement: 0,
	},
	{
		id: 9,
		name: 'Go to the dentist',
		dueDate: IN_A_MONTH,
		timeToComplete: 120,
		dependencies: [],
		excitement: 2,
	},
	{
		id: 10,
		name: 'Cook lunch',
		dueDate: TOMORROW,
		timeToComplete: 60,
		dependencies: ['food'],
		excitement: 3,
	},
];

export default array;
