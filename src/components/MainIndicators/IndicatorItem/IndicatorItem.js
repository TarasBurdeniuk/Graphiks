import React from 'react';
import './IndicatorItem.css';

const IndicatorItem = ({ name, indicator, value, color, subName, percentValue }) => {
    return (
        <div className="IndicatorItem">
            <div className="name-block">
                <h4>{name}</h4>
                <h4 className="indicator" style={{ background: `${color}` }}>
                    {indicator}
                </h4>
            </div>
            <div className="value-block">
                <span className="value">{value}</span>
                <div className="subName">
                    <span className="subName-title">{subName}</span>
                    <span style={{ color: `${color}`, fontSize: '1rem' }}>{percentValue}%</span>
                </div>
            </div>
        </div>
    );
};

export default IndicatorItem;
