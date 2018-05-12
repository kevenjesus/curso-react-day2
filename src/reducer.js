import {
    CHANGED_NAME
} from './consts';


const INITIAL_STATE = {
    name: '',
    email: ''
};

const ProfileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGED_NAME:
            return {...state, name: action.payload};
        default:
            return state;
    }
}

export default ProfileReducer;
