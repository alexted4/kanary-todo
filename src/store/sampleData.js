const DAY = 86400000;
const currentDate = new Date();
const tomorrow = new Date(currentDate.getTime() + DAY);

const array = [
	{
		id: 0,
		name: 'Do laundry',
		dueDate: tomorrow,
		timeToComplete: 15,
		dependencies: ['detergent'],
		excitement: 1,
	},
	{
		id: 1,
		name: 'Wash the dishes',
		dueDate: tomorrow,
		timeToComplete: 15,
		dependencies: ['fairy', 'sponge'],
		excitement: 2,
	},
	{
		id: 2,
		name: 'Take out the trash',
		dueDate: tomorrow,
		timeToComplete: 15,
		dependencies: [],
		excitement: 2,
	},
];

export default array;
