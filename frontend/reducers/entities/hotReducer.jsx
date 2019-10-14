import { RECEIVE_HOT } from '../../actions/needsActions';
import { merge } from 'lodash';
const hotReducer = (state = false, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HOT:
            return action.ele;
        default:
            return state;
    }
};

export default hotReducer;