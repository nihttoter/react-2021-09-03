import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { BASKET_PAGE, RESTAURANTS_PAGE } from '../../redux/constants';
import { connect } from 'react-redux';

class App extends PureComponent {
  state = { pageToShow: RESTAURANTS_PAGE }; // 'Restaurants' || 'Basket'

  render() {
    const { page } = this.props;

    const restaurants =
      page === RESTAURANTS_PAGE ? (
        <Restaurants restaurants={this.props.restaurants} />
      ) : null;

    const basket =
      page === BASKET_PAGE ? (
        <Basket restaurants={this.props.restaurants} />
      ) : null;

    return (
      <div>
        <Header />
        {restaurants}
        {basket}
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
};

const mapStateToProps = (state, props) => ({
  page: state.page,
});

export default connect(mapStateToProps)(App);
