import { useMemo } from 'react';
import { connect } from 'react-redux';
import BasketItem from '../basket-item';

const Basket = ({ order, restaurants }) => {
  const menuProducts = useMemo(
    () =>
      restaurants
        .map((restaurant) => restaurant.menu)
        .reduce((agg, item) => [...agg, ...item], []),
    [restaurants]
  );

  const userItems = Object.entries(order)
    .filter(([key, value]) => value)
    .map(([key, value]) => {
      return (
        <BasketItem
          key={key}
          product={menuProducts.find((i) => i.id === key)}
          count={value}
        />
      );
    });

  return <main>{userItems}</main>;
};

const mapStateToProps = (state, props) => {
  return {
    order: state.order,
  };
};

export default connect(mapStateToProps)(Basket);
