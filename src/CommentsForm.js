import React from 'react';

class CommentsForm extends React.Component {
	constructor() {
		super();
		this.state = {value: ''};
	}
	handleChange(e) {
		let value = e.target.value;
		this.setState({
			value: value
		})
	}
	handleSubmit(e) {
		e.preventDefault();
		if(this.state.value) {
			let text = this.state.value;
			this.props.addComment(text);
			this.setState({
				value: ''
			});
		}
	}
	render() {
		return(
			<form onSubmit={(e) => this.handleSubmit(e)}>
				<input type="text" name="Comment" placeholder="Comment" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default CommentsForm;