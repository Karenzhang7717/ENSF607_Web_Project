import React, { useEffect } from 'react';
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
import axios from 'axios';

// import OutlineList from "./components/OutlineList"; TODO

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


function Outline(props) {
  const { outline } = props;
  return (
    <div className="outline-item">
      {/* {console.log(outline)} */}
      <Link to={"/" + outline.courseNum}>
        <h2>{outline.courseName}</h2>
      </Link>
    </div>
  )
}

const OutlineList = () => {
  const [outlines, setOutlines] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchOutlines() {
      axios.get("http://localhost:8000/api/courseinfos/")
        .then(function (response) {
          setOutlines(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    fetchOutlines();
    console.log(outlines);
  }, [])

  return (
    <div className="outlineListHeader">
      <header className="App-header">
        <h1>Course Outline List</h1>
      </header>
      <div className="outlineList">
        {outlines.map((item, index) => {
          return (
            <Outline outline={item} key={index} />
          )
        }
        )}
      </div>
    </div>
  );
}

function App(params) {
  const { courseNum } = useParams();
  console.log(courseNum);
  if (courseNum != "new-outline") {
    console.log("True");
  }

  const style_buttons = {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: '10px'
  };

  const setCourseInfo = (isNewForm) => {
    if (isNewForm) {
      return <CourseInfo />
    } else {
      return <CourseInfoStatic />
    }
  }

  const [isNewForm, setIsNewForm] = useState(true);
  return (
    <div>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <div>
          <ul>
            <li className={isNewForm ? "is-active" : ""}
              onClick={(e) => setIsNewForm(true)}>
              <a href="#" aria-current="page">New Outline</a></li>
            <li className={!isNewForm ? "is-active" : ""}
              onClick={(e) => setIsNewForm(false)}>
              <a href="#">Retrieve Last Saved Outline</a></li>
          </ul>
        </div>
      </nav >
      <br></br>
      <div className="App">
        <h1>1. Course Information</h1>
        {setCourseInfo(isNewForm)}
        <h1>2. Learning Outcomes</h1>
        <p>At the end of this course, you will be able to:</p>
        <LearnOutcome courseNum={courseNum} />
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
    </div>
  );
}

// export default App;



export default function Landing() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/new-outline">Create new outline</Link>
            </li>
            <li>
              <Link to="/outline-list">Review Outlines</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/outline-list">
            <OutlineList />
          </Route>
          <Route path="/:courseNum">
            <App />
          </Route>
          <Route path="/new-outline">
            <App />
          </Route>

        </Switch>
      </div>
    </Router >
  )
}
