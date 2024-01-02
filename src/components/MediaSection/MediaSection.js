import React from 'react';
import * as PropTypes from 'prop-types';
import './MediaSection.css';
import MediaItem from '../MediaItem/MediaItem';

const MediaSection = ({ media }) => (
  <div className="MediaSection">
    {media.map(({ title, youtubeId }) => (
      <MediaItem key={title} title={title} youtubeId={youtubeId} withLogo />
    ))}
  </div>
);

MediaSection.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      youtubeId: PropTypes.string.isRequired,
      date: PropTypes.string,
    }),
  ),
};

export default MediaSection;
