import React from 'react';
import { Table } from '../table/Table';
import s from './Wallets.module.css';

export function Wallets(props) {
    return (
        <section className={s.wrapper}>
            <Table/>
        </section>
    )
}