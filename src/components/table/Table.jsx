import React, { useState } from 'react';
import styled from 'styled-components';
import Tabels from '../Partners/Tabel/Tabel';
import s from './Table.module.css';

const TableBody = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-template-rows: repeat(${props => props.rows}, 1fr);
    grid-template-areas: ${props => {
        let data = "";
        for (let i = 0; i < props.rows; i++) {
            data += ` "`;
            for (let j = 0; j < props.columns; j++) {
                data += `item${i}${j} `;
            }
            data += `" `;
        }
        return data;
    }}
`

const TableItem = styled.div`
    width: 100%;
    height: 100%;
    grid-area: item${props => props.i}${props => props.j};
    background: ${props => props.colour[props.i % props.colour.length]};
`

function TableHeader(props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`${s.row_wrapper} ${props.index && s.mid_item}`}>
            <div className={`${s.tb_row} ${isActive && s.active_table}`}>

                <span>{props.title}</span>
                <svg onClick={() => setIsActive(!isActive)} width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.00005 1.88661L4.64005 3.52661C4.90005 3.78661 5.32005 3.78661 5.58005 3.52661C5.84005 3.26661 5.84005 2.84661 5.58005 2.58661L3.46672 0.466606C3.20672 0.206606 2.78672 0.206606 2.52672 0.466606L0.413384 2.58661C0.153384 2.84661 0.153384 3.26661 0.413384 3.52661C0.673384 3.78661 1.09338 3.78661 1.35338 3.52661L3.00005 1.88661ZM3.00005 10.1133L1.36005 8.47327C1.10005 8.21327 0.680051 8.21327 0.420051 8.47327C0.160051 8.73327 0.160051 9.15327 0.420051 9.41327L2.53338 11.5333C2.79338 11.7933 3.21338 11.7933 3.47338 11.5333L5.58672 9.41994C5.84672 9.15994 5.84672 8.73994 5.58672 8.47994C5.32672 8.21994 4.90672 8.21994 4.64672 8.47994L3.00005 10.1133Z" fill="#504D85" />
                </svg>
            </div>
        </div>
    )
}

function TableRow(props) {
    return (
        <div className={`${s.row_wrapper} ${props.index && s.mid_item}`} >
            <div className={s.item}>
                {props.item}
            </div>
        </div>
    )
}

const createRow = (props) => {
    let data = [];
    let count = 0;
    props.data.map((item, index) => {
        for (let val in item) {
            data.push(<TableItem i={index} j={count % props.columns} colour={props.colour}>{!index ? <TableHeader title={val} index={count+1 !== props.columns} /> : <TableRow item={item[`${val}`]} index={count+1 !== props.columns} />}</TableItem>)
            count++;
        }
        count = 0;
    })
    return data
}

export function Table(props) {
    return (
        <div className={s.table_wrapper}>
            <TableBody columns={props.columns} rows={props.rows}>
                {createRow(props).map((item) => item)}
            </TableBody>
        </div>
    )
}

Table.defaultProps = {
    columns: 3,
    rows: 5,
    data: [{ name: "name", value: 400, magic: "abracadabra" }, { name: "name", value: 400, magic: "abracadabra" }, { name: "name", value: 400, magic: "abracadabra" }, { name: "name", value: 400, magic: "abracadabra" }, { name: "name", value: 400, magic: "abracadabra" }],
    colour: ["#FFFFFF", "#FBFBFD"],
    withSort: true,
}