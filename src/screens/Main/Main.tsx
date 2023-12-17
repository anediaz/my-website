import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Menu, Header, Footer, LastNews,
} from '../../components';
import {
  About, Skills, Works, More, Article, Microsoft, Paquier,
} from '../index';

import { LanguagesData } from '../../service/data';

import {
  LOCALES, DEFAULT_LOCALE, DEFAULT_SECTION, LocaleType, SectionType, menuItems,
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

export type PageType = 'article'|'microsoft'|'paquier';

const Main = ({ page, section }: MainProps) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<LocaleType>('en');
  const updateLanguage = (l:string) => {
    switch (l) {
      case 'fr':
        setLanguage('fr');
        break;
      case 'es':
        setLanguage('es');
        break;
      case 'eu':
        setLanguage('eu');
        break;
      default:
        setLanguage('en');
    }
  };
  const [visibleSection, setVisibleSection] = useState(DEFAULT_SECTION);
  const { locale } = useParams<{locale:LocaleType}>();
  const history = useHistory();

  const scrollToSection = (sectionToGo: SectionType) => {
    const selectedSection = document.getElementById(sectionToGo);
    if (selectedSection) {
      selectedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectSectionHandler = (sectionToSelect: SectionType) => {
    if (sectionToSelect !== visibleSection) {
      setVisibleSection(sectionToSelect);
      scrollToSection(sectionToSelect);
    }
  };

  useEffect(() => {
    i18n.changeLanguage(locale && LOCALES.includes(locale) ? locale : DEFAULT_LOCALE);
    selectSectionHandler(section || DEFAULT_SECTION);
    updateLanguage(i18n.language);
  }, [locale]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const getPath = (l:LocaleType, search:string):{pathname:string; search:string} => {
    const pathname = l === DEFAULT_LOCALE ? '/' : l;
    return { pathname, search };
  };

  const languageClickHandler = (l:LocaleType) => {
    if (LOCALES.includes(l)) {
      history.push(getPath(l, page ? `?page=${page}` : ''));
    }
    scrollToTop();
  };

  const menuItemClickHandler = (item: SectionType|undefined) => {
    if (item === undefined) {
      goTo('');
      return;
    }
    selectSectionHandler(item);
    history.push(getPath(language, item === DEFAULT_SECTION ? '' : `?section=${item}`));
  };

  const onChangeVisibility = (isVisible:boolean, id:SectionType) => {
    if (isVisible) {
      setVisibleSection(id);
    }
  };

  const goTo = (queryValue?:string) => {
    scrollToTop();
    history.push(getPath(language, queryValue || ''));
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
          menuItems={page ? [] : menuItems}
          language={language}
          languageClickHandler={languageClickHandler}
          languageItems={LanguagesData}
          selectedItem={page ? '' : visibleSection}
          selectItemHandler={menuItemClickHandler}
          closable={Boolean(page)}
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
                  goToArticle={() => goTo('?page=article')}
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
                  goToArticle={(pageName:string) => goTo(`?page=${pageName}`)}
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
