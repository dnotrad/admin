import React, { useEffect, useState } from 'react';
import { Table } from '../table/Table';
import s from './Wallets.module.css';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import down from '../../assets/icons/option-down.svg';
import up from '../../assets/icons/option-up.svg';
import { useDispatch, useSelector } from 'react-redux';
import { genData } from '../../redux/WalletsReducer';
<<<<<<< HEAD
import { StyledDot } from '../Dashboard/Dashboard';

=======
import { useTranslation } from "react-i18next";
>>>>>>> eca93c4a90e0ab5e11a427718a3a95f06d2a40a3
function CurrencyItem(props) {
    return (
        <div className={s.currency_item_body}>
            <div className={s.currency_item_grid}>
                <div className={s.currency_item_row}>
                    <div className={s.currency_item_left}>
                        <img src={props.data.icon} alt="" />
                        <div className={s.currency_item_title}>
                            <span className={s.wallet_name}>{props.data.name}</span>
                            <span className={s.wallet_fullname}>{props.data.fullname}</span>
                        </div>
                    </div>
                    <div className={s.currency_item_center}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart width={50} height={50} data={props.item.data}>
                                <defs>
                                    <linearGradient id="colorUp" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#84BDB3" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#84BDB3" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorDown" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#E16767" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#E16767" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Tooltip />
                                <Area type="monotone" dataKey="value" stroke={props.item?.status ? '#84BDB3' : '#E16767'} fillOpacity={1} fill={props.item?.status ? 'url(#colorUp)' : 'url(#colorDown)'} />
                            </AreaChart>
                        </ResponsiveContainer>
                        <div className={s.currency_item_center_status}>
                            <img src={props.item?.status ? up : down} alt="" />
                            <span className={props.item?.status ? s.green : s.red}>{props.item?.status ? `+` : `-`}{props.item.quote.toFixed(2)}%</span>
                        </div>
                    </div>
                    <div className={s.currency_item_right}>
                        <div className={s.currency_item_right_row}>
                            <span className={s.currency_item_right_money}>{props.data.isToken ? "T " : "$ "}{props.data.cost.toFixed(2)}</span>
                            <span className={s.currency_item_right_buy}> Can buy: {Math.floor(props.money / props.data.cost)}</span>
                        </div>
                    </div>
                </div>
                <div className={s.currency_item_buy}>
                    {props.data.canBuy ?
                        <div className={s.canBuy_wrapper}>
                            <div className={s.buy}>
                                <div className={s.btn}>
                                    <span>Купить</span>
                                </div>
                            </div>
                            <div className={s.share}>
                                <div className={`${s.btn} ${s.with_border}`}>
                                    <span>Поделиться</span>
                                </div>
                            </div>
                            <div className={s.sell}>
                                <div className={s.btn}>
                                    <span>Продать</span>
                                </div>
                            </div>
                        </div> :
                        <div className={s.canNotBuy_wrapper}>
                            <div className={s.in}>
                                <div className={`${s.btn} ${s.with_right_border}`}>
                                    <span>Пополнить</span>
                                </div>
                            </div>
                            <div className={s.out}>
                                <div className={s.btn}>
                                    <span>Вывести</span>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}

function createData(data) {
    let new_data = [];
    for (let item in data) {
        new_data.push(data[item])
    }
    return new_data
}

function CurrencyWrapper(props) {
    const data = useSelector(state => state.wallets);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(genData(data))
    }, [data.quotes])
    return (
        <div className={s.wallets_currency_body}>
            {createData(data.quotes).map((item, iter) =>
                <CurrencyItem key={iter} data={data.currencies[iter]} money={props.profile.money} item={item} />
            )}
        </div>
    )
}

<<<<<<< HEAD
function createDataBuy(data) {
    let new_data = [];
    let new_item = {};
    new_data = data.map((item, key) => {
        new_item = {};
        new_item["Операция"] =
            <div className={s.row_tb1}>
                <StyledDot colour={data[key]["Операция"] ? "var(--green)" : "var(--red)"} />
                <span>{data[key]["Операция"] ? "Пополнение" : "Вывод"}</span>
            </div>;
        new_item["Сумма"] = data[key]["Валюта"] === ("BTC" || "LIT" || "ETH" || "DTN") ? data[key]["Сумма"].toFixed(5) : data[key]["Сумма"].toFixed(2);
        new_item["Валюта"] = data[key]["Валюта"];
        new_item["Дата"] = data[key]["Дата"];
        new_item["Статус"] = <span style={{ color: data[key]["Статус"] ? "var(--green)" : "var(--red)" }}>{data[key]["Статус"] ? "Выполнено" : "Отклонено"}</span>;
        return new_item;
    })
    return new_data;
}

function createDataSell(data) {
    let new_data = [];
    let new_item = {};
    new_data = data.map((item, key) => {
        new_item = {};
        new_item["Операция"] =
            <div className={s.row_tb1}>
                <StyledDot colour={data[key]["Операция"] ? "var(--green)" : "var(--red)"} />
                <span>{data[key]["Операция"] ? "Пополнение" : "Вывод"}</span>
            </div>;
        new_item["Сумма"] = data[key]["Сумма"].toFixed(5) + " TKN";
        new_item["Валюта"] = data[key]["Валюта"] === ("BTC" || "LIT" || "ETH" || "DTN") ? data[key]["Сумма"].toFixed(5) + " " + data[key]["Валюта"] : data[key]["Сумма"].toFixed(2) + " " + data[key]["Валюта"];
        new_item["Дата"] = data[key]["Дата"];
        new_item["Статус"] =  <span style={{ color: data[key]["Статус"] === 1 ? "var(--green)" : data[key]["Статус"] === -1 ? "var(--red)" : "var(--yellow)" }}>{data[key]["Статус"] === 1 ? "Выполнено" : data[key]["Статус"] === -1 ? "Отклонено" : "В обработке"}</span>;
        return new_item;
    })
    return new_data;
}


