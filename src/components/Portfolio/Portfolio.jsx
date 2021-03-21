import React from 'react';
import s from './Portfolio.module.css';
import statistic from '../../assets/icons/stat.svg';
import arrow from '../../assets/icons/arrow-to-right.svg';
import { CircularProgress } from '../circleProgress/CircleProgress';
import { useSelector } from 'react-redux';

function PortfolioItem(props) {
    console.log(props.i)
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
                            <span className={s.item_subtitle}>Тарифный план</span>
                        </div>
                        <div className={s.item_invest_left_top_money}>
                            <span className={s.item_title_money}>{props.data.history.invest}</span>
                            <span className={s.item_subtitle_money}>DTN/Dayton</span>
                        </div>
                    </div>
                    <div className={s.item_invest_left_bottom} onClick={() => props.setDraw(props.data.id)}>
                        <div className={s.item_invest_left_bottom_icon}>
                            <img src={statistic} alt="" />
                            <span> Открыть отчет </span>
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
                        <span className={s.item_subtitle_money}>{parseInt(props.data.timing.toString().slice(-1)) === 1 ? "день" : parseInt(props.data.timing.toString().slice(-1)) > 1 && parseInt(props.data.timing.toString().slice(-1)) < 5 ? "дня" : "дней"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PortfolioHistory(props) {
    return (
        <div className={s.history_wrapper}>
            {makeArr(props.data.history).map((item, key) => item.map((item2, key2) => item2.id === props.state && (
                <div className={s.history_body}>
                    <div className={s.history_details}>
                        <div>
                            <div>
                                <span></span>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div>
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className={s.history_reabalance}>

                    </div>
                    <div className={s.history_reinvest}>

                    </div>
                    <div className={s.history_profit}>

                    </div>
                    <div className={s.history_payments}>

                    </div>
                </div>
            )
            ))}
        </div>
    )
}

function makeArr(data) {
    let new_data = [];
    for (let item in data) {
        new_data.push(data[item])
    }
    console.log(new_data);
    return new_data
}

function PortfolioMain(props) {

    return (
        <>
            <div className={s.Portfolio_header}>
                <div className={s.Portfolio_header_title}>
                    <span>Portfolio</span>
                </div>
                <div className={s.Portfolio_header_subscription}>
                    <span>В Портфолио вы можете просмотреть всю интересующую вас информацию о ваших работающих тарифных планах, а также посмотреть историю начислений и пополнений,  установить желаемое значение Автореинвеста, воспользоваться функцией Ребалансировки и Реинвестирования.</span>
                </div>
            </div>
            <div className={s.Portfolio_invest}>
                {makeArr(props.data.history).map((item, key) => item.map((item2, key2) => <PortfolioItem key={key2} data={item2} i={key} setDraw={props.setDraw} />)
                )}
            </div>
        </>
    )

}

export function Portfolio(props) {
    const data = useSelector(state => state.profile);
    const [draw, setDraw] = React.useState(0);
    return (
        <section className={s.Portfolio_wrapper}>
            <div className={s.Portfolio_body}>
                {draw === 0 ? <PortfolioMain setDraw={setDraw} data={data} /> : <PortfolioHistory data={data} setDraw={setDraw} state={draw} />}
            </div>
        </section>
    )
}