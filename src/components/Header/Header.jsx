import React from "react";
import s from "./Header.module.css";
import clockImg from "../../assets/icons/clock.svg";
import walletImg from "../../assets/icons/wallet.svg";
import userImg from "../../assets/img/user.jpg";
import logo from "../../assets/img/logo-main.svg";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import Navigation from "../Navigation/Navigation";
// propsExaple

export const Lang = () => {
  const { t, i18n } = useTranslation(); //хук для смены языка

  const [currentLang, setCurrentLang] = React.useState(i18n.language);
  const changeLanguage = (language) => {
    // меняет язык, принимает "ru" или "en"
    i18n.changeLanguage(language);
  };
  // смена языка в шапке
  React.useEffect(() => {
    if (i18n.language == "ru") setCurrentLang("RUS");
    else setCurrentLang("ENG");
  }, [i18n.language]);
  return (
    <>
      {currentLang == "RUS" ? (
        <div className={s.language} onClick={() => changeLanguage("en")}>
          {currentLang}
        </div>
      ) : (
        <div className={s.language} onClick={() => changeLanguage("ru")}>
          {currentLang}
        </div>
      )}
    </>
  );
};

const propsEx = {
  time: "21:35:59",
  city: "Washington",
  currentLang: "rus",
  otherLangs: ["RUS", "UKR"],
  userName: "Username",
  userStatus: "Expert",
  userBalance: "T 5 438.00",
};
const Header = (props) => {
  const { t, i18n } = useTranslation(); //хук для смены языка
  const data = useSelector(state => state.profile);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={s.header}>
      <div className={s.left}>
        <div className={s.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={s.clock}>
          <div className={s.clock_img}>
            <img src={clockImg} alt="clockImg" />
          </div>
          <div className={s.clock_info}>
            <div className={s.clock_time}>{propsEx.time}</div>
            <div className={s.clock_city}>{propsEx.city}</div>
          </div>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.lang_wrap}>
          <Lang />
        </div>
        <div className={s.user}>
          <div className={s.user_img}>
            <img src={userImg} alt="userImg" />
          </div>
          <div className={s.user_info}>
            <div className={s.user_name}>{propsEx.userName}</div>
            <div className={s.user_status}>{propsEx.userStatus}</div>
          </div>
        </div>
        <div className={s.wallet}>
          <div className={s.walletImg}>
            <img src={walletImg} alt="walletImg" />
          </div>
          <div className={s.wallet_info}>
            <div className={s.wallet_title}>{t("header.balance")}</div>
            <div className={s.wallet_money}>{data.money.toFixed(2)}</div>
          </div>
        </div>
        <div
          className={`${s.burger} ${isOpen ? s.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={s.nav}>
            <Navigation/>
          </div>
          <div className={s.burger_line}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
