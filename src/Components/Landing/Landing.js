import React, { Component } from "react";
import "./Landing.css";
import FavoritesContainer from "../FavoritesContainer/FavoritesContainer";
import LandingCurrencyContainer from "../LandingCurrencyContainer/LandingCurrencyContainer";
import NewsContainer from "../../Components/NewsContainer/NewsContainer";

class Landing extends Component {
  constructor({
    props,
    favorites,
    addToFavorites,
    removeFromFavorites,
    abbrevCurrencies,
    setFilter
  }) {
    super(props);
    this.state = {
      active: false,
      news: []
    };
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    const { active } = this.state;
    const {
      favorites,
      addToFavorites,
      removeFromFavorites,
      abbrevCurrencies,
      setFilter
    } = this.props;

    return (
      <div className="landing-literal">
        <NewsContainer />
        <FavoritesContainer {...this.props} />
        <LandingCurrencyContainer
          abbrevCurrencies={abbrevCurrencies}
          setFilter={setFilter}
          addToFavorites={addToFavorites}
        />
      </div>
    );
  }
}

export default Landing;
