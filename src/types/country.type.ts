export interface Country {
  name: {
    common: string;
    nativeName?: {
      ara?: {
        common?: string;
      };
    };
  };
  tld?: string[];
  currencies?: Record<
    string,
    | {
        name?: string;
        symbol?: string;
      }
    | undefined
  >;
  cca2: string;
  ccn3?: string;
  cca3?: string;
  capital?: string[];
  region: string;
  languages?: Record<string, string | undefined>;
  subRegion?: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
}
