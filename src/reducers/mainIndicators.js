import { GET_INCOME, GET_ORDERS, GET_VISITS, GET_USER_ACTIVITY } from '../actions/types';
const initialState = {
    income: null,
    orders: null,
    visits: null,
    userActivity: null,
};

const mainIndicators = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_INCOME:
            return { ...state, income: payload };
        case GET_ORDERS:
            return { ...state, orders: payload };
        case GET_VISITS:
            return { ...state, visits: payload };
        case GET_USER_ACTIVITY:
            return { ...state, userActivity: payload };
        default:
            return state;
    }
};

export default mainIndicators;
