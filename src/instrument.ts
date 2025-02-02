import { match, P } from 'ts-pattern';
import { LOCALES } from './service/constants';

const INDEX_PATH = '/';
const HOME_WITH_LOCALE = LOCALES.map((l) => `/${l}`);
declare global {
  interface Window {
    DD_RUM: any;
  }
}
export const getViewName = (pathName: string, page?: "article" | "microsoft" | "paquier" | undefined) => {
  const viewName: string = match({ pathName, page })
    .with({ pathName: INDEX_PATH, page: undefined }, () => "/home-EN") // Home English (default)
    .with({ pathName: P.when((name) => HOME_WITH_LOCALE.includes(name)), page: undefined }, ({ pathName }) => `/home-${pathName.replace('/', '').toUpperCase()}`) // Home other locales
    .with({ pathName: P.select(), page: undefined }, (p) => p) // /Illustrations and /Animations
    .with({ pathName: INDEX_PATH, page: P.select() }, (p) => `/${p}-EN`) // Article, Microsoft, Paquier English (default)
    .with({ pathName: P.when((name) => HOME_WITH_LOCALE.includes(name)), page: P.not(undefined) }, ({ pathName, page }) => `/${page}-${pathName.replace('/', '').toUpperCase()}`).otherwise(() => "/home-EN"); // Article, Microsoft, Paquier other locales
  return viewName;
}

export const startNewView = (pathName: string, page?: "article" | "microsoft" | "paquier" | undefined) => {
  const viewName = getViewName(pathName, page);
  window.DD_RUM.startView({
    name: viewName,
  })
}
