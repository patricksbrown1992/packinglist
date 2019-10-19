import { RECEIVE_COLD, CLEAR_COLD } from '../../actions/needsActions';
import { merge } from 'lodash';
import { RECEIVE_USER } from '../../actions/sessionActions';
const coldReducer = (state = false , action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COLD:
            return action.ele;
        case CLEAR_COLD:
            return false;
        // case RECEIVE_USER:
        //     return action.user.cold;
        default:
            return state;
    }
};

export default coldReducer;