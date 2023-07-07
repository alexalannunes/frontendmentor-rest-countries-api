export interface Country {
  name: {
    common: string;
  };
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  capital: string[];
  region: string;
  area: number;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
}
