import Password from './Password';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { isValidPassword } from '../../../../redux/actions/registerActions';

const index = ({ history, location, isValidPassword, register }) => {
	const [password, setPassword] = useState('');
	const [errorPassword, setErrorPassword] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (register.password !== undefined) setPassword(register.password);
	}, []);

	_goToUsername = () => {
		if (password.length == 0) {
			setErrorPassword('Password field is empty');
			setLoading(false);
			return false;
		}

		setLoading(true);
		isValidPassword(password);
		history.push({ pathname: 'register-username' });
	};

	return (
		<Password
			data={{ password }}
			routes={{ history, _goToUsername }}
			hooks={{ errorPassword, setErrorPassword, setPassword, loading }}
		/>
	);
};

const mapStateToProps = state => ({
	register: state.register
});

const mapDispatchToProps = {
	isValidPassword
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
