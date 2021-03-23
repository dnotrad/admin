import React, { useRef, useState } from "react";
import s from "./Profile.module.css";
import Input from "./Input/Input";
import userImg from "./../../assets/img/userBig.jpg";
import downloadImg from "./../../assets/icons/download.svg";
import BlueButton from "./../btns/BlueButton";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  setName,
  setSurName,
  setPhone,
  setEmail,
  setTelegram,
  setWhatsapp,
  setLightCoin,
  setPerfMon,
  setBitcoin,
  setEphire
} from "../../redux/ProfileReducer";

const Profile = () => {
  const { t, i18n } = useTranslation(); //хук для смены языка
  const [isPassport, setIsPassport] = useState(false);
  const [isPropiska, setisPropiska] = useState(false);
  const [isSelfie, setisSelfie] = useState(false);

  const name = useSelector((state) => state.profile.user.name);
  const surname = useSelector((state) => state.profile.user.surname);
  const phone = useSelector((state) => state.profile.user.phone);
  const email = useSelector((state) => state.profile.user.email);
  const telegram = useSelector((state) => state.profile.user.telegram);
  const whatsapp = useSelector((state) => state.profile.user.whatsapp);
  const perfmoney = useSelector((state) => state.profile.user.perfmoney);
  const butcoin = useSelector((state) => state.profile.user.butcoin);
  const ephire = useSelector((state) => state.profile.user.ephire);
  const lightcoin = useSelector((state) => state.profile.user.lightcoin);

  return (
    <div className={s.profile}>
      <div className={s.card}>
        <div className={s.card_main}>
          <div className={s.card_user}>
            <div className={s.card_user_title}>
              {t("settings.Profile_photo")}
            </div>
            <div className={s.card_user_img}>
              <img src={userImg} alt="" />
            </div>
            <div className={s.card_user_buttons}>
              <BlueButton isFill="true" title={t("settings.Download")} />
              <BlueButton title={t("settings.Delete")} />
            </div>
          </div>
          <div className={s.inputs_wrap}>
            <div className={s.card_title}>{t("settings.Personal_data")}</div>
            <div className={s.inputs}>
              <Input
                fn={setName}
                title={t("settings.First_name")}
                value={name}
              />
              <Input fn={setEmail} title="E-mail" value={email} />
              <Input
                fn={setSurName}
                title={t("settings.Last_name")}
                value={surname}
              />
              <Input fn={setTelegram} title="Telegram" value={telegram} />
              <Input fn={setPhone} title={t("settings.Phone")} value={phone} />
              <Input fn={setWhatsapp} title="Whatsapp" value={whatsapp} />
            </div>
          </div>
        </div>
      </div>
      <div className={s.card}>
        <div className={s.card_title}>{t("settings.Payment_data")}</div>
        <div className={s.card_main}>
          <div className={s.inputs}>
            <Input fn={setPerfMon} title="PerfectMoney" value={perfmoney} />
            <Input fn={setBitcoin} title="Bitcoin" value={butcoin} />
            <Input fn={setEphire} title="Ephire" value={ephire} />
            <Input fn={setLightCoin} title="Lightcoin" value={lightcoin} />
          </div>
        </div>
      </div>
      <div className={s.card}>
        <div className={s.card_title}>{t("settings.Verification")}</div>
        <div className={s.card_main}>
          <div className={s.downloaders}>
            <div className={s.downloader}>
              <input
                type="file"
                id="passport"
                className={s.downloader_button}
                onChange={() => setIsPassport(true)}
              />
              <label for="passport" className={s.downloader_body}>
                <div
                  className={`${s.downloader_svg} ${
                    isPassport ? s.active : ""
                  }`}
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M21.3334 19V5C21.3334 3.9 20.4334 3 19.3334 3H5.33337C4.23337 3 3.33337 3.9 3.33337 5V19C3.33337 20.1 4.23337 21 5.33337 21H19.3334C20.4334 21 21.3334 20.1 21.3334 19ZM9.23337 13.98L11.3334 16.51L14.4334 12.52C14.6334 12.26 15.0334 12.26 15.2334 12.53L18.7434 17.21C18.9934 17.54 18.7534 18.01 18.3434 18.01H6.35337C5.93337 18.01 5.70337 17.53 5.96337 17.2L8.45337 14C8.64337 13.74 9.02337 13.73 9.23337 13.98Z"
                        fill="#8C93D6"
                      />
                    </g>
                  </svg>
                </div>
                <span>{t("settings.Passport_photo")}</span>
                <img src={downloadImg} alt="downloadImg" />
              </label>
            </div>
            <div className={s.downloader}>
              <input
                type="file"
                id="propiska"
                className={s.downloader_button}
                onChange={() => setisPropiska(true)}
              />
              <label for="propiska" className={s.downloader_body}>
                <div
                  className={`${s.downloader_svg} ${
                    isPropiska ? s.active : ""
                  }`}
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M21.3334 19V5C21.3334 3.9 20.4334 3 19.3334 3H5.33337C4.23337 3 3.33337 3.9 3.33337 5V19C3.33337 20.1 4.23337 21 5.33337 21H19.3334C20.4334 21 21.3334 20.1 21.3334 19ZM9.23337 13.98L11.3334 16.51L14.4334 12.52C14.6334 12.26 15.0334 12.26 15.2334 12.53L18.7434 17.21C18.9934 17.54 18.7534 18.01 18.3434 18.01H6.35337C5.93337 18.01 5.70337 17.53 5.96337 17.2L8.45337 14C8.64337 13.74 9.02337 13.73 9.23337 13.98Z"
                        fill="#8C93D6"
                      />
                    </g>
                  </svg>
                </div>
                <span>{t("settings.Residence_permit")}</span>
                <img src={downloadImg} alt="downloadImg" />
              </label>
            </div>
            <div className={s.downloader}>
              <input
                type="file"
                id="selfie"
                className={s.downloader_button}
                onChange={() => setisSelfie(true)}
              />
              <label for="selfie" className={s.downloader_body}>
                <div
                  className={`${s.downloader_svg} ${isSelfie ? s.active : ""}`}
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M21.3334 19V5C21.3334 3.9 20.4334 3 19.3334 3H5.33337C4.23337 3 3.33337 3.9 3.33337 5V19C3.33337 20.1 4.23337 21 5.33337 21H19.3334C20.4334 21 21.3334 20.1 21.3334 19ZM9.23337 13.98L11.3334 16.51L14.4334 12.52C14.6334 12.26 15.0334 12.26 15.2334 12.53L18.7434 17.21C18.9934 17.54 18.7534 18.01 18.3434 18.01H6.35337C5.93337 18.01 5.70337 17.53 5.96337 17.2L8.45337 14C8.64337 13.74 9.02337 13.73 9.23337 13.98Z"
                        fill="#8C93D6"
                      />
                    </g>
                  </svg>
                </div>
                <span>{t("settings.Selfie")}</span>
                <img src={downloadImg} alt="downloadImg" />
              </label>
            </div>
          </div>
          <BlueButton title={t("settings.Send")} isFill="true" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
