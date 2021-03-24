import React, { useEffect, useState } from 'react';
import { Table } from '../table/Table';
import s from './Wallets.module.css';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import down from '../../assets/icons/option-down.svg';
import up from '../../assets/icons/option-up.svg';
import { useDispatch, useSelector } from 'react-redux';
import { genData } from '../../redux/WalletsReducer';
import { useTranslation } from "react-i18next";
import PopUp from '../modals/Modal';
import PopUpWallets from '../modals/PopUps/Wallets/PopUpWallets';
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
                            <div className={s.buy} onClick={() => {
                                props.setOpen(true); props.setPopUpData({
                                    currency: true,
                                    title: "Купить DTN",
                                    fOption: "Сумма покупки",
                                    SOption: "Валюта",
                                    nameBtn: "Купить",
                                    SOptionPlace: "",
                                    money: props.money,
                                    cost: props.data.cost,
                                })
                            }}>
                                <div className={s.btn}>
                                    <span>Купить</span>
                                </div>
                            </div>
                            <div className={s.share} onClick={() => {
                                props.setOpen(true); props.setPopUpData({
                                    currency: false,
                                    title: "Перевести DTN",
                                    fOption: "Введите сумму",
                                    SOption: "ID аккаунта",
                                    SOptionPlace: "ID 000-000",
                                    nameBtn: "Перевести",
                                    money: props.money,
                                    cost: props.data.cost,
                                })
                            }}>
                                <div className={`${s.btn} ${s.with_border}`}>
                                    <span>Поделиться</span>
                                </div>
                            </div>
                            <div className={s.sell} onClick={() => {
                                props.setOpen(true); props.setPopUpData({
                                    currency: true,
                                    title: "Продажа DTN",
                                    fOption: "Сумма продажи",
                                    SOption: "Получаете",
                                    nameBtn: "Продать",
                                    SOptionPlace: "",
                                    money: props.money,
                                })
                            }}>
                                <div className={s.btn}>
                                    <span>Продать</span>
                                </div>
                            </div>
                        </div> :
                        <div className={s.canNotBuy_wrapper}>
                            <div className={s.in}>
                                <div className={`${s.btn} ${s.with_right_border}`} onClick={() => {
                                    props.setOpen(true); props.setPopUpData({
                                        currency: true,
                                        title: "Пополнение",
                                        fOption: "Сумма",
                                        SOption: "Платежный сервис",
                                        nameBtn: "Пополнить",
                                        SOptionPlace: "",
                                        money: props.money,
                                        cost: props.data.cost,
                                        invest: props.invest,
                                    })
                                }}>
                                    <span>Пополнить</span>
                                </div>
                            </div>
                            <div className={s.out} onClick={() => {
                                props.setOpen(true); props.setPopUpData({
                                    currency: true,
                                    title: "Вывод",
                                    fOption: "Сумма",
                                    SOption: "Платежный сервис",
                                    nameBtn: "Вывести",
                                    SOptionPlace: "",
                                    money: props.money,
                                    cost: props.data.cost,
                                    invest: props.invest,
                                })
                            }}>
                                <div className={s.btn} >
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
    /* useEffect(() => {
        dispatch(genData(data))
    }, [data.quotes]) */
    return (
        <div className={s.wallets_currency_body}>
            {createData(data.quotes).map((item, iter) =>
                <CurrencyItem SOptionPlace={props.SOptionPlace} setPopUpData={props.setPopUpData} setOpen={props.setOpen} key={iter} data={data.currencies[iter]} money={props.profile.money} item={item} />
            )}
        </div>
    )
}

function Wallets(props) {
    const [selectTable, setSelectTable] = useState(0);
    const [open, setOpen] = useState(false);
    const data = useSelector(state => state.wallets);
    const profile = useSelector(state => state.profile);
    const [popUpData, setPopUpData] = useState({
        currency: true,
        title: "Продажа DTN",
        fOption: "Сумма продажи",
        SOption: "Получаете",
        nameBtn: "Продать",
        SOptionPlace: "",
        money: profile.money,
        cost: 1,
        invest: profile.invest
    })

    const { t, i18n } = useTranslation(); //хук для смены языка
    return (
        <section className={s.wallets_wrapper}>
            <PopUp open={open} blur={10} close={setOpen}>
                <PopUpWallets money={popUpData.money} cost={popUpData.cost} invest={popUpData.invest} SOptionPlace={popUpData.SOptionPlace} currency={popUpData.currency} title={popUpData.title} close={setOpen} fOption={popUpData.fOption} SOption={popUpData.SOption} nameBtn={popUpData.nameBtn} />
            </PopUp>
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
                    <CurrencyWrapper setPopUpData={setPopUpData} setOpen={setOpen} profile={profile} />
                </div>
                <div className={s.currency_item_table}>
                    <div className={s.select_table}>
                        <div className={`${s.select_item} ${selectTable === 0 && s.active_table}`} onClick={() => setSelectTable(0)}>
                            <span>Пополнение вывод</span>
                        </div>
                        <div className={`${s.select_item} ${selectTable === 1 && s.active_table}`} onClick={() => setSelectTable(1)}>
                            <span>Внутренние переводы</span>
                        </div>
                        <div className={`${s.select_item} ${selectTable === 2 && s.active_table}`} onClick={() => setSelectTable(2)}>
                            <span>Вознаграждения</span>
                        </div>
                        <div className={`${s.select_item} ${selectTable === 3 && s.active_table}`} onClick={() => setSelectTable(3)}>
                            <span>Покупка продажа токенов</span>
                        </div>
                    </div>
                    <div className={s.history_table}>
                        <Table rows={3} columns={5} data={selectTable === 0 ? data.history.buy : data.history.buy} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wallets;