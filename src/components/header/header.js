import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Basket } from '../../icons/basket.svg';
import styles from './header.module.css';
import { connect } from 'react-redux';
import { setPage } from '../../redux/actions';
import { BASKET_PAGE, RESTAURANTS_PAGE } from '../../redux/constants';

const Header = ({ setPage, page }) => {
  const basketClick = () => {
    setPage(page === RESTAURANTS_PAGE ? BASKET_PAGE : RESTAURANTS_PAGE);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <Basket onClick={basketClick} className={styles.basket} />
    </header>
  );
};

const mapStateToProps = (state, props) => ({
  page: state.page,
});

const mapDispatchToProps = (dispatch, props) => ({
  setPage: (page) => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
