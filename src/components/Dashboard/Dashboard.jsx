import React, { useState } from 'react';
import s from './Dashboard.module.css';
import cardDecor from '../../assets/icons/card-decor.svg';
import { useDispatch, useSelector } from 'react-redux';
import wallet from '../../assets/icons/light-wallet.svg';
import invest from '../../assets/icons/invest.svg';
import calendare from '../../assets/icons/green-calendare.svg';
import bank from '../../assets/icons/yellow-bank.svg';
import styled from 'styled-components';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Sector, Cell } from 'recharts';
import { setShowStatistic } from '../../redux/ProfileReducer';
import down from '../../assets/icons/option-down.svg';
import up from '../../assets/icons/option-up.svg';
import star_up from '../../assets/icons/star-up.svg';
import { NavLink } from 'react-router-dom';

const StyledProgress = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: bottom;
    transition: .8s ease;
    transform: rotate(-${props => 180 - props.deg}deg) scale(-1, 1);
`

const StyledDot = styled.span`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${props => props.colour}
`

const StyledRow = styled.div`
    width: 100%;
    height:100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-areas: "tb1 tb2 tb3 tb4";
    background: ${props => props.colour};
    padding: 16px;
`

function Legend(props) {
    return (
        <div className={s.legend_wrapper}>
            <div className={s.legend_body}>
                <StyledDot colour={props.colour} />
                <span className={s.legend_title}>{props.name}</span>
            </div>
        </div>
    )
}

const StyledProgressProfit = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0,-50%);
    width: ${props => props.data.value < props.data.min ? 0 : props.data.value * 100 / props.data.max}%;
    height: 8px;
    border-radius: 2px;
    background: ${props => props.iter === 0 ? "#F5A623" : props.iter === 1 ? "#84BDB3" : "#8C93D6"};
    opacity: ${props => props.active ? 1 : 0.8};
`

function ProgressBarProfit(props) {
    return (
        <div className={s.progress_wrapper}>
            <div className={s.progress_column}>
                <div className={s.bar}>
                    <div className={s.back_bar}></div>
                    <StyledProgressProfit iter={props.iter} data={props.data} />
                </div>
                <div className={s.progress_data}>
                    <span className={s.progress_data_title}>{props.iter === 1 ? "Daily company profite" : props.iter === 1 ? "Weekly company profit" : "Monthly company profit"}</span>
                    <span className={s.progress_data_pers}>{props.data.value} %</span>
                </div>
            </div>
        </div>
    )
}

function TableRowHeader(props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`${s.tb_row} ${isActive && s.active_table}`}>
            <span>{props.title}</span>
            <svg onClick={() => setIsActive(!isActive)} width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.00005 1.88661L4.64005 3.52661C4.90005 3.78661 5.32005 3.78661 5.58005 3.52661C5.84005 3.26661 5.84005 2.84661 5.58005 2.58661L3.46672 0.466606C3.20672 0.206606 2.78672 0.206606 2.52672 0.466606L0.413384 2.58661C0.153384 2.84661 0.153384 3.26661 0.413384 3.52661C0.673384 3.78661 1.09338 3.78661 1.35338 3.52661L3.00005 1.88661ZM3.00005 10.1133L1.36005 8.47327C1.10005 8.21327 0.680051 8.21327 0.420051 8.47327C0.160051 8.73327 0.160051 9.15327 0.420051 9.41327L2.53338 11.5333C2.79338 11.7933 3.21338 11.7933 3.47338 11.5333L5.58672 9.41994C5.84672 9.15994 5.84672 8.73994 5.58672 8.47994C5.32672 8.21994 4.90672 8.21994 4.64672 8.47994L3.00005 10.1133Z" fill="#504D85" />
            </svg>
        </div>
    )
}

