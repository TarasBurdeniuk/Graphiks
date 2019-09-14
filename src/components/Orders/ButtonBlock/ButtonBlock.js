import React from 'react';
import './ButtonBlock.css';

const ButtonBlock = () => {
    return (
        // instead tag "a" can be Link from react-router-dom or other method to view
        <ul className="button-group">
            <li>
                <a className="btn left active" href="#">
                    Today
                </a>
            </li>
            <li>
                <a className="btn" href="#">
                    Monthly
                </a>
            </li>
            <li>
                <a className="btn right" href="#">
                    Annual
                </a>
            </li>
        </ul>
    );
};

export default ButtonBlock;
