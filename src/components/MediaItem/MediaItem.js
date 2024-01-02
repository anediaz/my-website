import React from 'react';
import * as PropTypes from 'prop-types';
import ImageWithLoader from '../ImageWithLoader/ImageWithLoader';
import LoaderInline from '../Loader/LoaderInline';
import youtubeIcon from './youtube.png';
import './MediaItem.css';

const buildVideoUrl = (youtubeId) => `https://www.youtube.com/watch?v=${youtubeId}`;

const buildVideoThumbnail = (youtubeId) => `http://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

const MediaItem = ({ title, youtubeId, withLogo }) => (
  <a
    className="media-item"
    key={title}
    href={buildVideoUrl(youtubeId)}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
  >
    <ImageWithLoader alt={title} image={buildVideoThumbnail(youtubeId)} loader={<LoaderInline height="50" width="50" />} />
    {withLogo && <img className="youtubeLogo" src={youtubeIcon} alt="See on youtube" />}
    <div className="media-info">
      <div>{title}</div>
    </div>
  </a>
);

MediaItem.propTypes = {
  title: PropTypes.string,
  youtubeId: PropTypes.string,
  withLogo: PropTypes.bool,
};
export default MediaItem;
