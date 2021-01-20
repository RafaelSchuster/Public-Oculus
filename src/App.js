import './App.css';
import Main from "./pages/mainpage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
        <Main />
      </Router>

    </div>
  );
}

export default App;

