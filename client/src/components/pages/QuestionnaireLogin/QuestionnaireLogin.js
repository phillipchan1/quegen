import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuestionnaireLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showError: false,
			userInputtedPassword: ''
		};
	}

	checkPassword() {
		if (this.state.userInputtedPassword === this.props.password) {
			this.props.handleSuccess(this.props.currentStopIndex);
		} else {
			this.setState({
				showError: true
			});
		}
	}

	handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.checkPassword();
		}
	}

	handleChange(e) {
		this.setState({
			userInputtedPassword: e.target.value
		});
	}

	render() {
		return (
			<div>
				<div>{this.state.showError && 'Incorrect Password'}</div>
				<div>Enter Password</div>
				<input
					type="text"
					onKeyPress={this.handleKeyPress.bind(this)}
					onChange={this.handleChange.bind(this)}
				/>
				<button onClick={this.checkPassword.bind(this)}>Enter</button>
			</div>
		);
	}
}

QuestionnaireLogin.propTypes = {
	handleSuccessfulPage: PropTypes.func,
	password: PropTypes.string,

	// informs questionnaire what page index this is on
	currentStopIndex: PropTypes.number
};

export default QuestionnaireLogin;
