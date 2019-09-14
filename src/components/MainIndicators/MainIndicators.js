import React from 'react';
import './MainIndicators.css';
import { indicators } from './indicators';
import IndicatorItem from './IndicatorItem/IndicatorItem';

const MainIndicators = () => {
    const indicatorsItems = indicators.map(item => (
        <IndicatorItem
            name={item.name}
            indicator={item.indicator}
            value={item.value}
            color={item.color}
            subName={item.subName}
            percentValue={item.percentValue}
        />
    ));

    return <div className="MainIndicators">{indicatorsItems}</div>;
};

export default MainIndicators;
