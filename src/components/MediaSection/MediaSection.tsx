import React from 'react';
import './MediaSection.css';
import { MediaItem } from '../MediaItem/MediaItem';

export interface MediaProps {
  title: string;
  youtubeId: string;
}

interface MediaSectionProps {
  media: MediaProps[]
}

export const MediaSection = ({ media }:MediaSectionProps) => (
  <div className="MediaSection">
    {media.map(({ title, youtubeId }) => (
      <MediaItem key={title} title={title} youtubeId={youtubeId} withLogo />
    ))}
  </div>
);
