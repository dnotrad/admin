import silver from "../assets/icons/silver.svg";
import gold from "../assets/icons/gold.svg";
import platinum from "../assets/icons/platinum.svg";
const SET_STATISTIC = "SET_STATISTIC";
const SET_REINVEST = "SET_REINVEST";
const SET_MONEY = "SET_MONEY";
const SET_INVEST = "SET_INVEST";
const SET_NAME = "SET_NAME";
const SET_SURNAME = "SET_SURNAME";
const SET_PHONE = "SET_PHONE";
const SET_EMAIL = "SET_EMAIL";
const SET_TELEGRAM = "SET_TELEGRAM";
const SET_WHATSAPP = "SET_WHATSAPP";
const SET_PERF_MONEY = "SET_PERF_MONEY";
const SET_EPHIRE = "SET_EPHIRE";
const SET_BITCOIN = "SET_BITCOIN";
const SET_LIGHT_COIN = "SET_LIGHT_COIN";

let initialState = {
  user: {
    name: "Alexacndr",
    surname: "Gudiks",
    phone: "+79815467895",
    email: "sitename@bk.ru",
    telegram: "@blablauf",
    whatsapp: "+79815467895",
    perfmoney: "7894-9874-4567-4561",
    butcoin: "7894-9874-4567-4561",
    ephire: "7894-9874-4567-4561",
    lightcoin: "7894-9874-4567-4561",
    refs: ["ID 2", "ID 3"]
  },
  id: 123456,
  money: 58340,
  invest: 55438,
  profit: 5438,
  all_income: 125438,
  percent: 100,
  data_statistic: {
    daily: {
      crypt: [
        { income: 3, time: 18.04 },
        { income: 8, time: 19.04 },
        { income: 7, time: 19.04 },
        { income: 3, time: 20.04 },
        { income: 5, time: 21.04 },
        { income: 10, time: 22.04 },
        { income: 12, time: 23.04 },
        { income: 14, time: 24.04 },
      ],
      commodyti: [
        { income: 1, time: 18.04 },
        { income: 2, time: 19.04 },
        { income: 3, time: 19.04 },
        { income: 8, time: 20.04 },
        { income: 6, time: 21.04 },
        { income: 9, time: 22.04 },
        { income: 12, time: 23.04 },
        { income: 16, time: 24.04 },
      ],
      stock: [
        { income: 3, time: 18.04 },
        { income: 2, time: 19.04 },
        { income: 5, time: 19.04 },
        { income: 8, time: 20.04 },
        { income: 6, time: 21.04 },
        { income: 10, time: 22.04 },
        { income: 11, time: 23.04 },
        { income: 13, time: 24.04 },
      ],
    },
    weekly: {
      crypt: [
        { income: 3, time: "06.04" },
        { income: 8, time: 13.04 },
        { income: 7, time: 20.04 },
        { income: 3, time: 27.04 },
        { income: 5, time: "03.04" },
        { income: 10, time: 10.04 },
        { income: 12, time: 17.04 },
        { income: 14, time: 24.04 },
      ],
      commodyti: [
        { income: 1, time: "06.04" },
        { income: 4, time: 13.04 },
        { income: 7, time: 20.04 },
        { income: 8, time: 27.04 },
        { income: 10, time: "03.04" },
        { income: 7, time: 10.04 },
        { income: 9, time: 17.04 },
        { income: 12, time: 24.04 },
      ],
      stock: [
        { income: 3, time: "06.04" },
        { income: 6, time: 13.04 },
        { income: 7, time: 20.04 },
        { income: 5, time: 27.04 },
        { income: 7, time: "03.04" },
        { income: 9, time: 10.04 },
        { income: 11, time: 17.04 },
        { income: 13, time: 24.04 },
      ],
    },
    monthly: {
      crypt: [
        { income: 3, time: "April 2020" },
        { income: 8, time: "May 2020" },
        { income: 7, time: "June 2020" },
        { income: 3, time: "July 2020" },
        { income: 5, time: "August 2020" },
        { income: 10, time: "September 2020" },
        { income: 12, time: "October 2020" },
        { income: 14, time: "November 2020" },
      ],
      commodyti: [
        { income: 3, time: "April 2020" },
        { income: 8, time: "May 2020" },
        { income: 7, time: "June 2020" },
        { income: 3, time: "July 2020" },
        { income: 5, time: "August 2020" },
        { income: 10, time: "September 2020" },
        { income: 12, time: "October 2020" },
        { income: 14, time: "November 2020" },
      ],
      stock: [
        { income: 3, time: "April 2020" },
        { income: 8, time: "May 2020" },
        { income: 7, time: "June 2020" },
        { income: 3, time: "July 2020" },
        { income: 5, time: "August 2020" },
        { income: 10, time: "September 2020" },
        { income: 12, time: "October 2020" },
        { income: 14, time: "November 2020" },
      ],
    },
    three_months: {
      crypt: [
        { income: 3, time: "June 2018" },
        { income: 8, time: "September 2018" },
        { income: 7, time: "December 2018" },
        { income: 3, time: "March 2019" },
        { income: 5, time: "June 2019" },
        { income: 10, time: "September 2019" },
        { income: 12, time: "January 2020" },
        { income: 14, time: "April 2020" },
      ],
      commodyti: [
        { income: 3, time: "June 2018" },
        { income: 8, time: "September 2018" },
        { income: 7, time: "December 2018" },
        { income: 3, time: "March 2019" },
        { income: 5, time: "June 2019" },
        { income: 10, time: "September 2019" },
        { income: 12, time: "January 2020" },
        { income: 14, time: "April 2020" },
      ],
      stock: [
        { income: 3, time: "June 2018" },
        { income: 8, time: "September 2018" },
        { income: 7, time: "December 2018" },
        { income: 3, time: "March 2019" },
        { income: 5, time: "June 2019" },
        { income: 10, time: "September 2019" },
        { income: 12, time: "January 2020" },
        { income: 14, time: "April 2020" },
      ],
    },
    year: {
      crypt: [
        { income: 3, time: "2013" },
        { income: 8, time: "2014" },
        { income: 7, time: "2015" },
        { income: 3, time: "2016" },
        { income: 5, time: "2017" },
        { income: 10, time: "2018" },
        { income: 12, time: "2019" },
        { income: 14, time: "2020" },
      ],
      commodyti: [
        { income: 3, time: "2013" },
        { income: 8, time: "2014" },
        { income: 7, time: "2015" },
        { income: 3, time: "2016" },
        { income: 5, time: "2017" },
        { income: 10, time: "2018" },
        { income: 12, time: "2019" },
        { income: 14, time: "2020" },
      ],
      stock: [
        { income: 3, time: "2013" },
        { income: 8, time: "2014" },
        { income: 7, time: "2015" },
        { income: 3, time: "2016" },
        { income: 5, time: "2017" },
        { income: 10, time: "2018" },
        { income: 12, time: "2019" },
        { income: 14, time: "2020" },
      ],
    },
  },
  data_divers: [
    { name: "crypt", value: 400 },
    { name: "commodyti", value: 600 },
    { name: "stockt", value: 100 },
  ],
  actives: [
    [
      {
        name: "Bitcoin",
        cap: "61023.0432",
        profit: 2.46,
        date: "21.04.2020",
        up: true,
      },
      {
        name: "Bitcoin",
        cap: "60980.0722",
        profit: 2.8,
        date: "21.04.2020",
        up: false,
      },
      {
        name: "Bitcoin",
        cap: "61900.0732",
        profit: 1.46,
        date: "21.04.2020",
        up: false,
      },
      {
        name: "Bitcoin",
        cap: "62013.0832",
        profit: 3.46,
        date: "21.04.2020",
        up: true,
      },
    ],
    [
      {
        name: "Smth",
        cap: "598.0432",
        profit: 2.46,
        date: "21.04.2020",
        up: false,
      },
      {
        name: "Smth",
        cap: "600.0722",
        profit: 2.8,
        date: "21.04.2020",
        up: false,
      },
      {
        name: "Smth",
        cap: "610.0732",
        profit: 1.46,
        date: "21.04.2020",
        up: false,
      },
      {
        name: "Smth",
        cap: "613.0832",
        profit: 3.46,
        date: "21.04.2020",
        up: true,
      },
    ],
    [
      {
        name: "LT",
        cap: "123.0432",
        profit: 5.46,
        date: "21.04.2020",
        up: true,
      },
      {
        name: "LT",
        cap: "80.0722",
        profit: 8.8,
        date: "21.04.2020",
        up: false,
      },
      {
        name: "LT",
        cap: "90.0732",
        profit: 34.46,
        date: "21.04.2020",
        up: false,
      },
      {
        name: "LT",
        cap: "201.0832",
        profit: 3.46,
        date: "21.04.2020",
        up: true,
      },
    ],
  ],
  profit_total: [
    { min: 4, max: 10, value: 7.63 },
    { min: 28, max: 70, value: 34.46 },
    { min: 124, max: 310, value: 137.9 },
  ],
  history: {
    active: [
      {
        icon: silver,
        name: "Silver",
        timing: 204,
        id: 1,
        history: {
          invest: 67,
          profit: 23.49,
          reinvest: 0,
          history_profit: [
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
          ],
          history_replenishments: [
            { Сумма: 56704.003, Статус: 1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: -1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: -1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
          ],
        },
      },
      {
        icon: gold,
        name: "Gold",
        timing: 101,
        id: 2,
        history: {
          invest: 67,
          profit: 23.49,
          reinvest: 0,
          history_profit: [
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
          ],
          history_replenishments: [
            { Сумма: 56704.003, Статус: 1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: -1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: -1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
          ],
        },
      },
    ],
    disactive: [
      {
        icon: silver,
        name: "Silver",
        timing: 0,
        id: 3,
        history: {
          invest: 67,
          profit: 23.49,
          reinvest: 0,
          history_profit: [
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
          ],
          history_replenishments: [
            { Сумма: 56704.003, Статус: 1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: -1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: -1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
          ],
        },
      },
      {
        icon: platinum,
        name: "Platinum",
        timing: 0,
        id: 4,
        history: {
          invest: 67,
          profit: 23.49,
          reinvest: 0,
          history_profit: [
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
            { Сумма: 56703.003, Процент: 2.46, Дата: "16.04.2020" },
          ],
          history_replenishments: [
            { Сумма: 56704.003, Статус: 1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: -1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: -1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 1, Дата: "16.04.2020" },
            { Сумма: 56704.003, Статус: 0, Дата: "16.04.2020" },
          ],
        },
      },
    ],
    
  },
  show_statistic: "weekly",
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATISTIC: {
      return {
        ...state,
        show_statistic: action.payload,
      };
    }
    case SET_REINVEST: {
      let new_history = {};
      let new_obj = {};
      let new_subobj = {};
      for (let item in state.history) {
        for (let item2 in state.history[item]) {
          new_obj = state.history[item].map((i) => {
            new_subobj = i;
            if (i.id === action.id) {
              new_subobj.history.reinvest = action.payload;
            }
            return new_subobj;
          });
        }
        new_history[item] = new_obj;
        new_obj = {};
      }

      return {
        ...state,
        history: new_history,
      };
    }
    case SET_MONEY: {
      console.log(action.payload);
      return {
        ...state,
        money: action.payload,
      };
    }
    case SET_INVEST: {
      return {
        ...state,
        invest: action.payload,
      };
    }
    case SET_NAME: {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    }
    case SET_SURNAME: {
      return {
        ...state,
        user: {
          ...state.user,
          surname: action.payload,
        },
      };
    }
    case SET_PHONE: {
      return {
        ...state,
        user: {
          ...state.user,
          phone: action.payload,
        },
      };
    }
    case SET_EMAIL: {
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload,
        },
      };
    }
    case SET_TELEGRAM: {
      return {
        ...state,
        user: {
          ...state.user,
          telegram: action.payload,
        },
      };
    }
    case SET_WHATSAPP: {
      return {
        ...state,
        user: {
          ...state.user,
          whatsapp: action.payload,
        },
      };
    }
    case SET_BITCOIN: {
      return {
        ...state,
        user: {
          ...state.user,
          butcoin: action.payload,
        },
      };
    }
    case SET_EPHIRE: {
      return {
        ...state,
        user: {
          ...state.user,
          ephire: action.payload,
        },
      };
    }
    case SET_LIGHT_COIN: {
      return {
        ...state,
        user: {
          ...state.user,
          lightcoin: action.payload,
        },
      };
    }
    case SET_PERF_MONEY: {
      return {
        ...state,
        user: {
          ...state.user,
          perfmoney: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
export const setShowStatistic = (data) => ({
  type: SET_STATISTIC,
  payload: data,
});

export const setReinvest = (data, id) => ({
  type: SET_REINVEST,
  payload: data,
  id,
});

export const setMoney = (data) => ({
  type: SET_MONEY,
  payload: data,
});

export const setInvest = (data) => ({
  type: SET_INVEST,
  payload: data,
});
// profile data actions
export const setName = (data) => ({
  type: SET_NAME,
  payload: data,
});
export const setSurName = (data) => ({
  type: SET_SURNAME,
  payload: data,
});
export const setPhone = (data) => ({
  type: SET_PHONE,
  payload: data,
});

export const setEmail = (data) => ({
  type: SET_EMAIL,
  payload: data,
});
export const setTelegram = (data) => ({
  type: SET_TELEGRAM,
  payload: data,
});
export const setWhatsapp = (data) => ({
  type: SET_WHATSAPP,
  payload: data,
});

export const setPerfMon = (data) => ({
  type: SET_PERF_MONEY,
  payload: data,
});
export const setEphire = (data) => ({
  type: SET_EPHIRE,
  payload: data,
});
export const setBitcoin = (data) => ({
  type: SET_BITCOIN,
  payload: data,
});
export const setLightCoin = (data) => ({
  type: SET_LIGHT_COIN,
  payload: data,
});
export default ProfileReducer;
