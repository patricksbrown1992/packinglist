import { RECEIVE_BUSINESS, CLEAR_BUSINESS} from '../../actions/needsActions';
import {RECEIVE_USER} from '../../actions/sessionActions';
import { merge } from 'lodash';
const businessReducer = (state = false, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BUSINESS:
            return action.ele;
        case CLEAR_BUSINESS: 
            return false;
        // case RECEIVE_USER:
        //     return action.user.business;
        default:
            return state;
    }
};

export default businessReducer;