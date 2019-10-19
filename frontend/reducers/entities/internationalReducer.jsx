import { RECEIVE_INTERNATIONAL, CLEAR_INTERNATIONAL } from '../../actions/needsActions';
import { RECEIVE_USER } from '../../actions/sessionActions';
import { merge } from 'lodash';
const internationalReducer = (state = false , action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_INTERNATIONAL:
            return action.ele;
        case CLEAR_INTERNATIONAL:
            return false;
        // case RECEIVE_USER:
        //     return action.user.international;
        default:
            return state;
    }
};

export default internationalReducer;