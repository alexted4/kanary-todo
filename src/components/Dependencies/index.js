import { Button } from '@material-ui/core';

const Dependencies = ({ dependencies }) => {
	const style = { display: 'flex', flexWrap: 'wrap' };

	const getDependencies = () => {
		const result = [];
		for (let i = 0; i < dependencies.length; i++) {
			result.push(
				<Button key={i} disabled>
					{dependencies[i]}
				</Button>
			);
		}
		return result;
	};
	if (dependencies && dependencies.length > 0) {
		return <div className={style}>{getDependencies()}</div>;
	} else return null;
};

export default Dependencies;
