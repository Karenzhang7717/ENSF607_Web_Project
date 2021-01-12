import './App.css';
import 'bulma/css/bulma.css';
import { useState } from 'react';
import CourseInfo from './components/CourseInfo';
import CourseInfoStatic from './components/CourseInfoStatic';
import LearnOutcome from './components/LearnOutcome';
import Grade from './components/Grade';
import GPA from './components/GPA';
import Notes from './components/Notes';
import GraduateAttributesTable from "./components/GraduateAttributes";
import CEABGuidelines from "./components/CEABGuidelines";

function App() {

  const style_buttons = {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: '10px'
  };

  const [isNewForm, setIsNewForm] = useState(true);

  const setCourseInfo = (isNewForm) => {
    if (isNewForm) {
      return <CourseInfo />
    } else {
      return <CourseInfoStatic />
    }
  }

  return (
    <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <div>
        <ul>
          <li className={ isNewForm ? "is-active" : "" }
          onClick={(e) => setIsNewForm(true)}>
            <a href="#" aria-current="page">New Outline</a></li>
          <li className={ ! isNewForm ? "is-active" : "" }
          onClick={(e) => setIsNewForm(false)}>
            <a href="#">Retrieve Last Saved Outline</a></li>
        </ul>
      </div>
      <br></br>
      <div className="App">
        <h1>1. Course Information</h1>
        { setCourseInfo(isNewForm) }
        <h1>2. Learning Outcomes</h1>
        <p>At the end of this course, you will be able to:</p>
        <LearnOutcome />
        <br></br>
        <p style={{ wordBreak: 'break-all', whiteSpace: "normal" }}>Graduate Attributes are generic characteristics specified by the CEAB (Canadian Engineering Accreditation Board), expected to be exhibited by graduates of Canadian engineering schools. This table summarizes how the Learning Outcomes relate to key Graduate Attributes addressed in this course.</p>
        <br></br>
        <GraduateAttributesTable />
        <br></br>
        <CEABGuidelines />
        <h1>3. Final Grade Determination</h1>
        <p>The final grade in this course will be based on the following components:</p>
        <Grade />
        <Notes />
        <GPA />
      </div>
      <div style={style_buttons}>
        <button className="button">Clear All</button>
        <button className="button">Save</button>
      </div>
    </nav >
  );
}

export default App;
