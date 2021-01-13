import './App.css';
import 'bulma/css/bulma.css';
import NewForm from './components/NewForm';
import SavedForm from './components/SavedForm';
import SavedOutlineList from './components/SavedOutlineList'
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
              <Link to="/saved-forms">Retrieve Saved Outlines</Link>
            </li>
          </ul>
      </nav >

      <Switch>
        <Route path="/" component={NewForm} exact/>
        <Route path="/saved-forms" component={SavedOutlineList} exact/>
        <Route path="/saved-forms/:id" component={SavedForm}/>
      </Switch>
    </Router>
  );
}

export default App;
