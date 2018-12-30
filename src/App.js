import React, { Component } from "react";
import "./App.css";
import { FavoritesContainer } from "./Components/FavoritesContainer/FavoritesContainer";
import Hotdog from "./Components/Hotdog/Hotdog";
import LandingCurrencyContainer from "./Components/LandingCurrencyContainer/LandingCurrencyContainer";
import DataCleaner from "./Utils/Cleaners/";
import Search from "./Components/Search/Search";
import { Route, withRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import LoginForm from "./Components/LoginForm/LoginForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [1, 2, 3, 4, 5],
      abbrevCurrencies: [],
      expandedCurrencies: [],
      userEmail: "",
      news: []
    };
  }

  async componentDidMount() {
    const cleaner = new DataCleaner();
    const abbrevCurrencies = await cleaner.getAbbrevCurrencies();
    const expandedCurrencies = await cleaner.getExpandedCurrencies();
    this.setState({ abbrevCurrencies, expandedCurrencies });
  }

  addToFavorites = favorite => {
    this.setState({ favorites: [favorite, ...this.state.favorites] });
  };

  removeFromFavorites = id => {
    const filteredFavorites = this.state.favorites.filter(
      favorite => favorite.id !== id
    );
    this.setState({ favorites: filteredFavorites });
  };

  logInUser = userEmail => {
    this.setState({ userEmail });
  };

  displaySearch = (currency) => {
    this.setState({
      abbrevCurrencies: ,
      expandedCurrencies: ,
    })
  }

  render() {
    const { abbrevCurrencies, favorites } = this.state;
    return (
      <div className="App">
        <Hotdog />
        {/* //         <LoginForm logInUser={this.logInUser}/>
//         <RegisterForm />
//         <LandingCurrencyContainer abbrevCurrencies={abbrevCurrencies} /> */}
        <Search />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Landing
                  favorites={favorites}
                  addToFavorites={this.addToFavorites}
                  removeFromFavorites={this.removeFromFavorites}
                  abbrevCurrencies={abbrevCurrencies}
                />
              );
            }}
          />
          )}
          {/* <Route exact path="/about" component={about} />
          <Route exact path="/login" component={login} />
          <Route component={Wrong} /> */}{" "}
          */}
        </Switch>
        // <LoginForm />
        // <RegisterForm />
      </div>
    );
  }
}

export default App;
