import { GET_INCOME, GET_ORDERS, GET_VISITS, GET_USER_ACTIVITY } from './types';

export const getIncome = () => dispatch => {
    const maxValue = 999999;
    setInterval(() => {
        const income = {
            name: 'Income',
            indicator: 'Today',
            value: Math.floor(Math.random() * Math.floor(maxValue)),
            color: 'blue',
            subName: 'Total income',
            percentValue: Math.floor(Math.random() * Math.floor(100)),
        };

        dispatch({
            type: GET_INCOME,
            payload: income,
        });
    }, 1000);
};
