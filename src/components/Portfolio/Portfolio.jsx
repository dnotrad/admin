import React, { useEffect, useState } from 'react';
import s from './Portfolio.module.css';
import statistic from '../../assets/icons/stat.svg';
import arrow from '../../assets/icons/arrow-to-right.svg';
import { CircularProgress } from '../circleProgress/CircleProgress';
import { useDispatch, useSelector } from 'react-redux';
import change from '../../assets/icons/set-reinvest.svg';
import invest from '../../assets/icons/file-invest.svg';
import calendare from '../../assets/icons/calendare.svg';
import bank from '../../assets/icons/yellow-bank.svg';
import close from '../../assets/icons/close.svg';
import { setReinvest } from '../../redux/ProfileReducer';
import SemiCircleProgress from '../circleProgress/SemiCircleProgress';
import { Table } from '../table/Table'
import { useTranslation } from 'react-i18next';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function PortfolioItem(props) {
    const { t, i18n } = useTranslation();
    return (
        <div className={s.item_invest_wrapper}>
            <div className={`${s.item_invest_body} ${props.i === 1 && s.disabled}`} >
                <div className={s.item_invest_left}>
                    <div className={s.item_invest_left_top}>
                        <div className={s.item_invest_left_top_icon}>
                            <img src={props.data.icon} alt="" />
                        </div>
                        <div className={s.item_invest_left_top_title}>
                            <span className={s.item_title}>{props.data.name}</span>
                            <span className={s.item_subtitle}>{t("invest.Tariff_plan")}</span>
                        </div>
                        <div className={s.item_invest_left_top_money}>
                            <span className={s.item_title_money}>{props.data.history.invest}</span>
                            <span className={s.item_subtitle_money}>DTN/Dayton</span>
                        </div>
                    </div>
                    <div className={s.item_invest_left_bottom} onClick={() => props.setDraw(props.data.id)}>
                        <div className={s.item_invest_left_bottom_icon}>
                            <img src={statistic} alt="" />
                            <span> {t("portfolio.open_report")} </span>
                        </div>
                        <div className={s.item_invest_left_bottom_arrow}>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className={s.item_invest_right}>
                    <CircularProgress strokeWidth={15} colourProgress={"url(#lgrad)"} percentage={(props.data.timing / 300) * 100}>
                        <defs>
                            <linearGradient id="lgrad" x1="0%" y1="100%" x2="100%" y2="0%" >
                                <stop offset="0%" stopColor="#F8C166" stopOpacity="1" />
                                <stop offset="100%" stopColor="#f5a623" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                    </CircularProgress>
                    <div className={s.circle_data}>
                        <span className={s.item_title_money}>{props.data.timing}</span>
                        <span className={s.item_subtitle_money}>{parseInt(props.data.timing.toString().slice(-1)) === 1 ? t("portfolio.den") : parseInt(props.data.timing.toString().slice(-1)) > 1 && parseInt(props.data.timing.toString().slice(-1)) < 5 ? t("portfolio.dnya") : t("invest.days")}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function DetailsItem(props) {
    return (
        <div className={s.history_details_item_body}>
            <div className={s.history_details_item_icon}>
                <img src={props.data.icon} alt="" />
            </div>
            <div className={s.history_details_item_data}>
                <div className={s.history_details_item_data_title}>
                    <span>{props.data.title}</span>
                </div>
                <div className={s.history_details_item_data_subtitle}>
                    <span>{props.data.subtitle}</span>
                </div>
            </div>
        </div>
    )
}

function ValueReinvest(props) {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    return (
        <div className={s.popup_autoreinvest_body}>
            <div className={s.popup_hedear}>
                <span>Изменить значение автореинвеста</span>
                <img src={close} alt="" onClick={() => props.setOpen(false)} />
            </div>
            <div className={s.popup_options_body}>
                <div onClick={() => {
                    setValue(0);

                }} className={`${s.option} ${value === 0 && s.active}`}>
                    <span>0</span>
                </div>
                <div onClick={() => {
                    setValue(1);

                }} className={`${s.option} ${value === 1 && s.active}`}>
                    <span>25</span>
                </div>
                <div onClick={() => {
                    setValue(2);

                }} className={`${s.option} ${value === 2 && s.active}`}>
                    <span>50</span>
                </div>
                <div onClick={() => {
                    setValue(3);

                }} className={`${s.option} ${value === 3 && s.active}`}>
                    <span>75</span>
                </div>
                <div onClick={() => {
                    setValue(4);

                }} className={`${s.option} ${value === 4 && s.active}`}>
                    <span>100</span>
                </div>
            </div>
            <div className={s.popup_save} onClick={() => dispatch(setReinvest(value === 0 ? 0 : value === 1 ? 25 : value === 2 ? 50 : value === 3 ? 75 : 100, props.id))}>
                <span>Сохранить</span>
            </div>
        </div>
    )
}

function PortfolioHistory(props) {
    const [openTariff, setOpenTariff] = useState(false);
    const [Tariff, setTariff] = useState(0);
    const [openDivision, setOpenDivision] = useState(false);
    const [Division, setDivision] = useState(0);
    const [open, setOpen] = useState(false);
    const [inputSec, setInputSec] = useState('');

    useEffect(() => {
        setTariff(props.data.name === "Silver" ? 0 : props.data.name === "Gold" ? 1 : 2);
        setInputSec(props.data.history.invest.toFixed(2))
    }, [])

    function handler(e) {
        e.preventDefault();
        setInputSec(e.target.value);
    }

    return (
        <div className={s.history_wrapper}>
            <div className={s.history_body}>'
                <div className={s.back} onClick={() => props.setDraw(0)}>
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.72508 10.2175C9.43258 9.92501 9.43258 9.45251 9.72508 9.16001L12.6276 6.25001L1.25008 6.25001C0.837583 6.25001 0.500082 5.91252 0.500082 5.50002C0.500082 5.08751 0.837583 4.75002 1.25008 4.75002L12.6276 4.75002L9.71758 1.84002C9.42508 1.54752 9.42508 1.07502 9.71758 0.782516C10.0101 0.490015 10.4826 0.490015 10.7751 0.782516L14.9751 4.97502C15.2676 5.26752 15.2676 5.74002 14.9751 6.03252L10.7826 10.2175C10.4901 10.51 10.0101 10.51 9.72508 10.2175Z" fill="#FFFFFF" fill-opacity="1" />
                    </svg>
                </div>
                <div className={s.history_details}>
                    <div className={s.history_details_grid}>
                        <div className={s.history_details_upper}>
                            <span className={s.history_details_title}>Подробная отчетность</span>
                        </div>
                        <div className={s.history_details_lower}>
                            <div className={s.history_details_items_wrapper_mobile}>
                                <Swiper loop={true} spaceBetween={0} slidesPerView={1}>
                                    {[{ icon: invest, title: "Инвестированно", subtitle: props.data.history.invest + " DTN" }, { icon: calendare, title: "Заработано", subtitle: props.data.history.profit + " DTN" }, { icon: bank, title: "Автореинвест", subtitle: props.data.history.reinvest + "%" }].map((item, key) => <SwiperSlide><DetailsItem data={item} key={key} /></SwiperSlide>)}
                                </Swiper>
                            </div>
                            <div className={s.history_details_items_wrapper}>
                                {[{ icon: invest, title: "Инвестированно", subtitle: props.data.history.invest + " DTN" }, { icon: calendare, title: "Заработано", subtitle: props.data.history.profit + " DTN" }, { icon: bank, title: "Автореинвест", subtitle: props.data.history.reinvest + "%" }].map((item, key) =><DetailsItem data={item} key={key} />)}
                            </div>
                            <div className={s.history_details_btn_reinvest_wrapper}>
                                <div className={s.btn_reinvest_row} >
                                    <div className={s.btn_reinvest} onClick={() => setOpen(!open)}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 15C2.5 15.4583 2.875 15.8333 3.33333 15.8333H7.5V14.1667H3.33333C2.875 14.1667 2.5 14.5417 2.5 15ZM2.5 5C2.5 5.45833 2.875 5.83333 3.33333 5.83333H10.8333V4.16667H3.33333C2.875 4.16667 2.5 4.54167 2.5 5ZM10.8333 16.6667V15.8333H16.6667C17.125 15.8333 17.5 15.4583 17.5 15C17.5 14.5417 17.125 14.1667 16.6667 14.1667H10.8333V13.3333C10.8333 12.875 10.4583 12.5 10 12.5C9.54167 12.5 9.16667 12.875 9.16667 13.3333V16.6667C9.16667 17.125 9.54167 17.5 10 17.5C10.4583 17.5 10.8333 17.125 10.8333 16.6667ZM5.83333 8.33333V9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333H5.83333V11.6667C5.83333 12.125 6.20833 12.5 6.66667 12.5C7.125 12.5 7.5 12.125 7.5 11.6667V8.33333C7.5 7.875 7.125 7.5 6.66667 7.5C6.20833 7.5 5.83333 7.875 5.83333 8.33333ZM17.5 10C17.5 9.54167 17.125 9.16667 16.6667 9.16667H9.16667V10.8333H16.6667C17.125 10.8333 17.5 10.4583 17.5 10ZM13.3333 7.5C13.7917 7.5 14.1667 7.125 14.1667 6.66667V5.83333H16.6667C17.125 5.83333 17.5 5.45833 17.5 5C17.5 4.54167 17.125 4.16667 16.6667 4.16667H14.1667V3.33333C14.1667 2.875 13.7917 2.5 13.3333 2.5C12.875 2.5 12.5 2.875 12.5 3.33333V6.66667C12.5 7.125 12.875 7.5 13.3333 7.5Z" />
                                        </svg>

                                        <span> Изменить </span>
                                    </div>

                                    {open && <ValueReinvest setOpen={setOpen} id={props.data.id} />}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={s.semi_circle}>
                        <SemiCircleProgress radius={70} endAngle={(props.data.timing / 200) * 100} colourProgress={"url(#lgrad1)"}>
                            <defs>
                                <linearGradient id="lgrad1" x1="0%" y1="100%" x2="100%" y2="0%" >
                                    <stop offset="0%" stopColor="#8C93D6" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#84bdb3" stopOpacity="1" />
                                </linearGradient>
                            </defs>
                        </SemiCircleProgress>
                        <div className={s.semi_circle_data}>
                            <span className={s.circle_data_title}>{props.data.timing}</span>
                            <span className={s.circle_data_subtitle}>{parseInt(props.data.timing.toString().slice(-1)) === 1 ? "День " : parseInt(props.data.timing.toString().slice(-1)) > 1 && parseInt(props.data.timing.toString().slice(-1)) < 5 ? "Дня " : "Дней "} осталось</span>
                        </div>
                    </div>
                </div>
                <div className={s.history_reabalance}>
                    <div className={s.history_rebalance_title}>
                        <span>Ребалансирование</span>
                    </div>
                    <div className={s.history_rebalance_body}>
                        <div className={s.history_rebalance_body_title}>
                            <span>Тариф: </span>
                        </div>

                        <div onClick={() => setOpenTariff(!openTariff)} className={s.history_rebalance_body_input}>
                            <span>{Tariff === 0 ? "Silver" : Tariff === 1 ? "Gold" : "Platinum"}</span>
                            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.00005 1.88661L4.64005 3.52661C4.90005 3.78661 5.32005 3.78661 5.58005 3.52661C5.84005 3.26661 5.84005 2.84661 5.58005 2.58661L3.46672 0.466606C3.20672 0.206606 2.78672 0.206606 2.52672 0.466606L0.413384 2.58661C0.153384 2.84661 0.153384 3.26661 0.413384 3.52661C0.673384 3.78661 1.09338 3.78661 1.35338 3.52661L3.00005 1.88661ZM3.00005 10.1133L1.36005 8.47327C1.10005 8.21327 0.680051 8.21327 0.420051 8.47327C0.160051 8.73327 0.160051 9.15327 0.420051 9.41327L2.53338 11.5333C2.79338 11.7933 3.21338 11.7933 3.47338 11.5333L5.58672 9.41994C5.84672 9.15994 5.84672 8.73994 5.58672 8.47994C5.32672 8.21994 4.90672 8.21994 4.64672 8.47994L3.00005 10.1133Z" fill="#504D85" />
                            </svg>
                            <div className={`${s.history_rebalance_body_input_options} ${openTariff && s.active_table}`}>
                                <span onClick={() => setTariff(0)}>Silver</span>
                                <span onClick={() => setTariff(1)}>Gold</span>
                                <span onClick={() => setTariff(2)}>Platinum</span>
                            </div>
                        </div>
                        <div onClick={() => setOpenDivision(!openDivision)} className={s.history_rebalance_body_direction}>

                            <span>{Division === 0 ? "Криптовалюты" : Division === 1 ? "Сырье" : "Абракадабра"}</span>
                            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.00005 1.88661L4.64005 3.52661C4.90005 3.78661 5.32005 3.78661 5.58005 3.52661C5.84005 3.26661 5.84005 2.84661 5.58005 2.58661L3.46672 0.466606C3.20672 0.206606 2.78672 0.206606 2.52672 0.466606L0.413384 2.58661C0.153384 2.84661 0.153384 3.26661 0.413384 3.52661C0.673384 3.78661 1.09338 3.78661 1.35338 3.52661L3.00005 1.88661ZM3.00005 10.1133L1.36005 8.47327C1.10005 8.21327 0.680051 8.21327 0.420051 8.47327C0.160051 8.73327 0.160051 9.15327 0.420051 9.41327L2.53338 11.5333C2.79338 11.7933 3.21338 11.7933 3.47338 11.5333L5.58672 9.41994C5.84672 9.15994 5.84672 8.73994 5.58672 8.47994C5.32672 8.21994 4.90672 8.21994 4.64672 8.47994L3.00005 10.1133Z" fill="#504D85" />
                            </svg>
                            <div className={`${s.history_rebalance_body_input_options} ${openDivision && s.active_table}`}>
                                <span onClick={() => setDivision(0)}>Криптовалюты</span>
                                <span onClick={() => setDivision(1)}>Сырье</span>
                                <span onClick={() => setDivision(2)}>что-то еще, не помню</span>
                            </div>


                        </div>
                        <div className={s.history_rebalance_body_btn_body}>
                            <div className={s.history_rebalance_body_btn}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7083 5.29182C13.35 3.93349 11.425 3.15016 9.30831 3.36682C6.24998 3.67516 3.73331 6.15849 3.39164 9.21682C2.93331 13.2585 6.05831 16.6668 9.99998 16.6668C12.6583 16.6668 14.9416 15.1085 16.0083 12.8668C16.275 12.3085 15.875 11.6668 15.2583 11.6668C14.95 11.6668 14.6583 11.8335 14.525 12.1085C13.5833 14.1335 11.325 15.4168 8.85831 14.8668C7.00831 14.4585 5.51664 12.9502 5.12498 11.1002C4.42498 7.86682 6.88331 5.00016 9.99998 5.00016C11.3833 5.00016 12.6166 5.57516 13.5166 6.48349L12.2583 7.74182C11.7333 8.26682 12.1 9.16682 12.8416 9.16682H15.8333C16.2916 9.16682 16.6666 8.79182 16.6666 8.33349V5.34182C16.6666 4.60016 15.7666 4.22516 15.2416 4.75016L14.7083 5.29182Z" />
                                </svg>
                                <span>Ребалансировать</span>
                            </div>

                        </div>
                    </div >


                </div>
                <div className={s.history_reinvest}>
                    <div className={s.history_reinvest_title}>
                        <span>Реинвестирование</span>
                    </div>
                    <div className={s.history_reinvest_body}>
                        <div className={s.history_reinvest_body_title}>
                            <span>Доступная сумма: </span>
                        </div>
                        <div className={s.history_input}>
                            <input type="text" value={inputSec} onChange={handler} />
                        </div>
                        <div className={s.history_rebalance_body_btn_body}>
                            <div className={s.history_rebalance_body_btn}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7083 5.29182C13.35 3.93349 11.425 3.15016 9.30831 3.36682C6.24998 3.67516 3.73331 6.15849 3.39164 9.21682C2.93331 13.2585 6.05831 16.6668 9.99998 16.6668C12.6583 16.6668 14.9416 15.1085 16.0083 12.8668C16.275 12.3085 15.875 11.6668 15.2583 11.6668C14.95 11.6668 14.6583 11.8335 14.525 12.1085C13.5833 14.1335 11.325 15.4168 8.85831 14.8668C7.00831 14.4585 5.51664 12.9502 5.12498 11.1002C4.42498 7.86682 6.88331 5.00016 9.99998 5.00016C11.3833 5.00016 12.6166 5.57516 13.5166 6.48349L12.2583 7.74182C11.7333 8.26682 12.1 9.16682 12.8416 9.16682H15.8333C16.2916 9.16682 16.6666 8.79182 16.6666 8.33349V5.34182C16.6666 4.60016 15.7666 4.22516 15.2416 4.75016L14.7083 5.29182Z" />
                                </svg>
                                <span>Реинвестировать</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={s.history_profit}>
                    <div className={s.history_profit_title}>
                        <span>История начисление прибыли</span>
                    </div>
                    <div className={s.history_profit_table}>
                        <Table rows={props.data.history.history_profit.length} data={createProfitData(props.data.history.history_profit)} />
                    </div>
                </div>
                <div className={s.history_payments}>
                    <div className={s.history_payments_title}>
                        <span>История пополнений</span>
                    </div>
                    <div className={s.history_payments_table}>
                        <Table rows={props.data.history.history_replenishments.length} data={createPaymentsData(props.data.history.history_replenishments)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function createPaymentsData(data) {
    let new_data = [];
    let new_item = {};
    data.forEach((item) => {
        new_item["Сумма"] = item["Сумма"];
        new_item["Статус"] = <span style={item["Статус"] === -1 ? { color: "var(--red)" } : item["Статус"] === 0 ? { color: "var(--yellow)" } : { color: "var(--green)" }}>{item["Статус"] === -1 ? "Отклонено" : item["Статус"] === 0 ? "В обработке" : "Выполнено"}</span>;
        new_item["Дата"] = item["Дата"];
        new_data.push(new_item);
        new_item = {};
    })

    return new_data
}

function createProfitData(data) {
    let new_data = [];
    let new_item = {};
    data.forEach((item) => {
        new_item["Сумма"] = item["Сумма"];
        new_item["Процент"] = <span style={{ color: "var(--green)" }}>{item["Процент"].toFixed(2)}%</span>;
        new_item["Дата"] = item["Дата"];
        new_data.push(new_item);
        new_item = {};
    })
    return new_data
}

function makeArr(data) {
    let new_data = [];
    for (let item in data) {
        new_data.push(data[item])
    }
    return new_data
}

function PortfolioMain(props) {
    const { t, i18n } = useTranslation(); //хук для смены языка

    return (
        <>
            <div className={s.Portfolio_header}>
                <div className={s.Portfolio_header_title}>
                    <span>{t("portfolio.title")}</span>
                </div>
                <div className={s.Portfolio_header_subscription}>
                    <span>{t("portfolio.content")}</span>
                </div>
            </div>
            <div className={s.Portfolio_invest}>
                {makeArr(props.data.history).map((item, key) => item.map((item2, key2) => <PortfolioItem key={key2} data={item2} i={key} setDraw={props.setDraw} />)
                )}
            </div>
        </>
    )
}

function detectData(data, state) {
    let new_data;
    for (let item in data) {
        for (let item2 in data[item]) {
            if (data[item][item2].id === state) new_data = data[item][item2];
        }
    }
    return new_data
}

export default function Portfolio(props) {
    const data = useSelector(state => state.profile);
    const [draw, setDraw] = React.useState(0);
    return (
        <section className={s.Portfolio_wrapper}>
            <div className={s.Portfolio_body}>
                {draw === 0 ? <PortfolioMain setDraw={setDraw} data={data} /> : <PortfolioHistory data={detectData(data.history, draw)} setDraw={setDraw} />}
            </div>
        </section>
    )
}