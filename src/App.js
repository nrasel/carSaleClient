import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Registration from './components/Registration/Registration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/explore">
              <Header />
              <Explore />
              <Footer />
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
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
