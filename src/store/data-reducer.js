import {ActionType} from './action';
const mockGuitars = require(`../guitars.json`);

const initialState = {
  guitars: mockGuitars,
  // authorizationStatus: AuthorizationStatus.INIT,
  // isDataLoaded: false,
  // isDataLoading: false,
  // isPromoLoaded: false,
  // isPromoLoading: false,
  // isFilmLoaded: false,
  // isReviewsLoaded: false,
  // isFilmsListLoading: false,
  // films: [],
  // film: {
  //   backgroundColor: ``,
  //   backgroundImage: ``,
  //   description: ``,
  //   director: ``,
  //   genre: ``,
  //   id: -1,
  //   isFavorite: false,
  //   name: ``,
  //   posterImage: ``,
  //   previewImage: ``,
  //   previewVideoLink: ``,
  //   rating: 0,
  //   released: 0,
  //   runTime: 0,
  //   scoresCount: 0,
  //   starring: [``],
  //   videoLink: ``
  // },
  // reviews: [],
  // favoriteFilms: [],
  // promo: {
  //   backgroundImage: ``,
  //   genre: ``,
  //   name: ``,
  //   posterImage: ``,
  //   released: 0,
  // },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload.films,
        isDataLoaded: action.payload.isDataLoaded,
      };
    // case ActionType.SET_IS_FILMS_LIST_LOADING:
    //   return {
    //     ...state,
    //     isFilmsListLoading: action.payload,
    //   };
    // case ActionType.LOAD_PROMO_FILM:
    //   return {
    //     ...state,
    //     promo: action.payload.film,
    //     isPromoLoaded: action.payload.isPromoLoaded,
    //   };
    // case ActionType.SET_IS_PROMO_LOADING:
    //   return {
    //     ...state,
    //     isPromoLoading: action.payload,
    //   };
    // case ActionType.LOAD_FAVORITE_FILMS_LIST:
    //   return {
    //     ...state,
    //     favoriteFilms: action.payload,
    //   };
    // case ActionType.LOAD_FILM:
    //   return {
    //     ...state,
    //     film: action.payload.film,
    //     isFilmLoaded: action.payload.isFilmLoaded,
    //   };
    // case ActionType.LOAD_REVIEWS:
    //   return {
    //     ...state,
    //     reviews: action.payload.reviews,
    //     isReviewsLoaded: action.payload.isReviewsLoaded,
    //   };
    // case ActionType.REQUIRED_AUTHORIZATION:
    //   return {
    //     ...state,
    //     authorizationStatus: action.payload,
    //   };
    // case ActionType.SET_FAVORITE_STATUS:
    //   const filmToUpdate = action.payload;
    //   return {
    //     ...state,
    //     promo: filmToUpdate.id === state.promo.id ? filmToUpdate : state.promo,
    //     film: filmToUpdate.id === state.film.id ? filmToUpdate : state.film,
    //   };
  }

  return state;
};

export {dataReducer};
