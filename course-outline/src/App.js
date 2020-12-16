import './App.css';
import 'bulma/css/bulma.css';
import CourseInfo from './components/CourseInfo';
import LearnOutcome from './components/LearnOutcome';
import Grade from './components/Grade';
import GPA from './components/GPA';

function App() {

  return (
    <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <div>
        <ul>
          <li className="is-active"><a href="#" aria-current="page">New Outline</a></li>
          <li><a href="#">Retrieve Last Saved Outline</a></li>
        </ul>
      </div>
      <div>
        <button className="button">Save</button>
      </div>
      <br></br>
      <div className="App">
        <CourseInfo />
        <LearnOutcome />
        <Grade />
        <GPA />
      </div>
    </nav>
  );
}

export default App;
