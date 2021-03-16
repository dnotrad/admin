import React from 'react';
import s from "./Header.module.css";
import clockImg from "../../assets/icons/clock.svg";
import walletImg from "../../assets/icons/wallet.svg";
import userImg from "../../assets/img/user.jpg";
// propsExaple

const propsEx = {
    time: "21:35:59",
    city: "Washington",
    currentLang: "ENG",
    otherLangs: ["RUS", "UKR"],
    userName: "Username",
    userStatus: "Expert",
    userBalance: "T 5 438.00",
}
const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.left}>
                <div className={s.clock}>
                    <div className={s.clock_img}>
                        <img src={clockImg} alt="clockImg" />
                    </div>
                    <div className={s.clock_info}>
                        <div className={s.clock_time}>
                            {propsEx.time}
                        </div>
                        <div className={s.clock_city}>
                            {propsEx.city}
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.right}>
                <div className={s.language}>{propsEx.currentLang}</div>
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
                        <div className={s.wallet_title}>Ваш баланс</div>
                        <div className={s.wallet_money}>{propsEx.userBalance}</div>
                    </div>
                </div>
                <div className={s.burger}></div>
            </div>
        </div>
    );
};

export default Header;