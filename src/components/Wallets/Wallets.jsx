import React, { useEffect, useState } from 'react';
import { Table } from '../table/Table';
import s from './Wallets.module.css';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import down from '../../assets/icons/option-down.svg';
import up from '../../assets/icons/option-up.svg';
import { useDispatch, useSelector } from 'react-redux';
import { genData } from '../../redux/WalletsReducer';

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
                            <img src={props.item?.status ? up : down} alt=""/>
                            <span className={props.item?.status ? s.green : s.red}>{props.item?.status ? `+`:`-`}{props.item.quote.toFixed(2)}%</span>
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
                    </div>: 
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
      useEffect(()=>{
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

export function Wallets(props) {
    const [selectTable, setSelectTable] = useState(0);
    
    const data = useSelector(state => state.wallets);
    const profile = useSelector(state => state.profile);
    return (
        <section className={s.wallets_wrapper}>
            <div className={s.wallets_body}>
                <div className={s.wallets_title_body}>
                    <div className={s.wallets_title}>
                        <span>
                            Wallets
                        </span>
                    </div>
                    <div className={s.wallets_title_subscription}>
                        <span><p>Кошельки отображают актуальную информацию о состоянии баланса ваших счетов и историю операций.</p>
Здесь вы можете совершать пополнение и вывод любой из представленных валют, совершать покупку и продажу токена, а так же осуществлять внутренний перевод на любой из существующих кабинетов зарегистрированных в системе.</span>
                    </div>
                </div>
                <div className={s.wallets_currency_wrapper}>
                    <CurrencyWrapper profile={profile} />
                </div>
                <div className={s.currency_item_table}>
                    <div className={s.select_table}>
                        <div className={`${s.select_item} ${selectTable === 0 && s.active_table}`} onClick={()=>setSelectTable(0)}>
                            <span>Пополнение вывод</span>
                        </div>
                        <div className={`${s.select_item} ${selectTable === 1 && s.active_table}`} onClick={()=>setSelectTable(1)}>
                            <span>Внутренние переводы</span>
                        </div>
                        <div className={`${s.select_item} ${selectTable === 2 && s.active_table}`} onClick={()=>setSelectTable(2)}>
                            <span>Вознаграждения</span>
                        </div>
                        <div className={`${s.select_item} ${selectTable === 3 && s.active_table}`} onClick={()=>setSelectTable(3)}>
                            <span>Покупка продажа токенов</span>
                        </div>
                    </div>
                    <div className={s.history_table}>
                        <Table rows={3} columns={5} data={selectTable === 0 ? data.history.buy : data.history.buy}/>
                    </div>
                </div>
            </div>
        </section>
    )
}