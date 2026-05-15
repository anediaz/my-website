import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Ligthbox } from 'react-ikusi';
import { articleData } from '../../service';
import { ArticleIdType } from '../../service/constants';
import { ImageWithLoader, LoaderInline } from '../../components';
import { BugVisual } from './BugVisual';
import './Article.css';

const isNodejs = (v:string) => v === 'nodejs';

interface ImageComponentProps {
  src: string;
  alt?: string
}

const ImageComponent = ({ src, alt = '' }: ImageComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'Escape': // ESC
        onClose();
        break;
      default:
        break;
    }
  };
  if (alt === 'bug-visual') return <BugVisual />;
  return (
    <div role="button" tabIndex={0} onKeyDown={onKeyDown}>
      {isOpen && <Ligthbox onClose={onClose} img={src} id="article-image" />}
      {
      isNodejs(alt) ? <img alt={alt} src={src} className="nodejs" />
        : <ImageWithLoader id="media-adventure" alt={alt} src={src} onClick={() => setIsOpen(true)} loader={<LoaderInline size={50} />} />
    }
    </div>
  );
};

interface ArticleProps {
  language: 'en' | 'es' | 'fr' | 'eu';
  articleId: ArticleIdType;
}

const isTimelineItem = (node: any): boolean => {
  const first = node?.children?.[0];
  return (
    first?.type === 'strong' &&
    /202[0-9]/.test(first?.children?.[0]?.value ?? '')
  );
};

export const Article = ({ language, articleId }: ArticleProps) => {
  const renderers = {
    a: (props:propsInterface) => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>,
    image: ImageComponent,
    paragraph: ({ node, children }: any) => {
      if (articleId === 'chromium') {
        if (isTimelineItem(node)) {
          return <div className="timeline-item">{children}</div>;
        }
        if (node.children.length === 1 && node.children[0].type === 'image') {
          return <>{children}</>;
        }
      }
      return <p>{children}</p>;
    },
  };

  interface propsInterface {
    href: string;
    children: React.ReactNode;
  }

  return (
    <div className="article">
      <ReactMarkdown renderers={renderers}>{articleData[articleId][language]}</ReactMarkdown>
    </div>
  );
};
