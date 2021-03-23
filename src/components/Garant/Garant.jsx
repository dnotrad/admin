import React from "react";
import { Table } from "../table/Table";
import s from "./Garant.module.css";
import userImg from "./../../assets/img/user.jpg";
import acceptImg from "./../../assets/icons/accept.svg";
import requestImg from "./../../assets/icons/request.svg";
import DTNIcon from "./../../assets/icons/DTN-icon-small.svg";
import Button from "../btns/BlueButton";
import Input from "../Profile/Input/Input";
import { useTranslation } from "react-i18next";
const Garant = () => {
  const { t, i18n } = useTranslation(); //хук для смены языка
  return (
    <div className={s.garant}>
      <div className={`${s.block} ${s.top}`}>
        <div className={s.title}>{t("garant.title")}</div>
        <div className={s.text}>{t("garant.content")}</div>
      </div>
      <div className={s.blocks}>
        <div className={s.block}>
          <div className={s.title}>{t("garant.Active_request")}</div>
          <div className={s.main}>
            <div className={s.block_wrap}>
              <div className={s.user}>
                <div className={s.user_img}>
                  <img src={userImg} alt="userImg" />
                </div>
                <div className={s.user_info}>
                  <div className={s.user_name}>Username</div>
                  <div className={s.user_id}>ID 785645</div>
                </div>
              </div>
              <div className={s.deal}>
                <div className={s.deal_img}>
                  <img src={DTNIcon} alt="DTNIcon" />
                </div>
                <div className={s.deal_info}>
                  <div className={s.deal_title}>{t("garant.Deal_amount")}</div>
                  <div className={s.deal_count}>67.00 TKN</div>
                </div>
              </div>
            </div>

            <Button img={acceptImg} title={t("garant.Confirm")} />
          </div>
        </div>
        <div className={s.block}>
          <div className={s.title}>{t("garant.Deal_request")}</div>
          <div className={s.main}>
            <div className={s.block_wrap}>
              <div className={s.input}>
                <div className={s.input_title}>ID:</div>
                <input type="text" pattern="\d[0-9]" placeholder="00-00-00" />
              </div>
              <div className={s.input}>
                <div className={s.input_title}>{t("garant.Amount")}:</div>
                <input type="text" placeholder="67.00 TKN" />
              </div>
            </div>
            <Button img={requestImg} title={t("garant.Request")} />
          </div>
        </div>
      </div>
      <div className={s.block}>
        <div className={s.title}>{t("garant.Deals_history")}</div>
        <Table
          columns={6}
          rows={10}
          data={[
            {
              "ID сделки": "1",
              "Дата запуска": "1",
              "Дата завершения": "1",
              Осталось: "1",
              "Внесенная сумма": "1",
              Заработано: "1",
            },
            {
              "ID сделки": "ID 328849",
              "Дата запуска": "16/02/2020",
              "Дата завершения": "16/02/2020",
              Осталось: "90 дней",
              "Внесенная сумма": "$ 56 703.003",
              Заработано: "$ 56 703.003",
            },
            {
              "ID сделки": "ID 328849",
              "Дата запуска": "16/02/2020",
              "Дата завершения": "16/02/2020",
              Осталось: "90 дней",
              "Внесенная сумма": "$ 56 703.003",
              Заработано: "$ 56 703.003",
            },
            {
              "ID сделки": "ID 328849",
              "Дата запуска": "16/02/2020",
              "Дата завершения": "16/02/2020",
              Осталось: "90 дней",
              "Внесенная сумма": "$ 56 703.003",
              Заработано: "$ 56 703.003",
            },
            {
              "ID сделки": "ID 328849",
              "Дата запуска": "16/02/2020",
              "Дата завершения": "16/02/2020",
              Осталось: "90 дней",
              "Внесенная сумма": "$ 56 703.003",
              Заработано: "$ 56 703.003",
            },
            {
              "ID сделки": "ID 328849",
              "Дата запуска": "16/02/2020",
              "Дата завершения": "16/02/2020",
              Осталось: "90 дней",
              "Внесенная сумма": "$ 56 703.003",
              Заработано: "$ 56 703.003",
            },
            {
              "ID сделки": "ID 328849",
              "Дата запуска": "16/02/2020",
              "Дата завершения": "16/02/2020",
              Осталось: "90 дней",
              "Внесенная сумма": "$ 56 703.003",
              Заработано: "$ 56 703.003",
            },
            {
              "ID сделки": "ID 328849",
              "Дата запуска": "16/02/2020",
              "Дата завершения": "16/02/2020",
              Осталось: "90 дней",
              "Внесенная сумма": "$ 56 703.003",
              Заработано: "$ 56 703.003",
            },
            {
              "ID сделки": "ID 328849",
              "Дата запуска": "16/02/2020",
              "Дата завершения": "16/02/2020",
              Осталось: "90 дней",
              "Внесенная сумма": "$ 56 703.003",
              Заработано: "$ 56 703.003",
            },
            {
              "ID сделки": "ID 328849",
              "Дата запуска": "16/02/2020",
              "Дата завершения": "16/02/2020",
              Осталось: "90 дней",
              "Внесенная сумма": "$ 56 703.003",
              Заработано: "$ 56 703.003",
            },
          ]}
          colour={["#FFFFFF", "#FBFBFD"]}
          withSort={true}
        />
      </div>
    </div>
  );
};

export default Garant;
