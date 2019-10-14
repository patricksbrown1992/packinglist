import { RECEIVE_INTERNATIONAL } from '../../actions/needsActions';
import { merge } from 'lodash';
const internationalReducer = (state = { international: false }, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_INTERNATIONAL:
            return merge({}, state, { international: action.ele });
        default:
            return state;
    }
};

export default internationalReducer;