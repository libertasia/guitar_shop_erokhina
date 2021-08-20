import {useEffect} from 'react';
import {Event} from './const';

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

export {onOverlayClick};