function createDataInternal(data) {
    let new_data = [];
    let new_item = {};
    new_data = data.map((item, key) => {
        new_item = {};
        new_item["Операция"] =
            <div className={s.row_tb1}>
                <StyledDot colour={data[key]["Операция"] ? "var(--green)" : "var(--yellow)"} />
                <span>{data[key]["Операция"] ? "Получение" : "Отправление"}</span>
            </div>;
        new_item["Сумма"] = data[key]["Сумма"].toFixed(5) + " DTN";
        new_item["ID"] = "ID " + data[key]["ID"];
        new_item["Дата"] = data[key]["Дата"];
        new_item["Статус"] = <span style={{ color: data[key]["Статус"] === 1 ? "var(--green)" : data[key]["Статус"] === -1 ? "var(--red)" : "var(--yellow)" }}>{data[key]["Статус"] === 1 ? "Выполнено" : data[key]["Статус"] === -1 ? "Отклонено" : "В обработке"}</span>;
        return new_item;
    })
    return new_data;
}

function createDataRewards(data) {
    let new_data = [];
    let new_item = {};
    new_data = data.map((item, key) => {
        new_item = {};
        new_item["Тип вознаграждения"] =
            <div className={s.row_tb1}>
                <StyledDot colour={data[key]["Тип вознаграждения"] ? "var(--green)" : "var(--yellow)"} />
                <span>{data[key]["Тип вознаграждения"] ? "Реферальные" : "Достижение ранга"}</span>
            </div>;
        new_item["Сумма"] = data[key]["Сумма"].toFixed(5) + " DTN";
        new_item["ID"] = "ID " + data[key]["ID"];
        new_item["Линия"] = data[key]["Линия"];
        new_item["Дата"] = data[key]["Дата"];
        return new_item;
    })
    return new_data;
}


export function Wallets(props) {
=======
function Wallets(props) {
>>>>>>> eca93c4a90e0ab5e11a427718a3a95f06d2a40a3
    const [selectTable, setSelectTable] = useState(0);

    const data = useSelector(state => state.wallets);
    const profile = useSelector(state => state.profile);
    const { t, i18n } = useTranslation(); //хук для смены языка
    return (
        <section className={s.wallets_wrapper}>
            <div className={s.wallets_body}>
                <div className={s.wallets_title_body}>
                    <div className={s.wallets_title}>
                        <span>
                            {t("wallets.title")}
                        </span>
                    </div>
                    <div className={s.wallets_title_subscription}>
                        <span>{t("wallets.content")}</span>
                    </div>
                </div>
                <div className={s.wallets_currency_wrapper}>
                    <CurrencyWrapper profile={profile} />
                </div>
                <div className={s.currency_item_table}>
                    <div className={s.select_table}>
                        <div className={`${s.select_item} ${selectTable === 0 && s.active_table}`} onClick={() => setSelectTable(0)}>
<<<<<<< HEAD
                            <span>Пополнение\вывод</span>
=======
                            <span>Пополнение вывод</span>
>>>>>>> eca93c4a90e0ab5e11a427718a3a95f06d2a40a3
                        </div>
                        <div className={`${s.select_item} ${selectTable === 1 && s.active_table}`} onClick={() => setSelectTable(1)}>
                            <span>Внутренние переводы</span>
                        </div>
                        <div className={`${s.select_item} ${selectTable === 2 && s.active_table}`} onClick={() => setSelectTable(2)}>
                            <span>Вознаграждения</span>
                        </div>
                        <div className={`${s.select_item} ${selectTable === 3 && s.active_table}`} onClick={() => setSelectTable(3)}>
<<<<<<< HEAD
                            <span>Покупка\продажа токенов</span>
                        </div>
                    </div>
                    <div className={s.history_table}>
                        <Table rows={selectTable === 0 ? data.history.buy.length : selectTable === 1 ? data.history.internal.length : selectTable === 2 ? data.history.rewards.length : data.history.selling.length} columns={5} data={selectTable === 0 ? createDataBuy(data.history.buy) : selectTable === 1 ? createDataInternal(data.history.internal) : selectTable === 2 ? createDataRewards(data.history.rewards) : createDataSell(data.history.selling)} />
                        {selectTable === 2 &&
                            <div className={s.struct_profit}>
                                <div className={`${s.cl1} ${s.row_tb1}`}>
                                    <StyledDot colour={"#8C93D6"}/>
                                    <span> Структурный доход </span>
                                </div>
                                <div className={s.cl2}>
                                    {data.history.rewards.reduce((sum,item)=>sum+item["Сумма"],0).toFixed(5)}
                                    </div>
                                    <div className={s.cl5}>
                                    {data.history.rewards[data.history.rewards.length-1]["Дата"]}
                                    </div>
                                </div>}
=======
                            <span>Покупка продажа токенов</span>
                        </div>
                    </div>
                    <div className={s.history_table}>
                        <Table rows={3} columns={5} data={selectTable === 0 ? data.history.buy : data.history.buy} />
>>>>>>> eca93c4a90e0ab5e11a427718a3a95f06d2a40a3
                    </div>
                </div>
                </div>
        </section>
    )
}

export default Wallets;