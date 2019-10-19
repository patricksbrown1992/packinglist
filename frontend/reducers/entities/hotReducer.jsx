import { RECEIVE_HOT, CLEAR_HOT } from '../../actions/needsActions';
import { merge } from 'lodash';
import { RECEIVE_USER } from '../../actions/sessionActions';
const hotReducer = (state = false, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_HOT:
            return action.ele;
        case CLEAR_HOT:
            return false;
        // case RECEIVE_USER:
        //     return action.user.hot;
        default:
            return state;
    }
};

export default hotReducer;