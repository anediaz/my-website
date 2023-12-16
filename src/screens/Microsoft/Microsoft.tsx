import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Microsoft.css';
import msLogo from './logo-ms.png';
import {
  Lightbox, MediaItem, ImageWithLoader, LoaderInline, LoaderCircle,
} from '../../components';
import { getPhotos } from '../../service/FlickrAPI';
import {
  MS_PHOTOSET_ID, SIZES_URLS,
} from '../../service/constants';
import { microsoftMedia } from '../../service';
import { ImageProps, formatContent, transformToPhoto } from '../../helpers';

const { original: def, large1024: big } = SIZES_URLS;

const Microsoft = () => {
  const [t] = useTranslation();
  const [photos, setPhotos] = useState<ImageProps[]>([]);
  const [lightboxImg, setLightboxImg] = useState<string|undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function loadPhotos() {
      const result = await getPhotos(MS_PHOTOSET_ID, [
        def,
        big,
        'tags',
      ]);
      setPhotos(transformToPhoto(result, 'original', 'large1024'));
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
          <span>{t('microsoft.mediaIllustration')}</span>
          <i className="fa fa-hand-o-down" aria-hidden="true" />
        </div>
        <div className="text">
          <span>{t('microsoft.mediaVideo')}</span>
          <i className="fa fa-hand-o-down" aria-hidden="true" />
        </div>
      </div>
      {microsoftMedia.map(({
        title, youtubeId, tag, alt,
      }) => (
        <div className="MediaSectionItem media" key={title}>
          <div className="text">
            <span>{t('microsoft.mediaIllustration.smartphone')}</span>
            <i className="fa fa-hand-o-down" aria-hidden="true" />
          </div>
          {renderImg(tag, alt)}
          <div className="text">
            <span>{t('microsoft.mediaVideo.smartphone')}</span>
            <i className="fa fa-hand-o-down" aria-hidden="true" />
          </div>
          { youtubeId ? <MediaItem title={title} youtubeId={youtubeId} /> : null }
        </div>
      ))}
    </div>
  ) : <></>);

  const renderContent = () => (
    <>
      {lightboxImg && <Lightbox onClick={() => setLightboxImg(undefined)} src={lightboxImg} />}
      <div className="Header">
        <a href="https://www.microsoft.com/" target="_blank" rel="noreferrer">
          <img src={msLogo} alt="Microsoft logo" className="msLogo" />
        </a>
        <h2>{t('microsoft.title')}</h2>
      </div>
      <div className="Section">
        <div className="content">
          <div className="description">{formatContent(t('microsoft.description'), t('microsoft.highlightDescription'), 'highlight-marker')}</div>
          <div className="description">{formatContent(t('microsoft.description2'), t('microsoft.highlightDescription2'), 'highlight-marker')}</div>
        </div>
        <div className="coverImage Section">
          {renderImg('cover', "The book's cover", 'cover-image')}
          <a href="https://www.microsoft.com/france/MSDev/Roadshow/default.aspx" target="_blank" rel="noreferrer" className="content msDevRoadShow">
            {t('microsoft.whatIs')}
          </a>
        </div>
        {renderMediaSection()}
      </div>
    </>
  );

  return (
    <div className="Microsoft">
      {isLoading ? <div className="fallback-style"><LoaderCircle /></div>
        : renderContent()}

    </div>
  );
};

export default Microsoft;
