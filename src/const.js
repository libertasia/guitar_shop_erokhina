const DEFAULT_LOCALE = `ru`;

const ESC_KEY_CODE = 27;

const RADIX = 10;

const MAX_ITEMS_COUNT_PER_PAGE = 9;

const GITARAHIT_DISCOUNT_VALUE = 0.1;

const SUPERGITARA_DISCOUNT_VALUE = 700;

const GITARA2020_DISCOUNT_VALUE = 3500;

const MAX_GITARA2020_DISCOUNT_VALUE = 0.3;

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

const PromoCode = {
  GITARAHIT: `gitarahit`,
  SUPERGITARA: `supergitara`,
  GITARA2020: `gitara2020`,
};

const SortingType = {
  DEFAULT: `default`,
  PRICE: `price`,
  REVIEWS: `reviews`,
};

const SortingOrder = {
  NONE: `none`,
  ASCENDING: `asc`,
  DESCENDING: `desc`,
};

const InputType = {
  TEXT: `text`,
  NUMBER: `number`,
};

export {
  AppRoute, APIRoute, ClassName, DEFAULT_LOCALE, Rating, Event, ESC_KEY_CODE, RADIX, PromoCode, MAX_ITEMS_COUNT_PER_PAGE,
  GITARAHIT_DISCOUNT_VALUE, SUPERGITARA_DISCOUNT_VALUE, GITARA2020_DISCOUNT_VALUE, MAX_GITARA2020_DISCOUNT_VALUE, SortingType, SortingOrder,
  InputType
};
