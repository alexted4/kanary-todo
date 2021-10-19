import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Dialog } from '@material-ui/core';
import useStyles from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddTodo from '../AddTodo';

const Nav = () => {
	const [open, setOpen] = useState(false);

	const classes = useStyles();

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<AppBar position="static" color="primary" elevation={2}>
			<Toolbar>
				<Typography type="title" variant="h4" style={{ flex: 1 }}>
					Todo App
				</Typography>
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
				<AddTodo handleClose={handleClose} />
			</Dialog>
		</AppBar>
	);
};

export default Nav;
