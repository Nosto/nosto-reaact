import { createContext } from "react";

interface NostoInterface {
  account: string;
  setAccount: (account: string) => void;
  currentVariation: string;
  setCurrentVariation: (variation: string) => void;
  country: string;
  setCountry: (country: string) => void;
}

/* tslint:disable:no-empty */
export const NostoContext = createContext<NostoInterface>({
  // @ts-ignore
  account: "",
  // @ts-ignore
  setAccount: (account) => {},
  // @ts-ignore
  currentVariation: "",
  // @ts-ignore
  setCurrentVariation: (variation) => {},
  country: "",
  setCountry: (country) => {}
});
/* tslint:enable:no-empty */
