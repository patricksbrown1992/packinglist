import { RECEIVE_SWIM } from '../../actions/needsActions';
import { merge } from 'lodash';
const needsReducer = (state = {swim: false}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SWIM:
            return merge({}, state, { swim: action.ele });
        default:
            return state;
    }
};

export default needsReducer;