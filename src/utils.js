import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Event, SortingType, SortingOrder} from './const';

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

const generateSortedGuitars = (data, type, order) => {
  const sortedGuirars = data.slice(0);

  if (type === SortingType.DEFAULT && order === SortingOrder.NONE) {
    return sortedGuirars;
  } else if (type === SortingType.PRICE) {
    if (order === SortingOrder.ASCENDING || order === SortingOrder.NONE) {
      return sortedGuirars.sort((a, b) => a.price - b.price);
    } else if (order === SortingOrder.DESCENDING) {
      return sortedGuirars.sort((a, b) => b.price - a.price);
    }
  } else if (type === SortingType.REVIEWS) {
    if (order === SortingOrder.ASCENDING || order === SortingOrder.NONE) {
      return sortedGuirars.sort((a, b) => a.reviews - b.reviews);
    } else if (order === SortingOrder.DESCENDING) {
      return sortedGuirars.sort((a, b) => b.reviews - a.reviews);
    } else if (type === SortingType.DEFAULT && order === SortingOrder.ASCENDING) {
      return sortedGuirars.sort((a, b) => a.price - b.price);
    } else if (type === SortingType.DEFAULT && order === SortingOrder.DESCENDING) {
      return sortedGuirars.sort((a, b) => b.price - a.price);
    }
  }
  return sortedGuirars;
};

export {onOverlayClick, GuitarShape, generateSortedGuitars};
