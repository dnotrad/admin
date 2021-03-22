import React from 'react';
import s from "./Partners.module.css";
import bg from "./../../assets/img/partners-bg.png";
import Table from "./Tabel/Tabel";
import { Pie, Cell, PieChart, ResponsiveContainer } from "recharts";
import Circle from "./Circle";
import ProfitItem from "./../ProfitItem/ProfitItem";

// imgs
import invest from "./../../assets/icons/invests.svg";
import oborot from "./../../assets/icons/oborot.svg";
import partners from "./../../assets/icons/partners.svg";
import left from "./../../assets/icons/left-branch.svg";
import right from "./../../assets/icons/right-branch.svg";
import ReferalTable from './ReferalTable/ReferalTable';
import { useTranslation } from "react-i18next";

const Partners = () => {
    const { t, i18n } = useTranslation(); //хук для смены языка
    const [isInfo, setIsInfo] = React.useState(false);

    const data = [
        { name: 'A', value: 25 },
        { name: 'B', value: 75 },
    ];
    const data2 = [
        { name: 'A', value: 25 },
        { name: 'B', value: 75 },
    ];
    const COLORS = ['#F8F9FC', '#989EDA'];
    const COLORS2 = ['#F8F9FC', '#F6AC32'];

    const propsEx = {
        currentRang: 10,
        invest: 6957,
    }
    return (
        <div className={s.partners}>
            <div className={s.header}>
                <div className={s.nav}>
                    <div className={`${s.nav_link} ${isInfo ? "" : s.active}`} onClick={() => setIsInfo(false)}>{t("partners.my_career")}</div>
                    <div className={`${s.nav_link} ${isInfo ? s.active : ""}`} onClick={() => setIsInfo(true)}>{t("partners.info")}</div>
                </div>
                {isInfo &&
                    <div className={s.img}>
                        <img src={bg} alt="partners-bg" />
                    </div>}
                <div className={s.header_main}>
                    {!isInfo
                        ? <div className={s.text}>
                            {t("partners.content")}
                        </div>
                        : <div className={s.text}>
                            {t("partners.content2")}
                        </div>
                    }
                </div>
            </div>
            {isInfo && <div className={s.tables}>
                <Table />
            </div>}
            {!isInfo &&
                <div className={s.referals}>
                    <div className={s.referals_info}>
                        <div className={`${s.next_rang} ${s.referals_card}`}>
                            <div className={s.circles_wrapper}>
                                <PieChart width={114} height={114}>
                                    <Pie
                                        data={data}
                                        cx={"50%"}
                                        cy={"50%"}
                                        innerRadius={40}
                                        outerRadius={50}
                                        fill="#F8F9FC"
                                        paddingAngle={0}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Pie
                                        data={data2}
                                        cx={"50%"}
                                        cy={"50%"}
                                        innerRadius={52}
                                        outerRadius={57}
                                        fill="#F8F9FC"
                                        paddingAngle={0}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                                <div className={s.circles_info}>
                                    <div className={s.circles_number}>{propsEx.currentRang}</div>
                                    <div className={s.circles_number_info}>{t("partners.Current_rank")} </div>
                                </div>
                            </div>
                            <div className={s.next_rang_info}>
                                <div className={s.next_rang_title}>{t("partners.Next_rank")} {propsEx.currentRang + 1}</div>
                                <div className={s.next_rang_subtitle}>
                                    <Circle color="#F5A623" opacity=".35" />
                                    <span>7 500 TKN</span>
                                </div>
                                <div className={s.next_rang_subtitle}>
                                    <Circle color="#F5A623" opacity=".6" />
                                    <span>500 000 TKN</span>
                                </div>
                                <div className={s.next_rang_subtitle}>
                                    <Circle color="#F5A623" opacity="1" />
                                    <span>{t("partners.Rang")} {propsEx.currentRang + 1}</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.referals_info_main} ${s.referals_card}`}>
                            <ProfitItem img={invest} title={`${t("partners.Invested")}:`} content={"6 957.00 TKN"} />
                            <ProfitItem img={oborot} title={`${t("partners.Total_turnover")}:`} content={"6 957.00 TKN"} />
                            <ProfitItem img={partners} title={`${t("partners.Partners")}:`} content={"147"} />
                            <ProfitItem img={left} title={`${t("partners.Right_turnover")}:`} content={"467 957.49 TKN"} />
                            <ProfitItem img={right} title={`${t("partners.Left_turnover")}:`} content={"467 957.49 TKN"} />
                        </div>
                    </div>
                    <div className={`${s.referals_table} ${s.referals_card}`}>
                        <ReferalTable />
                    </div>
                </div>}
        </div>
    );
};
export default Partners;