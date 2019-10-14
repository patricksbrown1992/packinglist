import { connect } from 'react-redux';
import NeedsForm from './needsForm';
import { clearErrors, logout } from '../../actions/sessionActions';
import {clearBusiness, clearCold, clearHot, clearInternational, clearSwim} from '../../actions/needsActions';

const msp = state => ({
    errors: state.errors,
    user: state.entities.user[state.session.id],
    days: state.entities.day,
    business: state.entities.business,
    cold: state.entities.cold,
    hot: state.entities.hot,
    international: state.entities.international,
    swim: state.entities.swim
    // needs: Object.values(state.entities.needs)
});

const mdp = dispatch => ({

    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
    clearBusiness: () => dispatch(clearBusiness()),
    clearHot: () => dispatch(clearHot()),
    clearCold: () => dispatch(clearCold()),
    clearInternational: () => dispatch(clearInternational()),
    clearSwim: () => dispatch(clearSwim())
});

export default connect(msp, mdp)(NeedsForm);