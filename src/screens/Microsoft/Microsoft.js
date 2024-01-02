import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Microsoft.css';
import msLogo from './logo-ms.png';
import {
  Lightbox, MediaItem, ImageWithLoader, LoaderInline, LoaderCircle,
} from '../../components';
import FlickrAPI from '../../service/FlickrAPI';
import {
  SIZES, MS_PHOTOSET_ID,
} from '../../service/constants';
import { microsoftMedia } from '../../service';
import { formatContent } from '../../service/utils';

const { original: def, large1024: big } = SIZES;

const transformResult = (r) => ({
  src: r[`url${def}`],
  bigSrc: r[`url${big}`],
  tag: r.tags,
  id: r.id,
});

const Microsoft = () => {
  const [t] = useTranslation();
  const [photos, setPhotos] = useState([]);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function loadPhotos() {
      const result = await FlickrAPI.getPhotos(MS_PHOTOSET_ID, [
        `url${def}`,
        `url${big}`,
        'tags',
      ]);
      setPhotos(result.map(transformResult));
      setIsLoading(false);
    }
    // Execute the created function directly
    loadPhotos();
  }, []);

  const renderImg = (findingTag, alt, cls) => {
    const imgObject = photos.find(({ tag }) => tag === findingTag);
    return imgObject ? <ImageWithLoader image={imgObject.src} alt={alt} cls={cls} onClick={() => setLightboxImg(imgObject.bigSrc)} loader={<LoaderInline />} /> : null;
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
          <MediaItem title={title} youtubeId={youtubeId} />
        </div>
      ))}
    </div>
  ) : <></>);

  const renderContent = () => (
    <>
      {lightboxImg && <Lightbox onClick={() => setLightboxImg(null)} src={lightboxImg} />}
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
