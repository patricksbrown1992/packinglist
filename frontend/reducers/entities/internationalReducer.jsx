import { RECEIVE_INTERNATIONAL, CLEAR_INTERNATIONAL } from '../../actions/needsActions';
import { merge } from 'lodash';
const internationalReducer = (state = false , action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_INTERNATIONAL:
            return action.ele;
        case CLEAR_INTERNATIONAL:
            return false;
        default:
            return state;
    }
};

export default internationalReducer;