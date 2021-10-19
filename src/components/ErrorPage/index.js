import { Link } from 'react-router-dom';

const style = {
	color: '#fff',
	marginLeft: 'auto',
	marginRight: 'auto',
	marginTop: '30px',
	textAlign: 'center',
};

const ErrorPage = ({ errorCode }) => {
	const getError = () => {
		switch (errorCode) {
			case 404: {
				return 'Error 404: Not Found';
			}
			default: {
				return 'Unknown Error';
			}
		}
	};

	return (
		<div style={style}>
			<h1>{getError()}</h1>
			<Link style={{ color: '#aaa' }} to="/">
				Return to homepage
			</Link>
		</div>
	);
};

export default ErrorPage;
