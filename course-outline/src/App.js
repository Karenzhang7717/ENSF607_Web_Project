import './App.css';
import 'bulma/css/bulma.css';
import CourseInfo from './components/CourseInfo';
import LearnOutcome from './components/LearnOutcome';
import Grade from './components/Grade';
import GPA from './components/GPA';
import Notes from './components/Notes';

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
        <h1>2. Learning Outcomes</h1>
        <p>At the end of this course, you will be able to:</p>
        <LearnOutcome />
        <br></br>
        <h1>3. Final Grade Determination</h1>
        <p>The final grade in this course will be based on the following components:</p>
        <Grade/>
        <Notes/>
        <GPA />
      </div>
    </nav>
  );
}

export default App;
