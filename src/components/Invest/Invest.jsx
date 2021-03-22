import React from 'react';
import s from './Invest.module.css';
import silver from '../../assets/icons/silver.svg';
import gold from '../../assets/icons/gold.svg';
import platinum from '../../assets/icons/platinum.svg';
import calendare from '../../assets/icons/calendare.svg';
import wallet from '../../assets/icons/purple-wallet.svg';
import graph from '../../assets/icons/purple-graph.svg';
import bank from '../../assets/icons/purple-bank.svg';
import { useTranslation } from "react-i18next";

function OptionItem(props) {
    const { t, i18n } = useTranslation(); //хук для смены языка
    return (
        <div className={s.item_wrapper}>
            <div className={s.item_body}>
                <div className={s.item_icon}>
                    <img src={props.item.icon} alt="" />
                </div>
                <div className={s.item_plan}>
                    <span className={s.item_title}>{props.item.name}</span>
                    <span className={s.item_subtitle}>{t("invest.Tariff_plan")}</span>
                </div>
                <div className={s.item_date}>
                    <img src={calendare} alt="" />
                    <span>{props.item.timing} {t("invest.days")}</span>
                </div>
                <div className={s.item_profit}>
                    <img src={wallet} alt="" />
                    <span>{props.item.profit_min === props.item.profit_max ? `${t("invest.from")} ${props.item.profit_max} DTN` : `${t("invest.from")} ${props.item.profit_min} ${t("invest.to")} ${props.item.profit_max} DTN`}</span>
                </div>
                <div className={s.item_percent}>
                    <img src={graph} alt="" />
                    <span>{props.item.percent_min}% - {props.item.percent_max}% {t("invest.in_day")}</span>
                </div>
                <div className={s.item_pay}>
                    <img src={bank} alt="" />
                    <span>{props.item.whenPay}</span>
                </div>
                <div className={s.item_btns}>
                    <button className={`${s.btn} ${s.invest_btn}`} disabled={!props.item.canUse}>
                        {t("invest.Invest")}
                    </button>
                    <button className={`${s.btn} ${s.show_btn}`}>
                        {t("invest.More_detailed")}
                    </button>
                </div>
            </div>
        </div>
    )
}


