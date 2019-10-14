import { connect } from 'react-redux';
import QuestionForm from './questionForm';
import { clearErrors, logout } from '../../actions/sessionActions';

const msp = state => ({
    errors: state.errors,
    user: state.entities.user[state.session.id], 
});

const mdp = dispatch => ({

    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(QuestionForm);