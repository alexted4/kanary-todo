import { Box, CircularProgress } from '@material-ui/core';
const Loading = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<CircularProgress />
		</Box>
	);
};

export default Loading;
