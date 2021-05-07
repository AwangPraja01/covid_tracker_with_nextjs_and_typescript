export interface ICountryData {
  coordinates: { latitude: string; longitude: string };
  country: string;
  county: null;
  province: null;
  stats: { confirmed: number; deaths: number; recovered: number };
  updatedAt: string;
}
