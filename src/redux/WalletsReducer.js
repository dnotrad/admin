import BIT from "../assets/icons/BIT-icon.svg";
import USD from "../assets/icons/USD-icon.svg";
import DTN from "../assets/icons/DTN-icon.svg";
import EUR from "../assets/icons/EUR-icon.svg";
import LIT from "../assets/icons/LIT-icon.svg";
import ETH from "../assets/icons/ETH-icon.svg";
const SET_DATA = "SET_DATA";

let initialState = {
  currencies: [
    {
      icon: DTN,
      name: "DTN",
      fullname: "Dayton",
      cost: 10940.01,
      isToken: true,
      canBuy: true,
    },
    {
      icon: USD,
      name: "USD",
      fullname: "Dollar",
      cost: 79.87,
      isToken: false,
      canBuy: false,
    },
    {
      icon: EUR,
      name: "EUR",
      fullname: "Euro",
      cost: 89.87,
      isToken: false,
      canBuy: false,
    },
    {
      icon: BIT,
      name: "BTC",
      fullname: "Bitcoin",
      cost: 10940.01,
      isToken: false,
      canBuy: false,
    },
    {
      icon: LIT,
      name: "LIT",
      fullname: "Lightcoin",
      cost: 140.91,
      isToken: false,
      canBuy: false,
    },
    {
      icon: ETH,
      name: "ETH",
      fullname: "Ethirium",
      cost: 440.11,
      isToken: false,
      canBuy: false,
    },
  ],
  quotes: {
    DTNUSD: {
      quote: 2,
      data: [
        { name: "day", value: 10 },
        { name: "day", value: 2 },
        { name: "day", value: 4 },
        { name: "day", value: 5 },
        { name: "day", value: 2 },
        { name: "day", value: 6 },
        { name: "day", value: 8 },
        { name: "day", value: 5 },
        { name: "day", value: 1 },
        { name: "day", value: 9 },
      ],
    },
    USDEUR: {
      quote: 5,
      data: [
        { name: "day", value: 10 },
        { name: "day", value: 2 },
        { name: "day", value: 4 },
        { name: "day", value: 5 },
        { name: "day", value: 2 },
        { name: "day", value: 6 },
        { name: "day", value: 8 },
        { name: "day", value: 5 },
        { name: "day", value: 1 },
        { name: "day", value: 9 },
      ],
    },
    EURUSD: {
      quote: 14,
      data: [
        { name: "day", value: 10 },
        { name: "day", value: 2 },
        { name: "day", value: 4 },
        { name: "day", value: 5 },
        { name: "day", value: 2 },
        { name: "day", value: 6 },
        { name: "day", value: 8 },
        { name: "day", value: 5 },
        { name: "day", value: 1 },
        { name: "day", value: 9 },
      ],
    },
    BTCUSD: {
      quote: 24,
      data: [
        { name: "day", value: 10 },
        { name: "day", value: 2 },
        { name: "day", value: 4 },
        { name: "day", value: 5 },
        { name: "day", value: 2 },
        { name: "day", value: 6 },
        { name: "day", value: 8 },
        { name: "day", value: 5 },
        { name: "day", value: 1 },
        { name: "day", value: 9 },
      ],
    },
    LITUSD: {
      quote: 4,
      data: [
        { name: "day", value: 10 },
        { name: "day", value: 2 },
        { name: "day", value: 4 },
        { name: "day", value: 5 },
        { name: "day", value: 2 },
        { name: "day", value: 6 },
        { name: "day", value: 8 },
        { name: "day", value: 5 },
        { name: "day", value: 1 },
        { name: "day", value: 9 },
      ],
    },
    ETHUSD: {
      quote: 6,
      data: [
        { name: "day", value: 10 },
        { name: "day", value: 2 },
        { name: "day", value: 4 },
        { name: "day", value: 5 },
        { name: "day", value: 2 },
        { name: "day", value: 6 },
        { name: "day", value: 8 },
        { name: "day", value: 5 },
        { name: "day", value: 1 },
        { name: "day", value: 9 },
      ],
    },
  },
  history: {
    buy: [
      {
        ????????????????: true,
        ??????????: 56000.56,
        ????????????: "BTC",
        ????????: "16/04/2020",
        ????????????: true,
      },
      {
        ????????????????: true,
        ??????????: 89.56,
        ????????????: "EUR",
        ????????: "16/04/2020",
        ????????????: true,
      },
      {
        ????????????????: false,
        ??????????: 57000.56,
        ????????????: "BTC",
        ????????: "16/04/2020",
        ????????????: false,
      },
    ],
    internal: [
      {
        ????????????????: true,
        ??????????: 56000.56,
        ID: 3214336,
        ????????: "16/04/2020",
        ????????????: 1,
      },
      {
        ????????????????: true,
        ??????????: 89.56,
        ID: 3214336,
        ????????: "16/04/2020",
        ????????????: -1,
      },
      {
        ????????????????: false,
        ??????????: 57.56,
        ID: 3214546,
        ????????: "16/04/2020",
        ????????????: 0,
      },
      {
        ????????????????: false,
        ??????????: 57000.56,
        ID: 3214546,
        ????????: "16/04/2020",
        ????????????: 1,
      },
    ],
    rewards: [
      {
        "?????? ????????????????????????????": true,
        ??????????: 56000.56,
        ID: 3214336,
        ??????????: "1 ??????????",
        ????????: "16/04/2020",
      },
      {
        "?????? ????????????????????????????": false,
        ??????????: 560.56,
        ID: 3214336,
        ??????????: "1 ??????????",
        ????????: "16/04/2020",
      },
      {
        "?????? ????????????????????????????": true,
        ??????????: 560.56,
        ID: 3214336,
        ??????????: "2 ??????????",
        ????????: "16/04/2020",
      },
    ],
    selling: [
      {
        ????????????????: true,
        ??????????: 56000.56,
        ????????????: "BTC",
        ????????: "16/04/2020",
        ????????????: 1,
      },
      {
        ????????????????: true,
        ??????????: 89.56,
        ????????????: "EUR",
        ????????: "16/04/2020",
        ????????????: 0,
      },
      {
        ????????????????: false,
        ??????????: 57000.56,
        ????????????: "BTC",
        ????????: "16/04/2020",
        ????????????: -1,
      },
      {
        ????????????????: false,
        ??????????: 57000.56,
        ????????????: "BTC",
        ????????: "16/04/2020",
        ????????????: 1,
      },
    ],
  },
};

const WalletsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        quotes: action.data,
      };
    }
    default:
      return state;
  }
};

export const genData = (datas) => (dispatch) => {
  let count = 0;
  let new_currencies = datas.currencies;
  let new_quotes = {
    DTNUSD: {
      quote: datas.quotes.DTNUSD.quote,
      data: datas.quotes.DTNUSD.data,
    },
    USDEUR: {
      quote: datas.quotes.DTNUSD.quote,
      data: datas.quotes.DTNUSD.data,
    },
    EURUSD: {
      quote: datas.quotes.DTNUSD.quote,
      data: datas.quotes.EURUSD.data,
    },
    BTCUSD: {
      quote: datas.quotes.DTNUSD.quote,
      data: datas.quotes.BTCUSD.data,
    },
    LITUSD: {
      quote: datas.quotes.DTNUSD.quote,
      data: datas.quotes.LITUSD.data,
    },
    ETHUSD: {
      quote: datas.quotes.DTNUSD.quote,
      data: datas.quotes.ETHUSD.data,
    },
  };
  for (let item in datas["quotes"]) {
    let old_qoutes = new_quotes[item].quote;
    new_quotes[item].data.shift();
    new_quotes[item].data.push({
      name: "day",
      value: Math.random() * (2 - 0) + 0,
    });
    let now_quotes = new_quotes[item].data.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0
    );
    new_quotes[item].quote = now_quotes - old_qoutes;
    new_quotes[item].status = now_quotes > old_qoutes;
    new_currencies[count].cost =
      new_currencies[count].cost - old_qoutes / 10 + now_quotes / 10;
    count++;
  }
  let timer = setTimeout(
    () => dispatch(setData(new_quotes, new_currencies)),
    20000
  );
};

/* const setQuotes = (data, to) => ({
    type: SET_DATA, payload: {
        data,
        to}
})
 */
const setData = (data, currencies) => {
  return {
    type: SET_DATA,
    data,
    currencies,
  };
};

/* export const getData = (payload) => (dispatch) => {
    QuotesAPI.getQuotes(payload).then((response)=>
    dispatch(setQuotes(response, payload)));
    QuotesAPI.getStatistic(payload).then((response)=>
    dispatch(setData(response, payload)));
} */

export default WalletsReducer;
