import {connect} from 'react-redux';
import CommentsForm from './CommentsForm';
import { addComment } from './actions';

const mapDispatchToProps = dispatch => ({
	addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(CommentsForm);