import './App.css';
import 'bulma/css/bulma.css';
import NewForm from './components/NewForm';
import SavedForm from './components/SavedForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {

  return (

    <Router>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/">New Outline</Link>
            </li>
            <li>
              <Link to="/saved-forms">Retrieve Last Saved Outline</Link>
            </li>
          </ul>
      </nav >

      <Switch>
        <Route path="/" component={NewForm} exact/>
        <Route path="/saved-forms" component={SavedForm}/>
      </Switch>
    </Router>
  );
}

export default App;
