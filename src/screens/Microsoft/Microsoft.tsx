import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Ligthbox, PhotoProps } from 'react-ikusi';
import './Microsoft.css';
import msLogo from './logo-ms.png';
import {
  MediaItem, ImageWithLoader, LoaderInline, ContainerWithCloseKeyInteraction,
} from '../../components';
import {
  MS_PHOTOSET_ID,
} from '../../service/constants';
import { MicrosoftMedia } from '../../service';
import { formatContent } from '../../helpers';
import { usePhotos } from '../../hooks/usePhotos';

export const Microsoft = () => {
  const [t] = useTranslation();
  const [lightboxImg, setLightboxImg] = useState<PhotoProps|undefined>();

  const { photos = [], isPhotosFailed } = usePhotos({ photosetId: MS_PHOTOSET_ID, withTags: true });

  if (isPhotosFailed) {
    return <div>Failed to load images</div>;
  }

  const onCloseLightbox = () => setLightboxImg(undefined);

  const renderImg = (id:string, findingTag:string, alt:string, cls?:string) => {
    const imgObject = photos.find(({ tag }) => tag === findingTag);
    return imgObject ? <ImageWithLoader id={id} src={imgObject.src} alt={alt} className={cls} onClick={() => setLightboxImg(imgObject)} loader={<LoaderInline />} /> : null;
  };

  const renderMediaSection = () => (photos.length ? (
    <div className="MediaSection">
      <div className="MediaSectionItem content">
        <div className="text">
          <span>{t('microsoft.mediaIllustration')}</span>
          <i className="fa fa-hand-o-down" />
        </div>
        <div className="text">
          <span>{t('microsoft.mediaVideo')}</span>
          <i className="fa fa-hand-o-down" />
        </div>
      </div>
      {MicrosoftMedia.map(({
        title, youtubeId, tag, alt, id,
      }) => (
        <div className="MediaSectionItem media" key={title}>
          <div className="text">
            <span>{t('microsoft.mediaIllustration.smartphone')}</span>
            <i className="fa fa-hand-o-down" />
          </div>
          {renderImg(id, tag, alt)}
          <div className="text">
            <span>{t('microsoft.mediaVideo.smartphone')}</span>
            <i className="fa fa-hand-o-down" />
          </div>
          { youtubeId ? <MediaItem id={id} title={title} youtubeId={youtubeId} /> : null }
        </div>
      ))}
    </div>
  ) : <></>);

  return (
    <ContainerWithCloseKeyInteraction className="Microsoft" onClose={onCloseLightbox} isLoading={!photos}>
      {lightboxImg && <Ligthbox onClose={onCloseLightbox} img={lightboxImg.bigSrc || lightboxImg.src} id={lightboxImg.id} />}
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
    </ContainerWithCloseKeyInteraction>
  );
};
