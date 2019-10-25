export type Disposition =
  | 'surly'
  | 'ambivalent'
  | 'distant'
  | 'snuggly'
  | 'sleepy';
//enum type
export type Summary =
  | 'Cloudy'
  | 'Freezing'
  | 'Scattered Showers'
  | 'Sunny'
  | 'Snowy'
  | 'Windy';

export interface ICat {
  name: string;
  disposition: Disposition;
  fedDisposition: Disposition;
  img: string;
  isFed: boolean;
}

export interface IWeather{
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: Summary;
}