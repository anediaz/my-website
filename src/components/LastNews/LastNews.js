/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './LastNews.css';

const GUIDE_URL = 'https://github.com/goldbergyoni/nodebestpractices/blob/master/README.md';

const transformLink = (text, index) => {
  const wordToFind = 'Node.js';
  const [phrase1, phrase2] = text.split(wordToFind);
  return [phrase1, wordToFind, phrase2].map((t) => (t === wordToFind
    ? (
      <span key={`span-${index}`}>
        <i className="fab fa-node-js" key={index} />
        Node.js
      </span>
    )
    : t !== '' && (
    <span key={index}>
      {t}
    </span>
    )));
};

const LastNews = ({ goToArticle = () => {} }) => {
  const [t] = useTranslation();

  const transformItem = (text, key) => (text === '$toAddLink' ? (
    <div key={key}>
      <a href={GUIDE_URL} target="_blank" rel="noopener noreferrer">
        {transformLink(t('lastNews.link'), key)}
      </a>
    </div>
  )
    : (
      <div key={key}>
        {text}
      </div>
    ));

  return (
    <div className="last-news">
      <div className="empty" />
      <div className="content">
        {transformItem(t('lastNews.text1'), 'text1')}
        {transformItem(t('lastNews.text2'), 'text2')}
        <div className="read-article" onClick={goToArticle} role="presentation">
          {t('lastNews.last')}
          <i className="fa fa-heart" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

LastNews.propTypes = {
  goToArticle: PropTypes.func,
};
export default LastNews;
