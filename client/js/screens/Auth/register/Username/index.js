import React, { useState, useEffect } from 'react';
import Username from './Username';
import { connect } from 'react-redux';
import { isExistingUsername } from '../../../../redux/actions/registerActions';

const index = ({ history, register, isExistingUsername }) => {
	const [username, setUsername] = useState('');
	const [errorText, setErrorText] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (register.username !== undefined) setUsername(register.username);
	}, []);

	_goToProfilePhoto = () => {
		setLoading(true);
		if (username === null || username === '' || username === undefined) {
			setErrorText('Username field is empty');
			setLoading(false);
			return false;
		}

		isExistingUsername(username).then(() => _redirect());
	};

	_redirect = () => {
		if (register.isUserExists === true) {
			setErrorText('Username already exists');
			setLoading(false);
			return false;
		} else {
			history.push({ pathname: 'register-photo' });
		}
	};

	return (
		<Username
			data={{ username }}
			routes={{ history, _goToProfilePhoto }}
			hooks={{ errorText, setErrorText, setUsername, loading }}
		/>
	);
};

const mapStateToProps = state => ({
	register: state.register
});

const mapDispatchToProps = {
	isExistingUsername
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
