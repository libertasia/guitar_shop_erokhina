import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Event} from './const';

const GuitarShape = PropTypes.shape({
  article: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  reviews: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  imageName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  numInCart: PropTypes.number.isRequired,
});

const onOverlayClick = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener(Event.MOUSE_DOWN, listener);

    return () => {
      document.removeEventListener(Event.MOUSE_DOWN, listener);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
};

// const zeroPad = (num, places) => String(num).padStart(places, `0`);

export {onOverlayClick, GuitarShape};
