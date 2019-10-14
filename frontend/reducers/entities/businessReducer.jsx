import { RECEIVE_BUSINESS} from '../../actions/needsActions';
import { merge } from 'lodash';
const needsReducer = (state = { business: false }, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BUSINESS:
            return merge({}, state, { business: action.ele });
        default:
            return state;
    }
};

export default needsReducer;