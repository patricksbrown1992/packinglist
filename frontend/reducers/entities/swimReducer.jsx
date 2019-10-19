import { RECEIVE_SWIM, CLEAR_SWIM } from '../../actions/needsActions';
// import { RECEIVE_USER } from '../../actions/sessionActions';
import { merge } from 'lodash';
const swimReducer = (state = false, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SWIM:
            return action.ele;
        case CLEAR_SWIM:
            return false;
        // case RECEIVE_USER:
        //     return action.user.swim;
        default:
            return state;
    }
};

export default swimReducer;