import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Dialog } from '@material-ui/core';
import useStyles from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faList } from '@fortawesome/free-solid-svg-icons';
import AddTodo from '../AddTodo';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../../store/action-creators';
import sampleData from '../../store/sampleData';

const Nav = () => {
	const [open, setOpen] = useState(false);

	const dispatch = useDispatch();
	const { addTodo, deleteAllTodos } = bindActionCreators(
		actionCreators,
		dispatch
	);

	const classes = useStyles();

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const populate = () => {
		sampleData.forEach((todo) => addTodo(todo));
	};

	return (
		<AppBar position="static" color="primary" elevation={2}>
			<Toolbar>
				<Typography type="title" variant="h4" style={{ flex: 1 }}>
					Todo App
				</Typography>
				<Button
					variant="contained"
					className={classes.deleteAllButton}
					onClick={deleteAllTodos}
				>
					<FontAwesomeIcon icon={faTimes} />
					<span className={classes.buttonText}>Delete all</span>
				</Button>
				<Button
					variant="contained"
					className={classes.populateButton}
					onClick={populate}
				>
					<FontAwesomeIcon icon={faList} />
					<span className={classes.buttonText}>Populate with sample data</span>
				</Button>
				<Button
					variant="contained"
					className={classes.addButton}
					onClick={handleOpen}
				>
					<FontAwesomeIcon icon={faPlus} />
					<span className={classes.buttonText}>Add Todo</span>
				</Button>
			</Toolbar>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<AddTodo handleClose={handleClose} addTodo={addTodo} />
			</Dialog>
		</AppBar>
	);
};

export default Nav;
