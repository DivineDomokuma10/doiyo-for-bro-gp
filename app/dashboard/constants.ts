export const TRADE_AD_LIST = [
  {
    avatar: '/assets/Avatar.svg',
    userName: 'Patron',
    numberOfTrades: 300,
    paymentMethods: ['Access Bank', 'GT Bank', 'Keystone Bank'],
    location: 'Nigeria',
    state: 'Bayelsa',
    minimumLimit: 100,
    maximumLimit: 8500,
    price: 1850,
    percent: 5,
    link: 'Buy',
    _id: '1'
  },
  {
    avatar: '/assets/ese.svg',
    userName: 'Ese',
    numberOfTrades: 350,
    paymentMethods: ['GT Bank', 'Access Bank', 'Fidelity Bank'],
    location: 'Nigeria',
    state: 'Delta',
    minimumLimit: 100,
    maximumLimit: 10000,
    price: 1090,
    percent: 4,
    link: 'Buy',
    _id: '2'
  }
];
export const SellTradeAdList = [
  {
    avatar: '/assets/Avatar.svg',
    userName: 'Patron',
    numberOfTrades: 300,
    paymentMethods: ['Access Bank', 'GT Bank', 'Keystone Bank'],
    location: 'Nigeria',
    state: 'Bayelsa',
    minimumLimit: 100,
    maximumLimit: 9000,
    price: 1800,
    percent: 5,
    link: 'Sell',
    _id: '1'
  },
  {
    avatar: '/assets/ese.svg',
    userName: 'Ese',
    numberOfTrades: 350,
    paymentMethods: ['GT Bank', 'Access Bank', 'Fidelity Bank'],
    location: 'Nigeria',
    state: 'Delta',
    minimumLimit: 100,
    maximumLimit: 1000,
    price: 1000,
    percent: 4,
    link: 'Sell',
    _id: '2'
  }
];

export enum TRADE_TYPE {
  BUY = 'BUY',
  SELL = 'SELL'
}
