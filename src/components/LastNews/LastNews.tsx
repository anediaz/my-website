import { useTranslation } from 'react-i18next';
import './LastNews.css';

const CHROMIUM_WORD = 'Chromium';

const transformChromiumText = (text: string) => {
  const [before, after] = text.split(CHROMIUM_WORD);
  return (
    <>
      {before}
      <span>
        <i className="fab fa-chrome" />
        {CHROMIUM_WORD}
      </span>
      {after}
    </>
  );
};

interface LastNewsProps {
  goToChromiumArticle?: () => void;
}

export const LastNews = ({ goToChromiumArticle = () => {} }: LastNewsProps) => {
  const [t] = useTranslation();

  return (
    <div className="last-news">
      <div className="empty" />
      <div className="content">
        <div>{t('lastNews.chromiumText1')}</div>
        <div>{transformChromiumText(t('lastNews.chromiumText2'))}</div>
        <div className="read-article" onClick={goToChromiumArticle} role="presentation" aria-label='header-read-chromium-post'>
          {t('lastNews.chromiumLast')}
          <i className="fa fa-heart" />
        </div>
      </div>
    </div>
  );
};
