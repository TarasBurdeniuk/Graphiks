import React from 'react';
import './Orders.css';
import { scales } from './scales';
import ScaleItem from './ScaleItem/ScaleItem';
import ButtonBlock from './ButtonBlock/ButtonBlock';
import Loading from '../Loading/Loading';

const Orders = () => {
    // create lists of scale block
    const scalesItems = scales.map(item => (
        <ScaleItem
            key={item.value}
            percentValue={item.percentValue}
            subName={item.subName}
            value={item.value}
            widthScale={item.widthScale}
        />
    ));

    return (
        <div className="Orders">
            <div className="title-block">
                <h4>Orders</h4>
                <ButtonBlock />
            </div>
            <div className="graphic-block">
                <img className="graphic-picture" src="image/graphic.png" alt="graphic" />
                <div>{!scales.length ? <Loading /> : scalesItems}</div>
            </div>
        </div>
    );
};

export default Orders;
