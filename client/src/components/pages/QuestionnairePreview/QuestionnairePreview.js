import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

class QuestionnairePreview extends Component {
	render() {
		return (
			<div>
				<aside style={{ padding: '3em 1em 1em 1em' }}>
					{this.props.description
						? this.props.description
						: 'Begin the questionnaire'}
				</aside>
				<button onClick={this.props.handleSuccessfulPage}>
					Continue
				</button>
			</div>
		)
	}
}

QuestionnairePreview.propTypes = {
	description: PropTypes.string,
}

export default QuestionnairePreview
