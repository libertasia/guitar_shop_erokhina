const DEFAULT_LOCALE = `ru`;

const ESC_KEY_CODE = 27;

const RADIX = 10;

const Event = {
  WHEEL: `wheel`,
  KEY_DOWN: `keydown`,
  MOUSE_DOWN: `mousedown`,
};

const AppRoute = {
  ROOT: `/`,
  CART: `/cart`,
  CONTACTS: `/contacts`,
  COMPANY: `/company`,
  GUITAR: `/guitar`,
  SERVICE_CENTERS: `/serviceCenters`,
  ORDER: `/order`,
};

const APIRoute = {
  ROOT: `/`,
};

const ClassName = {
  DISPLAY_BLOCK: `display-block`,
  DISPLAY_NONE: `display-none`,
  VISUALLY_HIDDEN: `visually-hidden`,
};

const Rating = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

export {AppRoute, APIRoute, ClassName, DEFAULT_LOCALE, Rating, Event, ESC_KEY_CODE, RADIX};
