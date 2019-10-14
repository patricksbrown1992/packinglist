import { RECEIVE_SWIM } from '../../actions/needsActions';
import { merge } from 'lodash';
const swimReducer = (state = false, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SWIM:
            return action.ele;
        default:
            return state;
    }
};

export default swimReducer;