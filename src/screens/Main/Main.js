import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Menu, Header, Footer, LastNews, Article} from "../../components";
import { About, Skills, Works, More } from "../index";
import jsonData from "../../service/data.json";
import "./Main.css";
import {LOCALES, DEFAULT_LOCALE, DEFAULT_SECTION} from '../../service/constants';
import * as articleData from '../../service/articles'

const getCurrentPath = path => {
  let currentPath = path;
  LOCALES.forEach(l => {
    currentPath = currentPath.replace(`/${l}`, '')
  });
  return currentPath
};

const Main = ({isArticle}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LOCALE);
  const [visibleSection, setVisibleSection] = useState(DEFAULT_SECTION);
  const data = jsonData[selectedLanguage];
  const { locale } = useParams();
  const history = useHistory();

  useEffect(() => {
    setSelectedLanguage(locale && LOCALES.includes(locale) ? locale : DEFAULT_LOCALE);
  },[locale]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (section) => {
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
      selectedSection.scrollIntoView({ behavior: 'smooth'});
    }
  };

  const languageClickHandler = (language) => {
    if (jsonData[language]) {
      const newPath = getCurrentPath(history.location.pathname);
      history.replace({
        pathname: `${language === DEFAULT_LOCALE ? newPath : '/'.concat(language.concat(newPath))}`
      })
    }
    scrollToTop();
  };

  const selectSectionHandler = (section) => {
    if (section !== visibleSection) {
      setVisibleSection(section);
      scrollToSection(section);
    }
  };

  const onChangeVisibility = (isVisible, id) => {
    if (isVisible) {
      setVisibleSection(id);
    }
  };

  const goToArticle = () => {
    history.push(`/${selectedLanguage}/article`);
    scrollToTop();
  };

  const goBackToSite = () => {
    const newPath = history.location.pathname.replace("/article", "/");
    history.push({
      pathname: newPath
    });
    scrollToTop();
  };

  return (
    <div className="Main">
      {data && (
        <>
          <Menu
            menuItems={isArticle ? [] : data.menu}
            language={selectedLanguage}
            languageClickHandler={languageClickHandler}
            languageItems={jsonData.languages}
            selectedItem={isArticle ? "" : visibleSection}
            selectItemHandler={isArticle ? goBackToSite : selectSectionHandler}
            closeData={isArticle && data.menuClosable}
          />
          <div className="page">
            { isArticle ?
              <Article data={articleData[selectedLanguage]}/> :
              <div className="resume">
                <Header {...data.header} id={DEFAULT_SECTION} />
                <LastNews content={data.header.lastNews} id={DEFAULT_SECTION} goToArticle={goToArticle} />
                <About
                  data={data.sections[0]}
                  onChangeVisibility={onChangeVisibility}
                />
                <Skills
                  data={data.sections[1]}
                  onChangeVisibility={onChangeVisibility}
                />
                <Works
                  data={data.sections[2]}
                  media={jsonData.talks}
                  onChangeVisibility={onChangeVisibility}
                />
                <More
                  data={data.sections[3]}
                  onChangeVisibility={onChangeVisibility}
                />
              </div>
            }
          </div>
          <Footer data={data.webSiteInfo} />
        </>
      )}
    </div>
  );
};

export default Main;