import React, { useState, useEffect } from 'react';
import VerifyEmail from './VerifyEmail';
import { connect } from 'react-redux';
import {
	getConfirmUserCode,
	generateConfirmUserCode,
	verifyUser
} from '../../../../redux/actions/registerActions';

const index = ({
	location,
	history,
	getConfirmUserCode,
	register,
	generateConfirmUserCode,
	verifyUser
}) => {
	const [email, setEmail] = useState(location.state.email);
	const [code, setCode] = useState('');
	const [isValidCode, setIsValidCode] = useState(false);
	const [isResendingCode, setIsResendingCode] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setIsValidCode(false);
		generateConfirmUserCode(email).then(() =>
			getConfirmUserCode(email).then(() => setLoading(false))
		);
	}, [isResendingCode]);

	_handleCodeInput = _text => {
		if (_text === register.validationCode) {
			setIsValidCode(true);
		} else {
			setIsValidCode(false);
		}
	};

	_verify = () => {
		verifyUser(register.validationCode, email).then(() =>
			history.push('welcome')
		);
	};

	_resendCode = () => {
		setLoading(true);
		setIsResendingCode(!isResendingCode);
	};

	return (
		<VerifyEmail
			data={{ email, code }}
			hooks={{ setCode, isValidCode, loading }}
			helpers={{ _verify, _handleCodeInput, _resendCode }}
		/>
	);
};

const mapStateToProps = state => ({
	register: state.register
});

const mapDispatchToProps = {
	getConfirmUserCode,
	generateConfirmUserCode,
	verifyUser
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
