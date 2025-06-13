interface Album {
  name: string;
  id: string;
  ariaLabel: string
}

export const IllustrationsAlbums: Album[] = [
  { name: 'Technical conferences', ariaLabel: 'tech-confs', id: '72157713855312227' },
  { name: 'Visual thinking', ariaLabel: 'vis-thinking', id: '72157711643998961' },
  { name: 'Visual communication', ariaLabel: 'vis-comm', id: '72177720301819686' },
  { name: 'Basque', ariaLabel: 'basque', id: '72177720298004102' },
  { name: 'Test JS Summit 2021', ariaLabel: 'testJS-summit', id: '72157718113845317' },
  { name: 'Inktober 2021', ariaLabel: 'inktober2021', id: '72157716697491682' },
  { name: 'Microsoft', ariaLabel: 'microsoft', id: '72157719163846608' },
];

export const FooterData = {
  author: 'Ane Diaz de Tuesta',
  url: 'http://www.anediaz.com',
};

export const HeaderData = {
  name: 'Ane DIAZ DE TUESTA',
  mail: 'anediaz@gmail.com',
  url: {
    fr: 'https://drive.google.com/uc?export=download&id=1goCylGDS95EIvlcBi1Xh9NwlT1llXcgV',
    es: 'https://drive.google.com/uc?export=download&id=1KkHbqRjZV16lueYyOnVEFataBdtp52Zu',
    en: 'https://drive.google.com/uc?export=download&id=1OIc8cV3zLFKC9gyhcbw8AtIL4jqCd1FF',
    eu: 'https://drive.google.com/uc?export=download&id=1XBew-56GZ_SL95MB0TyA-YrCbpI2lkI2',
  },
  social: [
    { id: 'linkedin', url: 'https://www.linkedin.com/in/ane-diaz-de-tuesta-37785252/', className: 'fa-linkedin' },
    { id: 'twitter', url: 'https://twitter.com/ane_naiz', className: 'fa-twitter' },
    {
      id: 'giphy', url: 'https://giphy.com/ane_naiz', className: 'giphyLogo', isSvg: true,
    },
    { id: 'github', url: 'https://github.com/anediaz', className: 'fa-github' },
    { id: 'npm', url: 'https://www.npmjs.com/~anediaz', className: 'fab fa-npm' },
  ],
};

export const WorksData = {
  developer: {
    url: 'https://anediaz.github.io/araotz/#/',
    alt: 'Araotz',
  },
  graphic: {
    alt: 'Graphic',
  },
};

export const TalksData = [
  {
    title: 'Devoxx France 2025',
    youtubeId: 'W7Cl2XzraHc',
    date: '2025/04/16',
    id: 'talk-devoxxFR-2025'
  },
  {
    title: 'DevFest Nantes 2024',
    youtubeId: '5tWDfGgevKg',
    date: '2024/10/17',
    id: 'talk-devfestNantes-2024'
  },
  {
    title: 'DevFest Lille 2024',
    youtubeId: 'AkemaIBNW88',
    date: '2024/06/07',
    id: 'talk-devfestLille-2024'
  },
  {
    title: 'Datadog & Ladies of Code 2024',
    youtubeId: 'oAiq4eyFHDI',
    seconds: 2763,
    date: '2024/05/21',
    id: 'talk-ddLadiesOfCode-2024'
  },
  {
    title: 'Google WDA 2023',
    youtubeId: 'O4ch095al50',
    date: '2023/09/14',
    id: 'talk-googleWDA-2023'
  },
  {
    title: 'BDX/IO 2022 Keynote',
    youtubeId: 'ifXy9jRLWl8',
    date: '2022/07/06',
    id: 'talk-bdxIO-keynote-2022'
  },
  {
    title: '50inTech 2022',
    youtubeId: 'VoPvX9K_Gok',
    date: '2022/07/06',
    id: 'talk-50inTech-2022'
  },
  {
    title: 'Sunny Tech Montpellier 2022',
    youtubeId: 'l1zl0ift9q0',
    date: '2022/07/01',
    id: 'talk-sunnyTechMontpelier-2022'
  },
  {
    title: 'Ladies of Code Paris 2022',
    youtubeId: '7ZLb6SQ9tTs',
    date: '2022/03/08',
    id: 'talk-ladiesOfCodeParis-2022'
  },
  {
    title: 'BDX/IO 2019',
    youtubeId: 'Ig5_nm5fpEY',
    date: '2019/11/15',
    id: 'talk-bdxIO-2019'
  },
  {
    title: 'DevFest Toulouse 2018',
    youtubeId: 'NInM_wndk2U',
    date: '2018/11/08',
    id: 'talk-devFestToulouse-2018'
  },
  {
    title: 'Devoxx France 2018',
    youtubeId: 'sxyHF5pptgY',
    date: '2018/04/19',
    id: 'talk-devoxxFrance-2018'
  },
  {
    title: 'Live Scribbing',
    youtubeId: 'lFkDUWcKPyU',
    date: '2018/04/20',
    id: 'talk-liveScribbing-2018'
  },
  {
    title: 'Voxxed Days Luxembourg 2018',
    youtubeId: 'dYAGTPDRcD4',
    date: '2018/06/22',
    id: 'talk-voxxedDaysLuxembourg-2018'
  },
  {
    title: 'Jug Summer Camp 2017',
    youtubeId: 'EGSwp_bC3kA',
    date: '2017/09/15',
    id: 'talk-jugSummerCamp-2017'
  },
];

export const MoreData = [{ item: 'languages', contentItems: ['eu', 'fr', 'en', 'es'] }, { item: 'sports', content: true }, { item: 'draw', content: true }];
