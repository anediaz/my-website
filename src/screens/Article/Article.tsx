import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import * as PropTypes from 'prop-types';
import { articleData } from '../../service';
import { Lightbox, ImageWithLoader, LoaderInline } from '../../components';
import './Article.css';

const isNodejs = (v:string) => v === 'nodejs';

interface ImageComponentProps {
  src: string;
  alt?: string
}
const ImageComponent = ({ src, alt = ' ' }: ImageComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (val:boolean) => setIsOpen(val);
  return (
    <>
      {isOpen && <Lightbox onClick={() => handleClick(false)} src={src} />}
      {
      isNodejs(alt) ? <img alt={alt} src={src} className="nodejs" />
        : <ImageWithLoader alt={alt} src={src} onClick={() => handleClick(true)} loader={<LoaderInline size={50} />} />
    }
    </>
  );
};

interface ArticleProps {
  language: 'en' | 'es' | 'fr' | 'eu';
}

const Article = ({ language }: ArticleProps) => {
  const renderers = {
    link: (props:propsInterface) => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>,
    image: ImageComponent,
  };

  interface propsInterface {
    href: string;
    children: React.ReactNode;
  }

  return (
    <div className="article">
      <ReactMarkdown renderers={renderers}>{articleData[language]}</ReactMarkdown>
    </div>
  );
};

export default Article;
