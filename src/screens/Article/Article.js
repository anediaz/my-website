import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import * as PropTypes from 'prop-types';
import { articleData } from '../../service';
import { Lightbox, ImageWithLoader, LoaderInline } from '../../components';
import './Article.css';

const isNodejs = (v) => v === 'nodejs';

const ImageComponent = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (val) => setIsOpen(val);
  return (
    <>
      {isOpen && <Lightbox onClick={() => handleClick(false)} src={src} />}
      {
      isNodejs(alt) ? <img alt={alt} src={src} className="nodejs" />
        : <ImageWithLoader alt={alt} image={src} onClick={() => handleClick(true)} loader={<LoaderInline height="50" width="50" />} />
    }
    </>
  );
};
ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Article = ({ language }) => {
  const renderers = {
    link: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
    image: ImageComponent,
  };

  renderers.link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
  };

  return (
    <div className="article">
      <ReactMarkdown renderers={renderers}>{articleData[language]}</ReactMarkdown>
    </div>
  );
};

Article.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Article;
