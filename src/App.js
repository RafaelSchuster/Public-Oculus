import './App.css';
import Main from "./pages/mainpage"
import {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import ProfileForm from './components/ProfileForm.jsx'
import jwt_decode from "jwt-decode";

function App() {
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      const decoded = jwt_decode(token);
      console.log(decoded);
    }
  })
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={ProfileForm}></Route>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
        <Main />
      </Router>

    </div>
  );
}

export default App;

