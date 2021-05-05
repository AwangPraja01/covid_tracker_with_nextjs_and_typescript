export interface IData {
  country: string;
  date: string;
  latitude: number;
  longitude: number;
  provinces: Array<IProvince>;
}

export interface IProvince {
  active: number;
  confirmed: number;
  deaths: number;
  province: string;
  recovered: number;
}
