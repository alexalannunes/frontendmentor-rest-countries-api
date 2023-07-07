export interface Country {
  name: {
    common: string;
  };
  cca2: string;
  ccn3: string;
  cca3: string;
  capital: string[];
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
}
