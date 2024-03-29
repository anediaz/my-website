import React from 'react';
import { ImageWithLoader } from '../ImageWithLoader/ImageWithLoader';
import { LoaderInline } from '../Loader/LoaderInline';
import youtubeIcon from './youtube.png';
import './MediaItem.css';

const buildVideoUrl = (youtubeId:string) => `https://www.youtube.com/watch?v=${youtubeId}`;

const buildVideoThumbnail = (youtubeId:string) => `http://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

interface MediaItemProps {
  title: string;
  youtubeId: string;
  withLogo?: boolean;
}

export const MediaItem = ({ title, youtubeId, withLogo }:MediaItemProps) => (
  <a
    className="media-item"
    key={title}
    href={buildVideoUrl(youtubeId)}
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
