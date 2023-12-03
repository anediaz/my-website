import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import {
  Menu, Header, Footer, LastNews,
} from '../../components';
import {
  About, Skills, Works, More, Article, Microsoft, Paquier,
} from '../index';
import {
  jsonData,
} from '../../service';

import { LOCALES, DEFAULT_LOCALE, DEFAULT_SECTION } from '../../service/constants.ts';
import './Main.css';

const PAGES = {
  article: Article,
  microsoft: Microsoft,
  paquier: Paquier,
};

const Main = ({ page, section }) => {
  const { i18n } = useTranslation();
  const [visibleSection, setVisibleSection] = useState(DEFAULT_SECTION);
  const { locale } = useParams();
  const history = useHistory();

  const scrollToSection = (sectionToGo) => {
    const selectedSection = document.getElementById(sectionToGo);
    if (selectedSection) {
      selectedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectSectionHandler = (sectionToSelect) => {
    if (sectionToSelect !== visibleSection) {
      setVisibleSection(sectionToSelect);
      scrollToSection(sectionToSelect);
    }
  };

  useEffect(() => {
    i18n.changeLanguage(locale && LOCALES.includes(locale) ? locale : DEFAULT_LOCALE);
    selectSectionHandler(section || DEFAULT_SECTION);
  }, [locale]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const getPath = (language, search) => {
    const pathname = language === DEFAULT_LOCALE ? '/' : language;
    return { pathname, search };
  };

  const languageClickHandler = (language) => {
    if (LOCALES.includes(language)) {
      history.push(getPath(language, page ? `?page=${page}` : ''));
    }
    scrollToTop();
  };

  const menuItemClickHandler = (item) => {
    selectSectionHandler(item);
    history.push(getPath(i18n.language, item === DEFAULT_SECTION ? '' : `?section=${item}`));
  };

  const onChangeVisibility = (isVisible, id) => {
    if (isVisible) {
      setVisibleSection(id);
    }
  };

  const goTo = (queryValue) => {
    scrollToTop();
    history.push(getPath(i18n.language, queryValue));
  };

  const renderPage = (pageName) => {
    const PageComponent = PAGES[pageName];
    if (PageComponent) {
      return <PageComponent language={i18n.language} />;
    }
    return <></>;
  };

  return (
    <div className="Main">
      <>
        <Menu
          menuItems={page ? [] : jsonData.menuItems}
          language={i18n.language}
          languageClickHandler={languageClickHandler}
          languageItems={jsonData.languages}
          selectedItem={page ? '' : visibleSection}
          selectItemHandler={page ? () => goTo() : menuItemClickHandler}
          closable={Boolean(page)}
        />
        <div className="page">
          { page ? renderPage(page)
            : (
              <div className="resume">
                <Header
                  id={DEFAULT_SECTION}
                  language={i18n.language}
                />
                <LastNews
                  id={DEFAULT_SECTION}
                  goToArticle={() => goTo('?page=article')}
                />
                <About
                  id="about"
                  onChangeVisibility={onChangeVisibility}
                  isVisible={visibleSection === 'about'}
                />
                <Skills
                  id="skills"
                  onChangeVisibility={onChangeVisibility}
                  isVisible={visibleSection === 'skills'}
                />
                <Works
                  id="works"
                  onChangeVisibility={onChangeVisibility}
                  isVisible={visibleSection === 'works'}
                  goToArticle={(pageName) => goTo(`?page=${pageName}`)}
                />
                <More
                  id="more"
                  onChangeVisibility={onChangeVisibility}
                  isVisible={visibleSection === 'more'}
                />
              </div>
            )}
        </div>
        <Footer />
      </>
    </div>
  );
};

Main.propTypes = {
  page: PropTypes.string,
  section: PropTypes.string,
};

export default Main;