export function Invest() {
    const { t, i18n } = useTranslation(); //хук для смены языка
    const [activeState, setActiveState] = React.useState(0);
    const options = {
        Cryptocurrency: [{
            icon: silver, name: "Silver", timing: 200, profit_min: 50, profit_max: 1500, percent_min: 0.35, percent_max: 0.7, canUse: true, whenPay: t("invest.once_a_day"), more: `Тарифный план вступает в работу сразу после активации, первое начисление прибыли происходит на следующий рабочий день и сразу доступно для вывода. Дивиденды начисляются с понедельника по пятницу в (время по США, часовой пояс).
            Внесенная сумма доступна для вывода после окончания срока работы данного тарифного плана.
            `
        }, {
            icon: gold, name: "Gold", timing: 180, profit_min: 1500, profit_max: 8000, percent_min: 0.7, percent_max: 0.9, canUse: true, whenPay: t("invest.once_a_day"), more: `Тарифный план вступает в работу сразу после активации, первое начисление прибыли происходит на следующий рабочий день и сразу доступно для вывода. Дивиденды начисляются с понедельника по пятницу в (время по США, часовой пояс).
            Внесенная сумма доступна для вывода после окончания срока работы данного тарифного плана.
            `
        }, {
            icon: platinum, name: "Platinum", timing: 25, profit_min: 15000, profit_max: 15000, percent_min: 1.4, percent_max: 2.3, canUse: false, whenPay:  t("invest.once_a_day"), more: `Тарифный план вступает в работу сразу после активации, первое начисление прибыли происходит на следующий рабочий день.
            Дивиденды начисляются с понедельника по пятницу в (время по США, часовой пояс).
            Внесенная сумма, а также полученная прибыль доступна для вывода после окончания срока работы данного тарифного плана.
            `
        }],
        Commodity: [{
            icon: silver, name: "Silver", timing: 210, profit_min: 100, profit_max: 1500, percent_min: 2.45, percent_max: 4.35, canUse: true, whenPay:  t("invest.once_a_week"), more: `Тарифный план вступает в работу сразу после активации, первое начисление прибыли произойдет в пятницу первой рабочей недели после активации и сразу доступно для вывода, процент начисления будет зависеть от количества отработанных дней за текущую рабочую неделю.
            Дивиденды начисляются один раз в неделю каждую пятницу в  14:00(время).
            Внесенная сумма доступна для вывода после окончания срока работы данного тарифного плана.
            `
        }, {
            icon: gold, name: "Gold", timing: 180, profit_min: 1500, profit_max: 9000, percent_min: 4.6, percent_max: 5.75, canUse: false, whenPay:  t("invest.once_a_week"), more: `Тарифный план вступает в работу сразу после активации, первое начисление прибыли произойдет в пятницу первой рабочей недели после активации и сразу доступно для вывода, процент начисления будет зависеть от количества отработанных дней за текущую рабочую неделю.
            Дивиденды начисляются один раз в неделю каждую пятницу в  14:00(время).
            Внесенная сумма доступна для вывода после окончания срока работы данного тарифного плана.
            `
        }, {
            icon: platinum, name: "Platinum", timing: 25, profit_min: 25000, profit_max: 25000, percent_min: 13.05, percent_max: 16.80, canUse: true, whenPay:  t("invest.once_a_week"), more: `Тарифный план вступает в работу сразу после активации, первое начисление прибыли произойдет в пятницу первой рабочей недели после активации, процент начисления будет зависеть от количества отработанных дней за текущую рабочую неделю.
            Дивиденды начисляются один раз в неделю каждую пятницу в (время).
            Внесенная сумма, а также полученная прибыль доступна для вывода после окончания срока работы данного тарифного плана.
            `
        }],
        stock: [{
            icon: silver, name: "Silver", timing: 240, profit_min: 200, profit_max: 2000, percent_min: 10.12, percent_max: 17.25, canUse: true, whenPay: t("invest.once_a_month"), more: `Тарифный план вступает в работу сразу после активации, первое начисление прибыли произойдет в пятницу первой рабочей недели после активации и сразу доступно для вывода, процент начисления будет зависеть от количества отработанных дней за текущую рабочую неделю.
            Дивиденды начисляются один раз в неделю каждую пятницу в  14:00(время).
            Внесенная сумма доступна для вывода после окончания срока работы данного тарифного плана.
            `
        }, {
            icon: gold, name: "Gold", timing: 200, profit_min: 2000, profit_max: 10000, percent_min: 21, percent_max: 25.30, canUse: true, whenPay: t("invest.once_a_month"), more: `Тарифный план вступает в работу сразу после активации, первое начисление прибыли произойдет в пятницу первой рабочей недели после активации и сразу доступно для вывода, процент начисления будет зависеть от количества отработанных дней за текущую рабочую неделю.
            Дивиденды начисляются один раз в неделю каждую пятницу в  14:00(время).
            Внесенная сумма доступна для вывода после окончания срока работы данного тарифного плана.
            `
        }, {
            icon: platinum, name: "Platinum", timing: 85, profit_min: 40000, profit_max: 40000, percent_min: 49.95, percent_max: 91.75, canUse: true, whenPay: t("invest.once_a_month"), more: `Тарифный план вступает в работу сразу после активации, первое начисление прибыли произойдет в пятницу первой рабочей недели после активации, процент начисления будет зависеть от количества отработанных дней за текущую рабочую неделю.
            Дивиденды начисляются один раз в неделю каждую пятницу в (время).
            Внесенная сумма, а также полученная прибыль доступна для вывода после окончания срока работы данного тарифного плана.
            `
        }],
    }


    return (
        <section className={s.Invest_wrapper}>
            <div className={s.Invest_body}>
                <div className={s.Invest_header}>
                    <div className={s.Invest_header_btns}>
                        <div onClick={() => setActiveState(0)} className={`${s.Invest_header_btns_btn} ${activeState === 0 && s.active}`}>
                            <span>{t("invest.Cryptocurrency_market")}</span>
                        </div>
                        <div onClick={() => setActiveState(1)} className={`${s.Invest_header_btns_btn} ${activeState === 1 && s.active}`}>
                            <span>{t("invest.Commodity_market")}</span>
                        </div>
                        <div onClick={() => setActiveState(2)} className={`${s.Invest_header_btns_btn} ${activeState === 2 && s.active}`}>
                            <span>{t("invest.Stock_market")}</span>
                        </div>
                    </div>
                    <div className={s.Invest_header_text}>
                        <span>
                            {/* {(activeState === 0 ? "1 опция" : activeState === 1 ? "2 опция" : "3 опция")} */}
                            <span><p>{t("invest.content")}</p></span>
                        </span>
                    </div>
                </div>
                <div className={s.Invest_options}>
                    {(activeState === 0 ? options.Cryptocurrency.map((item, key) => <OptionItem item={item} key={key} />) : activeState === 1 ? options.Commodity.map((item, key) => <OptionItem item={item} key={key} />) : options.stock.map((item, key) => <OptionItem item={item} key={key} />))}
                </div>
            </div>
        </section>
    )
}