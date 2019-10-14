import { connect } from 'react-redux';
import NeedsForm from './needsForm';
import { clearErrors, logout } from '../../actions/sessionActions';

const msp = state => ({
    errors: state.errors,
    user: state.entities.user[state.session.id],
    needs: Object.values(state.entities.needs)
});

const mdp = dispatch => ({

    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(NeedsForm);