import { GET_SOME } from '../actions/types';
const initialState = {};

const map = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_SOME:
            return { ...state, payload };
        default:
            return state;
    }
};

export default map;
