import { connect } from 'react-redux';
import { decrement, increment, remove } from '../../redux/actions';
import styles from './basket-item.module.css';
import Button from '../button';

const BasketItem = ({ product, count, increment, decrement, remove }) => {
  return (
    <article className={styles['basket-item']}>
      <header>
        Name: {product.name}
        <br />
        Price: {product.price}
        <br />
        Count: {count}
        <br />
        Total Price: {product.price * count}
      </header>
      <main>
        <div className={styles.count} data-id="product-amount">
          {count}
        </div>
        <div className={styles.buttons}>
          <Button
            onClick={decrement}
            icon="minus"
            data-id="product-decrement"
          />
          <Button onClick={increment} icon="plus" data-id="product-increment" />
          <Button onClick={remove} icon="cross" data-id="product-increment" />
        </div>
      </main>
    </article>
  );
};

const mapStateToProps = (state, props) => ({});

// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  remove: () => dispatch(remove(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
