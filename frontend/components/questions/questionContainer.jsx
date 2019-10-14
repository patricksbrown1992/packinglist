import { connect } from 'react-redux';
import QuestionForm from './questionForm';
import { clearErrors, logout} from '../../actions/sessionActions';
import {receiveDay, receiveSwim, receiveBusiness, receiveInternational, receiveCold} from '../../actions/needsActions';

const msp = state => ({
    errors: state.errors,
    user: state.entities.user[state.session.id], 
});

const mdp = dispatch => ({

    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
    receiveDay: ele => dispatch(receiveDay(ele)),
    receiveSwim: ele => dispatch(receiveSwim(ele)),
    receiveBusiness: ele => dispatch(receiveBusiness(ele)),
    receiveInternational: ele => dispatch(receiveInternational(ele)),
    receiveCold: ele => dispatch(receiveCold(ele)),
});

export default connect(msp, mdp)(QuestionForm);