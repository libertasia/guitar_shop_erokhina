import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Event, SortingType, SortingOrder} from './const';

export const GuitarShape = PropTypes.shape({
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

export const onOverlayClick = (ref, handler) => {
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

export const generateSortedGuitars = (data, type, order) => {
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

export const getMinAvailablePrice = (guitars) => {
  return Math.min(...guitars.map((item) => item.price));
};

export const getMaxAvailablePrice = (guitars) => {
  return Math.max(...guitars.map((item) => item.price));
};

export const getAllAvailableStrings = (guitarTypes) => {
  let availableStrings = guitarTypes.map((item) => item.availableStrings);
  availableStrings = [].concat(...availableStrings);
  availableStrings = [...new Set(availableStrings)];
  return availableStrings.sort((a, b) => a - b);
};

export const getSelectableStrings = (guitarTypes) => {
  let selectableStrings = getAllAvailableStrings(guitarTypes);
  const selectedTypeFilters = guitarTypes.filter((item) => item.isSelected);
  if (selectedTypeFilters.length > 0) {
    selectableStrings = getAllAvailableStrings(selectedTypeFilters);
  }
  return selectableStrings;
};

export const getSelectableTypeNames = (guitarTypes, selectedStrings) => {
  if (selectedStrings.length === 0) {
    return guitarTypes.map((item) => item.name);
  }
  const selectableTypes = guitarTypes.filter((item) => {
    const intersection = item.availableStrings.filter((el) => selectedStrings.includes(el));
    return intersection.length > 0;
  });
  return selectableTypes.map((item) => item.name);
};

export const generateFilteredGuitars = (guitars, minPrice, maxPrice, selectedStrings, typeFilters) => {
  let filtered = [...guitars];
  if (minPrice > 0) {
    filtered = guitars.filter((item) => item.price >= minPrice);
  }
  if (maxPrice > 0) {
    filtered = filtered.filter((item) => item.price <= maxPrice);
  }
  if (selectedStrings.length > 0) {
    filtered = filtered.filter((item) => selectedStrings.indexOf(item.strings) !== -1);
  }
  const selectedTypeFilters = typeFilters.filter((item) => item.isSelected);
  const selectedTypeNames = selectedTypeFilters.map((item) => item.name);
  if (selectedTypeFilters.length > 0) {
    filtered = filtered.filter((item) => selectedTypeNames.indexOf(item.type) !== -1);
  }
  return filtered;
};
