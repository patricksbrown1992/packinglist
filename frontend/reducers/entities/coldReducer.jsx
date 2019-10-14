import { RECEIVE_COLD } from '../../actions/needsActions';
import { merge } from 'lodash';
const coldReducer = (state = { cold: false }, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COLD:
            return merge({}, state, { cold: action.ele });
        default:
            return state;
    }
};

export default coldReducer;