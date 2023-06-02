import './App.css';
import {
  Route,
  Switch,
} from "react-router-dom";

import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import Loginn from "./components/Loginn";
import Data from './components/Data';

function App() {
  return (
    <div className="bg-light">
     <Switch>
    <Route exact path="/login" component={Loginn}></Route>
    <Route exact path="/data" component={Data}></Route>
    <Route exact path="/signup" component={SignUp}></Route>
    <Route exact component={NotFound}></Route>
     </Switch>
    </div>
  );
}

export default App;
