import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {getAllGuitars, getFilterGuitarTypes, getFilterMaxPrice, getFilterMinPrice, getFilterSelectedStrings} from '../../store/selectors';
import {getMinAvailablePrice, getMaxAvailablePrice, getAllAvailableStrings, getSelectableStrings, getSelectableTypeNames, GuitarShape} from '../../utils';
import {DEFAULT_LOCALE, InputType, RADIX} from '../../const';

const Filter = (props) => {
  const {allGuitars, minPrice, maxPrice, guitarTypes, selectedStrings, onTypeFilterClick, onStringsFilterChange, onMinPriceChange, onMaxPriceChange} = props;

  const [minPriceText, setMinPriceText] = useState(``);
  const [maxPriceText, setMaxPriceText] = useState(``);
  const [minPriceType, setMinPriceType] = useState(InputType.TEXT);
  const [maxPriceType, setMaxPriceType] = useState(InputType.TEXT);

  const minAvailablePrice = getMinAvailablePrice(allGuitars);
  const maxAvailablePrice = getMaxAvailablePrice(allGuitars);
  const availableStrings = getAllAvailableStrings(guitarTypes);
  const selectableStrings = getSelectableStrings(guitarTypes);
  const selectableTypeNames = getSelectableTypeNames(guitarTypes, selectedStrings);

  const handleTypeFilterChange = (evt) => {
    onTypeFilterClick(evt.target.name, evt.target.checked);
  };

  const handleStringsFilterChange = (evt) => {
    onStringsFilterChange(parseInt(evt.target.name, RADIX), evt.target.checked);
  };

  const handleMinPriceFocus = () => {
    if (minPrice > 0) {
      setMinPriceText(minPrice);
    }
    setMinPriceType(InputType.NUMBER);
  };

  const handleMinPriceChange = (evt) => {
    setMinPriceText(evt.target.value);
  };

  const handleMinPriceBlur = (evt) => {
    let newPrice = parseInt(evt.target.value, RADIX);
    if (!newPrice || newPrice < 0) {
      newPrice = minAvailablePrice;
    } else if (newPrice > maxPrice && maxPrice !== -1) {
      newPrice = maxPrice;
    }
    onMinPriceChange(newPrice);
    setMinPriceType(InputType.TEXT);
    setMinPriceText(newPrice.toLocaleString(DEFAULT_LOCALE));
  };

  const handleMaxPriceFocus = () => {
    if (maxPrice > 0) {
      setMaxPriceText(maxPrice);
    }
    setMaxPriceType(InputType.NUMBER);
  };

  const handleMaxPriceChange = (evt) => {
    setMaxPriceText(evt.target.value);
  };

  const handleMaxPriceBlur = (evt) => {
    let newPrice = parseInt(evt.target.value, RADIX);
    if (!newPrice || newPrice < 0) {
      newPrice = maxAvailablePrice;
    } else if (newPrice < minPrice) {
      newPrice = minPrice;
    }
    onMaxPriceChange(newPrice);
    setMaxPriceType(InputType.TEXT);
    setMaxPriceText(newPrice.toLocaleString(DEFAULT_LOCALE));
  };

  return (
    <section className="main__catalog-filter filter">
      <h2 className="filter__title">????????????</h2>
      <form className="filter__form" action="#" method="get">
        <section className="filter__form-section">
          <h3 className="filter__title-price">????????, <span className="filter__rub">&#x20bd;</span></h3>
          <div className="filter__price-wrapper">
            <label className="visually-hidden" htmlFor="min-price">???????? ????</label>
            <input type={minPriceType}
              autoComplete="off"
              placeholder={minAvailablePrice.toLocaleString(DEFAULT_LOCALE)}
              id="min-price"
              name="min-price"
              onFocus={handleMinPriceFocus}
              onChange={handleMinPriceChange}
              onBlur={handleMinPriceBlur}
              value={minPriceText}
            />
            <span className="filter__price-dash" />
            <label className="visually-hidden" htmlFor="max-price">???????? ????</label>
            <input type={maxPriceType}
              autoComplete="off"
              placeholder={maxAvailablePrice.toLocaleString(DEFAULT_LOCALE)}
              id="max-price"
              name="max-price"
              onFocus={handleMaxPriceFocus}
              onChange={handleMaxPriceChange}
              onBlur={handleMaxPriceBlur}
              value={maxPriceText}
            />
          </div>
        </section>

        <section className="filter__form-section">
          <h3 className="filter__title-type">?????? ??????????</h3>
          <ul className="filter__guitar-type-list">
            {guitarTypes.map((guitarType) =>
              <li className="filter__guitar-type-item" key={guitarType.name}>
                <input className="filter__checkbox visually-hidden" type="checkbox"
                  id={guitarType.name}
                  name={guitarType.name}
                  checked={guitarType.isSelected && selectableTypeNames.includes(guitarType.name)}
                  disabled={!selectableTypeNames.includes(guitarType.name)}
                  onChange={handleTypeFilterChange}
                />
                <label className="filter__label" htmlFor={guitarType.name}>{guitarType.caption}</label>
              </li>
            )}
          </ul>
        </section>

        <section className="filter__form-section">
          <h3 className="filter__title-strings">???????????????????? ??????????</h3>
          <ul className="filter__guitar-strings-list">
            {availableStrings.map((item) =>
              <li className="filter__guitar-string-item" key={item}>
                <input className="filter__checkbox visually-hidden" type="checkbox"
                  id={`${item}`}
                  name={`${item}`}
                  disabled={!selectableStrings.includes(item)}
                  checked={selectedStrings.includes(item) && selectableStrings.includes(item)}
                  onChange={handleStringsFilterChange}
                />
                <label className="filter__label" htmlFor={`${item}`}>{item}</label>
              </li>
            )}
          </ul>
        </section>
      </form>
    </section>
  );
};

Filter.propTypes = {
  allGuitars: PropTypes.arrayOf(GuitarShape).isRequired,
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  guitarTypes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    availableStrings: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
  selectedStrings: PropTypes.array.isRequired,
  onTypeFilterClick: PropTypes.func.isRequired,
  onStringsFilterChange: PropTypes.func.isRequired,
  onMinPriceChange: PropTypes.func.isRequired,
  onMaxPriceChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allGuitars: getAllGuitars(state),
  minPrice: getFilterMinPrice(state),
  maxPrice: getFilterMaxPrice(state),
  guitarTypes: getFilterGuitarTypes(state),
  selectedStrings: getFilterSelectedStrings(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTypeFilterClick(typeName, isSelected) {
    dispatch(ActionCreator.filterSetTypeSelection(typeName, isSelected));
  },
  onStringsFilterChange(stringsCount, isSelected) {
    if (isSelected) {
      dispatch(ActionCreator.filterAddStrings(stringsCount));
    } else {
      dispatch(ActionCreator.filterRemoveStrings(stringsCount));
    }
  },
  onMinPriceChange(price) {
    dispatch(ActionCreator.filterSetMinPrice(price));
  },
  onMaxPriceChange(price) {
    dispatch(ActionCreator.filterSetMaxPrice(price));
  },
});

export {Filter};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
