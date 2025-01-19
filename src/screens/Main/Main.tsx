import { useEffect, useState,useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Menu, Header, Footer, LastNews,
} from '../../components';
import {
  About, Skills, Works, More, Article, Microsoft, Paquier,
} from '../index';

import {
  LOCALES, DEFAULT_LOCALE, DEFAULT_SECTION, LocaleType, SectionType, PageType,
} from '../../service/constants';
import './Main.css';

const PAGES = {
  article: Article,
  microsoft: Microsoft,
  paquier: Paquier,
};

interface MainProps {
  page?: PageType;
  section: SectionType;
}

const Main = ({ page, section }: MainProps) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<LocaleType>('en');
  const [visibleSection, setVisibleSection] = useState(DEFAULT_SECTION);
  const { locale } = useParams<{locale:LocaleType}>();
  const navigate = useNavigate();

  const scrollToSection = (sectionToGo: SectionType) => {
    const selectedSection = document.getElementById(sectionToGo);
    if (selectedSection) {
      selectedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectSectionHandler = useCallback((sectionToSelect: SectionType) => {
    if (sectionToSelect !== visibleSection) {
      setVisibleSection(sectionToSelect);
      scrollToSection(sectionToSelect);
    }
  },[]);

  useEffect(() => {
    i18n.changeLanguage(locale && LOCALES.includes(locale) ? locale : DEFAULT_LOCALE);
    selectSectionHandler(section || DEFAULT_SECTION);
    setLanguage(i18n.language as LocaleType);
  }, [i18n, locale, section, selectSectionHandler]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const getPath = (selectedLocale:LocaleType, search:string) => {
    const pathname = selectedLocale === DEFAULT_LOCALE ? '' : selectedLocale;
    return `/${[pathname, search].join('?')}`;
  };

  const languageClickHandler = (selectedLocale:LocaleType) => {
    if (LOCALES.includes(selectedLocale)) {
      navigate(getPath(selectedLocale, page ? `page=${page}` : ''));
    }
    scrollToTop();
  };

  const menuItemClickHandler = (item: SectionType|undefined) => {
    if (item === undefined) {
      goTo('');
      return;
    }
    selectSectionHandler(item);
    const path = getPath(language, item === DEFAULT_SECTION ? '' : `section=${item}`);
    navigate(path);
  };

  const onChangeVisibility = (isVisible:boolean, id:SectionType) => {
    if (isVisible) {
      setVisibleSection(id);
    }
  };

  const goTo = (queryValue?:string) => {
    scrollToTop();
    navigate(getPath(language, queryValue || ''));
  };

  const renderPage = (pageType:PageType) => {
    const PageComponent = PAGES[pageType];
    if (PageComponent) {
      return <PageComponent language={i18n.language as LocaleType} />;
    }
    return <></>;
  };

  return (
    <div className="Main">
      <>
        <Menu
          language={language}
          languageClickHandler={languageClickHandler}
          selectedItem={page ? '' : visibleSection}
          selectItemHandler={menuItemClickHandler}
          closable={Boolean(page)}
          isPageMenu={page !== undefined}
        />
        <div className="page">
          { page ? renderPage(page)
            : (
              <div className="resume">
                <Header
                  id={DEFAULT_SECTION}
                  language={language}
                />
                <LastNews
                  goToArticle={() => goTo('page=article')}
                />
                <About
                  id="about"
                  onChangeVisibility={onChangeVisibility}
                />
                <Skills
                  id="skills"
                  onChangeVisibility={onChangeVisibility}
                />
                <Works
                  id="works"
                  onChangeVisibility={onChangeVisibility}
                  goToArticle={(pageName:string) => goTo(`page=${pageName}`)}
                />
                <More
                  id="more"
                  onChangeVisibility={onChangeVisibility}
                />
              </div>
            )}
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Main;
