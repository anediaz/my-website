import './MediaSection.css';
import { MediaItem } from '../MediaItem/MediaItem';

export interface MediaProps {
  title: string;
  id: string;
  youtubeId: string;
  seconds?: number;
}

interface MediaSectionProps {
  media: MediaProps[]
}

export const MediaSection = ({ media }:MediaSectionProps) => (
  <div className="MediaSection">
    {media.map(({ id, title, youtubeId, seconds }) => (
      <MediaItem id={id} key={title} title={title} youtubeId={youtubeId} seconds={seconds} withLogo />
    ))}
  </div>
);
