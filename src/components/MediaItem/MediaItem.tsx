import { ImageWithLoader } from '../ImageWithLoader/ImageWithLoader';
import { LoaderInline } from '../Loader/LoaderInline';
import youtubeIcon from './youtube.png';
import './MediaItem.css';

const buildVideoUrl = (youtubeId:string, seconds?:number) => `https://www.youtube.com/watch?v=${youtubeId}${seconds ? `&t=${seconds}s` : ''}`;

const buildVideoThumbnail = (youtubeId:string) => `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

interface MediaItemProps {
  title: string;
  youtubeId: string;
  withLogo?: boolean;
  seconds?: number;
}

export const MediaItem = ({
  title, youtubeId, withLogo, seconds,
}:MediaItemProps) => (
  <a
    className="media-item"
    key={title}
    href={buildVideoUrl(youtubeId, seconds)}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
  >
    <ImageWithLoader alt={title} src={buildVideoThumbnail(youtubeId)} loader={<LoaderInline size={50} />} />
    {withLogo ? <img className="youtubeLogo" src={youtubeIcon} alt="See on youtube" /> : null}
    <div className="media-info">
      <div>{title}</div>
    </div>
  </a>
);
