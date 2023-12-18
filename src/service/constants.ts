/** FLICKR */
export const FLICKR = {
  api_key: '1674efb9c58cad9ba9309a06519c8021',
  user_id: '185143642@N07',
};

export const googleTrackId = 'UA-56075584-1';

export type FlickrSizeType = 'small320' | 'original' | 'medium500' | 'medium800' | 'large1024';
export type FlickrSizeUrlType = 'url_n' | 'url_o' | 'url_m' | 'url_c' | 'url_l';
export type FlickrSizeWidthUrlType = 'width_n' | 'width_o' | 'width_m' | 'width_c' | 'width_l';
export type FlickrSizeHeightUrlType = 'height_n' | 'height_o' | 'height_m' | 'height_c' | 'height_l';

interface FlickrSizeProps {
  key: string;
  url: FlickrSizeUrlType;
  width: FlickrSizeWidthUrlType;
  height: FlickrSizeHeightUrlType
}
export const SIZES:Record<FlickrSizeType, FlickrSizeProps> = {
  small320: {
    key: '_n',
    url: 'url_n',
    width: 'width_n',
    height: 'height_n',
  },
  original: {
    key: '_o',
    url: 'url_o',
    width: 'width_o',
    height: 'height_o',
  },
  medium500: {
    key: '_m',
    url: 'url_m',
    width: 'width_m',
    height: 'height_m',
  },
  medium800: {
    key: '_c',
    url: 'url_c',
    width: 'width_c',
    height: 'height_c',
  },
  large1024: {
    key: '_l',
    url: 'url_l',
    width: 'width_l',
    height: 'height_l',
  },
};
export const SIZES_URLS:Record<string, FlickrSizeUrlType> = {
  small320: 'url_n',
  original: 'url_o',
  medium500: 'url_m',
  medium800: 'url_c',
  large1024: 'url_l',
};
export const PHOTOSET_ID = '72157713844633802';
export const MS_PHOTOSET_ID = '72157719163846608';
export const PAQUIER_PHOTOSET_ID = '72177720302387065';
export const ERROR_TYPES = {
  flickrLoading: 'Photo loading from Flickr',
};

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
export const LANGUAGES:Record<LocaleType, string> = {
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
// export type SectionType = ValueOf<typeof SECTIONS>;
export type SectionType = typeof SECTIONS[number];

export type LanguageItem = {
  id: LocaleType;
  title: string;
};
export const DEFAULT_LOCALE = 'en';
export const DEFAULT_SECTION = 'about';
export const SKILLS = [
  'developer' as const,
  'graphic' as const,
  'speaker' as const,
] as const;
