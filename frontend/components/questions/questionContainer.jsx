import { connect } from 'react-redux';
import QuestionForm from './questionForm';
import { clearErrors, logout, } from '../../actions/sessionActions';
import { updateHot, updateBusiness, updateCold, updateInternational, updateSwim, updateDay} from '../../actions/needsActions';



const msp = state => ({
    errors: state.errors,
    user: state.entities.user[state.session.id], 
});

const mdp = dispatch => ({

    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
    updateDay: user => dispatch(updateDay(user)),
    updateHot: user => dispatch(updateHot(user)),
    updateCold: user => dispatch(updateCold(user)),
    updateBusiness: user => dispatch(updateBusiness(user)),
    updateInternational: user => dispatch(updateInternational(user)),
    updateSwim: user => dispatch(updateSwim(user)),
});

export default connect(msp, mdp)(QuestionForm);