/** FLICKR */
export const FLICKR_USER_ID = '185143642@N07';

export enum SizeKeys {
  small = '_n',
  original = '_o',
  medium500 = '_m',
  medium800 = '_c',
  large = '_l'
}

export const PHOTOSET_ID = '72157713844633802';
export const MS_PHOTOSET_ID = '72157719163846608';
export const PAQUIER_PHOTOSET_ID = '72177720302387065';

export const imageSectionConfigurations = [
  { maxWidth: 340, cols: 1, margin: 2 },
  { maxWidth: 1024, cols: 2, margin: 5 },
  { minWidth: 1025, cols: 5, margin: 5 },
];

export const illustrationsConfigurations = [
  { maxWidth: 340, cols: 2, margin: 2 },
  { maxWidth: 1024, cols: 4, margin: 2 },
  { minWidth: 1025, cols: 4, margin: 4 },
];

export const animationsConfigurations = [
  { maxWidth: 340, cols: 4, margin: 2 },
  { maxWidth: 1024, cols: 6, margin: 8 },
  { minWidth: 1025, cols: 6, margin: 8 },
];

/**
 * returns the union of the types of each value inside
 * an object type.
 * Similar to the `keyof` keyword but extracts the values.
 */
export type ValueOf<T> = T extends readonly unknown[] ? T[number] : T[keyof T];

export const LOCALES = [
  'es',
  'fr',
  'en',
  'eu',
] as const;
export type LocaleType = ValueOf<typeof LOCALES>;
export const LANGUAGES: Record<LocaleType, string> = {
  eu: 'basque',
  es: 'spanish',
  en: 'english',
  fr: 'french',
};

export const SECTIONS = [
  'about',
  'skills',
  'works',
  'more',
] as const;
export type SectionType = ValueOf<typeof SECTIONS>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isSection = (x: any): x is SectionType => SECTIONS.includes(x);

export type LanguageItem = {
  id: LocaleType;
  title: string;
};
export const DEFAULT_LOCALE = 'en';
export const DEFAULT_SECTION = 'about';
export const SKILLS = [
  'developer',
  'graphic',
  'speaker',
];

export const PAGES = [
  'article',
  'microsoft',
  'paquier',
] as const;
export type PageType = ValueOf<typeof PAGES>;
export const isPage = (x: string): x is PageType => !!PAGES.find((page) => page === x);
