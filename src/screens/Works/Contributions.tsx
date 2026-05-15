import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contributions.css';

const GUIDE_MARKER = '$guide';
const GUIDE_NAME = 'Node.js Best Practices';
const CHROMIUM_WORD = 'Chromium';

const transformNodejsContent = (text: string) => {
  const [before, after] = text.split(GUIDE_MARKER);
  return (
    <>
      {before}
      <span className="nodejs-guide">
        <i className="fab fa-node-js" />
        <strong>{GUIDE_NAME}</strong>
      </span>
      {after}
    </>
  );
};

const transformChromiumContent = (text: string) => {
  const [before, after] = text.split(CHROMIUM_WORD);
  return (
    <>
      {before}
      <span className="chromium-label">
        <i className="fab fa-chrome" />
        <strong>{CHROMIUM_WORD}</strong>
      </span>
      {after}
    </>
  );
};

interface ContributionItemProps {
  content: string | React.ReactNode;
  onClick: () => void;
  thumbnail: { src: string; alt: string };
}

const ContributionItem = ({ content, onClick, thumbnail }: ContributionItemProps) => (
  <div className="body contribution-row" role="button" tabIndex={0} onKeyPress={() => {}} onClick={onClick}>
    <div className="contribution-thumbnails">
      <div className="contribution-thumbnail">
        <img src={thumbnail.src} alt={thumbnail.alt} />
      </div>
    </div>
    <div className="description">
      <div className="infos">
        <div>{content}</div>
      </div>
    </div>
  </div>
);

interface ContributionsProps {
  goToArticle: (pageName: string) => void;
  className?: string;
}

export const Contributions = ({ goToArticle, className }: ContributionsProps) => {
  const [t] = useTranslation();

  return (
    <div className={`contributions ${className}`}>
      <div className="body">
        <div className="description">
          <div className="project">{t('works.contributions.title')}</div>
        </div>
      </div>
      <ContributionItem
        content={transformNodejsContent(t('works.contributions.nodejs.content'))}
        onClick={() => goToArticle('nodejs')}
        thumbnail={{ src: '/assets/nodejs-best-practices-banner.jpg', alt: 'Node.js Best Practices banner' }}
      />
      <ContributionItem
        content={transformChromiumContent(t('works.contributions.chromium.content'))}
        onClick={() => goToArticle('chromium')}
        thumbnail={{ src: '/assets/chromium.png', alt: 'Chromium illustration' }}
      />
    </div>
  );
};
