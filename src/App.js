import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Home from "./Home";
import { Route, NavLink, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'


const HeaderContainer = ({ children, path }) => {
  return (
    <>
      <header className="App-header1">
        <div>{path}</div>
        <nav>
          <NavLink to="/accounts">Accounts</NavLink>
          <NavLink to="/deposits">Deposits</NavLink>
        </nav>
      </header>
      {children}
    </>
  );
};

const Home = () => <div>Home content is here</div>;
const Pay = () => <div>Pay content is here</div>;
const Accounts = () => <HeaderContainer path="/accounts"><div>Accounts content is here</div></HeaderContainer>;
const Deposits = () => <HeaderContainer path="/deposits"><div>Deposits content is here</div></HeaderContainer>;

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink activeClassName='is-active' to="/">home</NavLink>
            <NavLink activeClassName='is-active' to="/accounts">Have</NavLink>
            <NavLink activeClassName='is-active' to="/pay">Pay</NavLink>
          </nav>
        </header>
        <section className="App-section">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/accounts" component={Accounts} />
            <Route exact path="/deposits" component={Deposits} />
            <Route exact path="/pay" component={Pay} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default withRouter(App);
