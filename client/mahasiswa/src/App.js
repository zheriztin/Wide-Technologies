import './App.css';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import {Home} from "./views/Home.js"
import { Edit } from './views/Edit.js';
import { Add } from './views/Add.js';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/add">
          <Add />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
