import React from 'react';
import { CircularProgress } from '../circleProgress/CircleProgress';
import s from './Wallets.module.css';

export function Wallets(props) {
    return (
        <CircularProgress colourProgress={"url(#LTC1)"}>
            <defs>
                <linearGradient id="LTC1" x1="0" y1="100%" x2="100%" y2="0">
                    <stop offset="0%" stop-color="#99daff" stopOpacity="1" />
                    <stop offset="100%" stop-color="#99DAFF" stopOpacity="1" />
                </linearGradient>
            </defs>
        </CircularProgress>
    )
}