function CurrencyItem(props){
    return(
        <div className={s.currency_item_body}> 
            <div className={s.currency_item_row}>
                <div className={s.currency_item_left}>
                    <img src="" alt=""/>
                    <div className={s.currency_item_title}>
                        <span className={s.wallet}></span>
                        <span className={s.wallet}></span>
                    </div>
                </div>
                <div>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <NavLink to={`/Wallets`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

function ProgressBar(props) {
    let deg;
    deg = (props.percent * 180) / 100;

    return (
        <div className={s.item_progress_wrapper}>
            <svg className={s.item_progress_back} width="153" height="81" viewBox="0 0 160 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M149 76.5C149 36.4594 116.541 4 76.5 4C36.4594 4 4 36.4594 4 76.5" stroke="#F8F9FC" stroke-width="8" stroke-linecap="round" />
            </svg>
            <StyledProgress deg={deg}>
                <svg className={s.item_progress_load_scale} width="153" height="81" viewBox="0 0 160 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M149 76.5C149 36.4594 116.541 4 76.5 4C36.4594 4 4 36.4594 4 76.5" stroke="#84BDB3" stroke-width="8" stroke-linecap="round" />
                    <path d="M149 76.5C149 36.4594 116.541 4 76.5 4C36.4594 4 4 36.4594 4 76.5" stroke="url(#paint0_angular)" stroke-width="8" stroke-linecap="round" />
                    <defs>
                        <radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.9232 40.25) rotate(-2.90021) scale(118.096 119.268)">
                            <stop offset="0.0124202" stop-color="#84BDB3" />
                            <stop offset="0.385417" stop-color="#8C93D6" />
                        </radialGradient>
                    </defs>
                </svg>
            </StyledProgress>
        </div >


    );
};

function TableRow(props) {
    return (
        <div className={s.row_wrapper}>
            <StyledRow colour={props.colour}>
                <div className={s.row_tb1}>
                    <StyledDot colour={props.data.up ? "var(--green)" : "var(--red)"} />
                    <span>{props.data.name}</span>
                </div>
                <div className={s.row_tb2}>
                    $ {Number(props.data.cap).toFixed(3)}
                </div>
                <div className={`${s.row_tb3} ${props.data.up ? s.green : s.red}`}>
                    <img src={props.data.up ? up : down} alt="" />
                    <span>{props.data.up ? `+${props.data.profit}` : `-${props.data.profit}`}%</span>
                </div>
                <div className={s.row_tb4}>
                    <span>{props.data.date}</span>
                </div>
            </StyledRow>
        </div>
    )
}

function ProfitItem(props) {
    return (
        <section className={s.profit_item_wrapper}>
            <div className={s.profit_item_body}>
                <div className={s.profit_item_icon}>
                    <img src={props.img} alt="" />
                </div>
                <div className={s.profit_item_title}>
                    <span>{props.title}</span>
                </div>
                <div className={s.profit_item_money}>
                    <span>{props.money.toFixed(2)} TKN</span>
                </div>
            </div>
        </section>
    )
}

function creatData(stack, timeline) {
    let obj = [];
    let new_obj = {};
    let min_lenght = 100000000;
    for (let item in stack) {
        for (let initem in stack[`${item}`])
            if (stack[`${item}`][`${initem}`].length < min_lenght) min_lenght = stack[`${item}`][`${initem}`].length
    };
    if (min_lenght === 100000000) min_lenght = 0;
    for (let item in stack) {
        if (item == timeline) {

            for (let i = 0; i < min_lenght; i++) {
                for (let initem in stack[`${item}`]) {
                    new_obj["name"] = stack[`${item}`][`${initem}`][i].time

                    new_obj[`${initem === "crypt" ? "BTC" : initem === "commodyti" ? "ETF" : "LTC"}`] = stack[`${item}`][`${initem}`][i].income;
                }
                obj.push(new_obj);
                new_obj = {};
            }
        }
    }
    return obj
}



export default function Dashboard(props) {

    const [currentData, setCurrentData] = useState(0);
    const [timeIsOpen, setTimeIsOpen] = useState(false);
    const data = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const setStatistic = (data) => {
        dispatch(setShowStatistic(data));
        setTimeIsOpen(!timeIsOpen);
    }

    return (
        <section className={s.wrapper}>
            <div className={s.body}>
                <section className={s.balance_wrapper}>
                    <div className={s.balance_body}>
                        <div className={s.card_wrapper}>
                            <div className={s.card_body}>
                                <div className={s.card_decor}>
                                    <img src={cardDecor} alt="" />
                                </div>
                                <div className={s.card_info_body}>
                                    <div className={s.card_info_balance_body}>
                                        <div className={s.card_title}>
                                            <span>Доступный баланс</span>
                                        </div>
                                        <div className={s.card_money_body}>
                                            <span className={s.card_money}>{data.money.toFixed(2)} T</span>
                                            <span className={s.card_transfer}> 1 token = 1 usd</span>
                                        </div>
                                    </div>
                                    <div className={s.card_symbol_wrapper}>
                                        <div className={s.card_symbol_body}>
                                            <img src={wallet} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.profit_wrapper}>
                            <div className={s.profit_body}>
                                <div className={s.profit_title}>
                                    <span>Финансовая статистика</span>
                                </div>
                                <div className={s.profit_info}>
                                    <ProfitItem img={invest} title={'Инвестированно'} money={data.invest} />
                                    <ProfitItem img={calendare} title={'Доход за месяц:'} money={data.profit} />
                                    <ProfitItem img={bank} title={'Всего заработано:'} money={data.all_income} />
                                </div>
                                <div className={s.profit_progress}>
                                    <ProgressBar percent={data.percent} />
                                    <div className={s.profit_progress_body}>
                                        <span className={s.profit_progress_percents}>{data.percent} <span className={s.profit_progress_symbol}>%</span></span>
                                        <span className={s.profit_progress_time}>за месяц</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.statistics_wrapper}>
                    <div className={s.statistics_body}>
                        <div className={s.statistics_grid}>
                            <div className={s.statistics_graph_wrapper}>
                                <div className={s.statistics_graph_body}>
                                    <div className={s.statistics_graph_row}>
                                        <div className={s.statistics_graph_title_body}>
                                            <div className={s.statistics_graph_title}>
                                                <span>График прибыли за </span>
                                                <div className={s.statistics_graph_dropdown} onClick={() => setTimeIsOpen(!timeIsOpen)}>
                                                    <span> {data.show_statistic}</span>
                                                    <div className={`${s.statistics_graph_dropdown_arrow} ${timeIsOpen && s.graph_dropdown_active}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" /></svg>
                                                    </div>
                                                    <div className={`${s.statistics_graph_dropdown_options} ${timeIsOpen && s.graph_dropdown_active}`}>
                                                        <span onClick={() => setStatistic("daily")}>День</span>
                                                        <span onClick={() => setStatistic("weekly")}>Неделю</span>
                                                        <span onClick={() => setStatistic("monthly")}>Месяц</span>
                                                        <span onClick={() => setStatistic("three_months")}>3 Месяца</span>
                                                        <span onClick={() => setStatistic("year")}>Год</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={s.statistics_graph_legend}>
                                                <Legend colour={"#F5A623"} name={"BTC"} />
                                                <Legend colour={"#8C93D6"} name={"ETF"} />
                                                <Legend colour={"#84BDB3"} name={"LTC"} />
                                            </div>
                                        </div>
                                        <div className={s.statistics_graph}>
                                            <ResponsiveContainer width="100%" height="100%" minHeight="300px">
                                                <AreaChart width={800} height={344} margin={{ top: 20, right: 0, left: -35, bottom: 0 }} data={creatData(data.data_statistic, data.show_statistic)}>
                                                    <defs>
                                                        <linearGradient id="BTC" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#F5A623" stopOpacity={0.8} />
                                                            <stop offset="95%" stopColor="#F5A623" stopOpacity={0} />
                                                        </linearGradient>
                                                        <linearGradient id="ETF" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#8C93D6" stopOpacity={0.8} />
                                                            <stop offset="95%" stopColor="#8C93D6" stopOpacity={0} />
                                                        </linearGradient>

                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Area type="monotone" dataKey="BTC" stroke="#F5A623" fillOpacity={1} fill="url(#BTC)" strokeWidth={currentData === 0 ? 6 : 4} />
                                                    <Area type="monotone" dataKey="ETF" stroke="#8C93D6" fillOpacity={1} fill="url(#ETF)" strokeWidth={currentData === 1 ? 6 : 4} />
                                                    <Area type="monotone" dataKey="LTC" stroke="#84BDB3" fillOpacity={1} fill="url(#LTC)" strokeWidth={currentData === 2 ? 6 : 4} />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.statistics_divers_wrapper}>
                                <div className={s.statistics_divers_body}>
                                    <div className={s.statistics_divers_row}>
                                        <div className={s.statistics_divers_title}>
                                            <span>Диаграма Диверсиикации инвестиций</span>
                                        </div>
                                        <div className={s.statistics_divers_pie}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart width={150} height={150}>
                                                    <Pie
                                                        data={data.data_divers}
                                                        cx="50%"
                                                        cy="50%"
                                                        innerRadius={50}
                                                        outerRadius={75}
                                                        fill="#8884d8"
                                                        paddingAngle={5}
                                                        dataKey="value"
                                                    >

                                                        <Cell onClick={() => setCurrentData(0)} key={`cell-1`} fill={currentData === 0 ? "#ffdb3d" : "#F5A623"} />
                                                        <Cell onClick={() => setCurrentData(1)} key={`cell-2`} fill={currentData === 1 ? "#aeb0f5" : "#8C93D6"} />
                                                        <Cell onClick={() => setCurrentData(2)} key={`cell-3`} fill={currentData === 2 ? "#b0f7ea" : "#84BDB3"} />

                                                    </Pie>
                                                </PieChart>
                                            </ResponsiveContainer>
                                            <div className={s.statistics_divers_pie_info}>
                                                <span>Доход</span>
                                                <span className={s.profit_progress_percents}>{data.percent} <span className={s.profit_progress_symbol}>%</span></span>
                                                <span className={s.profit_progress_time}>за месяц</span>
                                            </div>
                                        </div>
                                        <div className={s.statistics_divers_legend}>
                                            <Legend colour={"#F5A623"} name={"Крипторынок"} />
                                            <Legend colour={"#8C93D6"} name={"Товарносырьевой рынок"} />
                                            <Legend colour={"#84BDB3"} name={"Фондовый рынок"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.statistics_actives_wrapper}>
                                <div className={s.statistics_actives_body}>
                                    <div className={s.statistics_actives_column}>
                                        <div className={s.statistics_actives_title}>
                                            <span>Статистика активов</span>
                                        </div>
                                        <div className={s.statistics_actives_table}>
                                            <div className={s.statistics_actives_table_header}>
                                                <div className={s.row_tb1}>
                                                    <TableRowHeader title={"Name"} />
                                                </div>
                                                <div className={s.row_tb2}>
                                                    <TableRowHeader title={"Cap"} />
                                                </div>
                                                <div className={s.row_tb3}>
                                                    <TableRowHeader title={"Daily profit"} />
                                                </div>
                                                <div className={s.row_tb4}>
                                                    <TableRowHeader title={"Data"} />
                                                </div>
                                            </div>
                                            {data.actives[currentData].map((item, iter) => <TableRow key={iter} data={item} colour={iter % 2 ? "var(--main-color)" : "var(--grey-main)"} />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.statistics_profit_wrapper}>
                                <div className={s.statistics_profit_body}>
                                    <div className={s.statistics_profit_column}>
                                        <div className={s.statistics_profit_column_title}>
                                            <span>Total company profit</span>
                                            <img src={star_up} alt="" />
                                        </div>
                                        <div className={s.statistics_profit}>
                                            {data.profit_total.map((item, iter) => <ProgressBarProfit active={currentData} data={item} iter={iter} key={iter} />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.currency_wrapper}>
                    <div className={s.currency_body}>
                        <div className={s.currency_row}>
                            
                        </div>
                    </div>
                </section>
            </div>
        </section >
    )
}