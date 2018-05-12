import {
    CHANGED_NAME
} from './consts';

export const changeName = event => ({
    type: CHANGED_NAME,
    payload: event.target.value
});