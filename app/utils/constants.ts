export const LOGO_PATH = '/assets/doiyo_primary_logo.png';

export enum NUMBERS {
  MINUS_ONE = -1,
  ZERO = 0,
  ZERO_POINT_ONE = 0.1,
  ZERO_POINT_TWO_FIVE = 0.25,
  ZERO_POINT_FIVE = 0.5,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FOUR_POINT_FIVE = 4.5,
  FIVE = 5,
  SIX = 6,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
  ELEVEN = 11,
  TWELVE = 12,
  FIFTEEN = 15,
  TWENTY = 20,
  THIRTY = 30,
  FORTY = 40,
  FIFTY = 50,
  SIXTY = 60,
  ONE_HUNDRED = 100,
  FIVE_HUNDRED = 500,
  SEVEN_HUNDRED = 700,
  ONE_THOUSAND = 1000,
  THREE_THOUSAND = 3000,
  FIVE_THOUSAND = 5000
}

export const PASSWORD_FORMAT = [
  '8 character',
  'an uppercase letter',
  'A lowercase letter',
  'A special character(,{}[]<>;+=!@#$%^&*():?)',
  'A number'
];

export const TABLE_HEAD_TITLES = [
  { text: 'name', hasArrow: false },
  { text: 'type/id', hasArrow: false },
  { text: 'currency', hasArrow: false },
  { text: 'payment method', hasArrow: true },
  { text: 'amount', hasArrow: true },
  { text: 'transaction date', hasArrow: true },
  { text: 'statue', hasArrow: true }
];

export enum TRADE_DURATION {
  TEN_MINS = 10,
  TWENTY_MINS = 20,
  THIRTY_MINS = 30,
  FORTY_MINS = 40,
  SIXTY_MINS = 60,
  TWO_HOURS = 120,
  FOUR_HOURS = 240,
  EIGHT_HOURS = 480
}

export enum TRADE_STATUS {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DISPUTED = 'DISPUTED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum STATUS_CODES {
  success = 200,
  not_found = 404,
  bad_request = 400,
  created = 201
}

export enum SUPPORTED_CURRENCIES {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  USDT = 'USDT'
}

export const CURRENCIES = [
  {
    label: 'US Dollars',
    value: 'USD',
    symbol: '$',
    image: '/assets/usd-flag.jpg'
  },
  {
    label: 'Euros',
    value: 'EUR',
    symbol: '€',
    image: '/assets/usd-flag.jpg'
  },
  {
    label: 'British Pounds',
    value: 'GBP',
    symbol: '£',
    image: '/assets/usd-flag.jpg'
  },
  {
    label: 'Tether Coin',
    value: 'USDT',
    symbol: '₮',
    image: '/assets/usdt_icon.svg'
  }
];
export const TIMER = [
  {
    name: '10 Mins',
    value: '10'
  },
  {
    name: '20 Mins',
    value: '20'
  },
  {
    name: '20 Mins',
    value: '20'
  },
  {
    name: '30 Mins',
    value: '30'
  },
  {
    name: '40 Mins',
    value: '40'
  }
];

export enum PAYMENT_METHOD {
  PERFECT_MONEY = 'PERFECT_MONEY',
  CASH_DEPOSIT = 'CASH_DEPOSIT',
  ACCESS_BANK = 'ACCESS_BANK',
  ZENITH_BANK = 'ZENITH_BANK',
  BINANCE_PAY = 'BINANCE_PAY',
  SKRILL = 'SKRILL',
  ZELLE = 'ZELLE',
  WISE = 'WISE',
  GTB = 'GTB'
}

export enum TRADE_POINT {
  CREATOR_TO_ACCEPT_TRADE = 'CTAT',
  BUYER_TO_MAKE_PAYMENT = 'BTMP',
  DOIYO_TO_CONFIRM_RECEIVED = 'DTCR',
  SELLER_TO_MAKE_PAYMENT = 'STMP',
  BUYER_TO_CONFIRM_RECEIVED = 'BTCR',
  DOIYO_TO_MAKE_PAYMENT = 'DTMP',
  SELLER_TO_CONFIRM_RECEIVED = 'STCR'
}

export const PAYMENT_METHODS = [
  {
    label: 'Access Bank',
    value: 'ACCESS_BANK'
  },
  {
    label: 'Zenith Bank',
    value: 'ZENITH_BANK'
  },
  {
    label: 'GTB',
    value: 'GTB'
  },
  {
    label: 'Skrill',
    value: 'SKRILL'
  },
  {
    label: 'Perfect Money',
    value: 'PERFECT_MONEY'
  },
  {
    label: 'Wise',
    value: 'WISE'
  },
  {
    label: 'Binance Pay',
    value: 'BINANCE_PAY'
  },
  { label: 'Zelle', value: 'ZELLE' }
];

export const CREATE_TRADE_AD_TYPE = [
  {
    mainText: 'Buy FX',
    subText: 'Your offer would be listed in the Sell section of Browse Trade ads',
    active: false,
    id: 'BUY'
  },
  {
    mainText: 'Sell FX',
    subText: 'Your offer would be listed in the Buy section of Browse Trade ads',
    active: false,
    id: 'SELL'
  }
];

export const EX_CURRENCIES = [
  {
    currency: 'US Dollar $',
    img: '/flag_dollar.svg',
    active: false,
    id: 'USD'
  },
  {
    currency: 'GBP Pounds Sterling £',
    img: '/flag_pounds.svg',
    active: false,
    id: 'GBP'
  },
  {
    currency: 'Euro €',
    img: '/flag_euro.svg',
    active: false,
    id: 'EUR'
  },
  {
    currency: 'Tether Coin ₮',
    id: 'USDT',
    img: '/assets/usdt_icon.svg'
  }
];
