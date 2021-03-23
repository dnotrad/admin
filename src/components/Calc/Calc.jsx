import React from "react";
import s from "./Calc.module.css";
import moreImg from "../../assets/icons/more.svg";
import { useTranslation } from "react-i18next";

const Selector = (props) => {
  const { t, i18n } = useTranslation(); //хук для смены языка
  const [isActive, setisActive] = React.useState(false);
  const [current, setCurrent] = React.useState(t("calc.Not_selected"));
  return (
    <div className={s.selector}>
      <div className={s.selector_title}>{props.title}:</div>
      <div className={s.selector_active} onClick={() => setisActive(!isActive)}>
        {current} <img src={moreImg} alt="moreImg" />
      </div>
      {isActive && (
        <div className={s.selectors}>
          {props.data.map((el) => {
            return (
              el != current && (
                <div
                  className={s.selector_item}
                  onClick={(e) => {
                    props.setInfo(el.name);
                    setCurrent(e.target.innerText);
                    setisActive(false);
                  }}
                >
                  {el.title}
                </div>
              )
            );
          })}
        </div>
      )}
    </div>
  );
};

const Radio = (props) => {
  return (
    <>
      <input
        type="radio"
        id={props.id}
        name="reinvest"
        value={props.value}
        className={s.radio}
        onChange={(e) => props.setReinvest(e.target.value)}
      />
      <label for={props.id} className={s.radio_button}>
        {props.value}
      </label>
    </>
  );
};

const Reinvest = (props) => {
  const { t, i18n } = useTranslation(); //хук для смены языка
  return (
    <div className={s.reinvest}>
      <div className={s.selector_title}>{t("calc.AUTOREINVEST")}:</div>
      <div className={s.reinvest_buttons}>
        <Radio setReinvest={props.setReinvest} value={100} id={"reinvest1"} />
        <Radio setReinvest={props.setReinvest} value={75} id={"reinvest2"} />
        <Radio setReinvest={props.setReinvest} value={50} id={"reinvest3"} />
        <Radio setReinvest={props.setReinvest} value={25} id={"reinvest4"} />
        <Radio setReinvest={props.setReinvest} value={0} id={"reinvest5"} />
      </div>
    </div>
  );
};

// days - период начислений
// percent - процент начислений
// money - сумма вложений
// reinvest - процент реинвестрования
// period - как часто начисляют процент (день, неделя, месяц)

function investCalc(days, percent, money, reinvest, period) {
  let count = Math.round(days / period); //30
  let cash = money; //1000
  let res = 0;
  for (let i = 0; i < count; i++) {
    let earned = (cash / 100) * percent; // 5
    res += earned;
    cash = cash + (earned / 100) * reinvest;
  }
  if (reinvest) return cash;
  return cash + res;
}
const marketsInfo = {
  crypto: {
    silver: {
      days: 200,
      min: 0.35,
      max: 0.7,
    },
    gold: {
      days: 180,
      min: 0.7,
      max: 0.9,
    },
    platinum: {
      days: 25,
      min: 1.4,
      max: 2.3,
    },
    period: 1,
  },
  goods: {
    silver: {
      days: 210,
      min: 2.45,
      max: 4.35,
    },
    gold: {
      days: 180,
      min: 4.6,
      max: 5.75,
    },
    platinum: {
      days: 95,
      min: 13.05,
      max: 16.8,
    },
    period: 7,
  },
  fonds: {
    silver: {
      days: 240,
      min: 10.12,
      max: 17.25,
    },
    gold: {
      days: 200,
      min: 21.0,
      max: 25.3,
    },
    platinum: {
      days: 85,
      min: 49.95,
      max: 91.75,
    },
    period: 30,
  },
};
const Calc = () => {
  const { t, i18n } = useTranslation(); //хук для смены языка
  const [branch, setBranch] = React.useState(null);
  const [plan, setPlan] = React.useState(null);
  const [invest, setInvest] = React.useState(null);
  const [reInvest, setReinvest] = React.useState(null);

  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(0);
  const [min_time, setMinTime] = React.useState(0);
  const [max_time, setMaxTime] = React.useState(0);

  React.useEffect(() => {
    if (branch && plan && invest) {
      setMinTime(
        investCalc(
          marketsInfo[branch][plan].days,
          marketsInfo[branch][plan].min,
          +invest,
          +reInvest,
          marketsInfo[branch].period
        ).toFixed(2)
      );
      setMaxTime(
        investCalc(
          marketsInfo[branch][plan].days,
          marketsInfo[branch][plan].max,
          +invest,
          +reInvest,
          marketsInfo[branch].period
        ).toFixed(2)
      );
      setMin(
        !+reInvest
          ? ((+invest / 100) * marketsInfo[branch][plan].min).toFixed(2)
          : "-"
      );
      setMax(
        !+reInvest
          ? ((+invest / 100) * marketsInfo[branch][plan].max).toFixed(2)
          : "-"
      );
    }
  }, [branch, plan, invest, reInvest]);
  return (
    <div className={s.calc}>
      <div className={`${s.block} ${s.top}`}>
        <div className={s.title}>{t("calc.title")}</div>
        <div className={s.text}>{t("calc.content")}</div>
      </div>
      <div className={s.main}>
        <div className={`${s.block} ${s.calcul}`}>
          <div className={s.title}> {t("calc.Profit_calculator")}</div>
          <div className={s.calc_main}>
            <Selector
              setInfo={setBranch}
              title={t("calc.Direction")}
              data={[
                { name: "crypto", title: t("invest.Cryptocurrency_market") },
                { name: "goods", title: t("invest.Commodity_market") },
                { name: "fonds", title: t("invest.Stock_market") },
              ]}
            />
            <Selector
              setInfo={setPlan}
              title={t("calc.Tariff_plan")}
              data={[
                { name: "silver", title: "SILVER" },
                { name: "gold", title: "GOLD" },
                { name: "platinum", title: "PLATINUM" },
              ]}
            />
            <div className={s.input_wrap}>
              <div className={s.selector_title}>{t("calc.Amount")}:</div>
              <div className={s.selector_active}>
                <input
                  type="number"
                  placeholder="100"
                  value={`${invest}`}
                  onChange={(e) => setInvest(e.target.value)}
                />
                TKN
              </div>
            </div>
            <Reinvest setReinvest={setReinvest} />
          </div>
        </div>
        <div className={`${s.block} ${s.min}`}>
          <div className={s.money}>{min} TKN</div>
          <div className={s.subtitle}>{t("calc.Minimum_accrual")}</div>
        </div>
        <div className={`${s.block} ${s.max}`}>
          <div className={s.money}>{max} TKN</div>
          <div className={s.subtitle}>{t("calc.Maximum_accrual")}</div>
        </div>
        <div className={`${s.block} ${s.min_year}`}>
          <div className={s.money}>{min_time} TKN</div>
          <div className={s.subtitle}>{t("calc.Minimum_profit")}</div>
        </div>
        <div className={`${s.block} ${s.max_year}`}>
          <div className={s.money}>{max_time} TKN</div>
          <div className={s.subtitle}>{t("calc.Maximum_profit")}</div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
