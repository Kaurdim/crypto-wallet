
export const DEFAULT_PREDEFINED_INTERVALS = [
  { format: 'DD.MM', name: 'day', text: 'Day', value: 24, changes: '24h Changes' },
  { format: 'DD.MM', name: 'week', text: 'Week', value: 168, changes: '7d Changes' },
  { format: 'DD.MM.YY', name: 'month', text: 'Month', value: 720, changes: '1m Changes' }
];


//actions constatns
export const SET_COIN_CURRENT_PRICE = 'SET_COIN_CURRENT_PRICE';
export const SET_COIN_SUBSTRACT_PRICE = 'SET_COIN_SUBSTRACT_PRICE';

export const SELECT_COIN = 'SELECT_COIN';
export const SET_CHART_DATA = 'SET_CHART_DATA';


export const SET_INTERVAL = 'SET_INTERVAL';

export const FETCH_FINISH_ERROR = 'FETCH_FINISH_ERROR';
export const FETCH_FINISH_SUCCESS = 'FETCH_FINISH_SUCCESS'