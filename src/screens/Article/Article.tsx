import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Ligthbox } from 'react-ikusi';
import { articleData } from '../../service';
import { ImageWithLoader, LoaderInline } from '../../components';
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
  return (
    <div role="button" tabIndex={0} onKeyDown={onKeyDown}>
      {isOpen && <Ligthbox onClose={onClose} img={src} id="article-image" />}
      {
      isNodejs(alt) ? <img alt={alt} src={src} className="nodejs" />
        : <ImageWithLoader alt={alt} src={src} onClick={() => setIsOpen(true)} loader={<LoaderInline size={50} />} />
    }
    </div>
  );
};

interface ArticleProps {
  language: 'en' | 'es' | 'fr' | 'eu';
}

export const Article = ({ language }: ArticleProps) => {
  const renderers = {
    a: (props:propsInterface) => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>,
    image: ImageComponent,
  };

  interface propsInterface {
    href: string;
    children: React.ReactNode;
  }

  return (
    <div className="article">
      <ReactMarkdown renderers={renderers} >{articleData[language]}</ReactMarkdown>
    </div>
  );
};
