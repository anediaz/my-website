import { Gallery } from 'react-ikusi';
import './Animations.css';
import { useAnimations } from '../../hooks/useAnimations';
import poweredBy from './poweredby_large.png';

import { animationsConfigurations } from '../../service/constants';

const Animations = () => {
  const { gifs, stickers } = useAnimations();
  return (
    <div className="Animations">
      <div className="title" />
      <div className="container">
        <div className="description">
          <div className="onGiphy">
            On GIPHY →
            <a href="https://giphy.com/ane_naiz" target="_blank" rel="noreferrer">@ane_naiz</a>
          </div>
          <div className="poweredByGiphy">
            <img src={poweredBy} alt="Powered by GIPHY" />
          </div>
        </div>
        <div className="media">
          {stickers && stickers.length > 0
            ? (
              <div className="stickers">
                <div className="subtitle">
                  <i className="fa fa-angle-double-right symbol" />
                  Stickers
                </div>
                <Gallery
                  photos={stickers}
                  configurations={animationsConfigurations}
                />
              </div>
            )
            : null}
          {gifs && gifs.length
            ? (
              <div className="gifs">
                <div className="subtitle">
                  <i className="fa fa-angle-double-right symbol" />
                  Gifs
                </div>
                <Gallery
                  photos={gifs}
                  configurations={animationsConfigurations}
                />
              </div>
            )
            : null}
        </div>
      </div>
    </div>

  );
};

export default Animations;
