import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Registration from './components/Registration/Registration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <PrivateRoute path="/orderPlace/:id">
              <OrderPlace />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
