import './MediaSection.css';
import { MediaItem } from '../MediaItem/MediaItem';

export interface MediaProps {
  title: string;
  youtubeId: string;
  seconds?: number;
}

interface MediaSectionProps {
  media: MediaProps[]
}

export const MediaSection = ({ media }:MediaSectionProps) => (
  <div className="MediaSection">
    {media.map(({ title, youtubeId, seconds }) => (
      <MediaItem key={title} title={title} youtubeId={youtubeId} seconds={seconds} withLogo />
    ))}
  </div>
);
