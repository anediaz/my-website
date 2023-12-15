import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Paquier.css';
import paquierLogo from './logo-paquier.png';
import {
  Lightbox, ImageWithLoader, LoaderInline, LoaderCircle,
} from '../../components';
import { getPhotos } from '../../service/FlickrAPI';
import {
  PAQUIER_PHOTOSET_ID, SIZES_URLS,
} from '../../service/constants';
import { paquierMedia } from '../../service';
import { ImageProps, formatContent, transformToPhoto } from '../../helpers';

const { original: def, large1024: big } = SIZES_URLS;

const Paquier = () => {
  const [t] = useTranslation();
  const [photos, setPhotos] = useState<ImageProps[]>([]);
  const [lightboxImg, setLightboxImg] = useState<string|undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function loadPhotos() {
      const result = await getPhotos(PAQUIER_PHOTOSET_ID, [
        def,
        big,
        'tags',
      ]);
      setPhotos(result.map(transformToPhoto));
      setIsLoading(false);
    }
    // Execute the created function directly
    loadPhotos();
  }, []);

  const renderImg = (findingTag:string, alt:string, cls?:string) => {
    const imgObject = photos.find(({ tag }) => tag === findingTag);
    return imgObject ? <ImageWithLoader src={imgObject.src} alt={alt} className={cls} onClick={() => setLightboxImg(imgObject.bigSrc)} loader={<LoaderInline />} /> : null;
  };

  const renderMediaSection = () => (photos.length ? (
    <div className="MediaSection">
      <div className="MediaSectionItem content">
        <div className="text">
          <span>{t('paquier.mediaIllustration')}</span>
        </div>
      </div>
      {paquierMedia.map(({
        title, tag, alt,
      }) => (
        <div className="MediaSectionItem media" key={title}>
          {renderImg(tag, alt)}
        </div>
      ))}
    </div>
  ) : <></>);

  const renderContent = () => (
    <>
      {lightboxImg && <Lightbox onClick={() => setLightboxImg(undefined)} src={lightboxImg} />}
      <div className="Header">
        <a href="https://www.cabinet-paquier.fr/" target="_blank" rel="noreferrer">
          <img src={paquierLogo} alt="Paquier & Associés logo" className="msLogo" />
        </a>
        <h2>{t('paquier.title')}</h2>
      </div>
      <div className="Section">
        <div className="content">
          <div className="description">{formatContent(t('paquier.description'), t('paquier.highlightDescription'), 'highlight-marker')}</div>
          <div className="description">{formatContent(t('paquier.description2'), t('paquier.highlightDescription2'), 'highlight-marker')}</div>
        </div>
        <div className="coverImage Section">
          {renderImg('cover', 'Paquier', 'cover-image')}
          <a href="https://www.cabinet-paquier.fr/" target="_blank" rel="noreferrer" className="content paquierinfo">
            {t('paquier.whatIs')}
          </a>
        </div>
        {renderMediaSection()}
      </div>
    </>
  );

  return (
    <div className="Paquier">
      {isLoading ? <div className="fallback-style"><LoaderCircle /></div>
        : renderContent()}

    </div>
  );
};

export default Paquier;
