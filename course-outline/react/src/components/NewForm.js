import CourseInfo from './CourseInfo';
import LearnOutcome from './LearnOutcome';
import Grade from './Grade';
import GPA from './GPA';
import Notes from './Notes';
import GraduateAttributesTable from "./GraduateAttributes";
import CEABGuidelines from "./CEABGuidelines";
import { useRef, useState, useEffect } from 'react';
import { COURSEINFO_URL, STYLE_BUTTONS, LEARNINGOUTCOME_URL, GRADUATEATTRIBUTES_URL } from '../constants/index'
import axios from 'axios'

function NewForm() {

  const [clearAll, setClear] = useState(false);
  const [state, setState] = useState({ courseNum: "", learningOutcomes: [], graduateAttributes: [], grades: "", gpa: "" })

  useEffect(() => {
    if (clearAll) {
      console.log("From parent, clear all!")
      setState({ courseNum: "", learningOutcomes: [], graduateAttributes: [], grades: "", gpa: "" });
    }
  }, [clearAll])

  const onCourseNumberChange = (number) => {
    setState({ ...state, courseNum: number });
  }

  const onLearningOutcomeChange = (data) => {
    setState({ ...state, learningOutcomes: data });
  }

  const onGradeChange = (data) => {
    setState({ ...state, grades: data });
  }
  const onGPAChange = (data) => {
    setState({ ...state, gpa: data });
  }

  const onGraduateAttributeChange = (data) => {
    setState({ ...state, graduateAttributes: data });
  }

  const saveAll = () => {
    for (let i = 0; i < state.learningOutcomes.length; i++) {
      let thisData = state.learningOutcomes[i];
      thisData.courseNum = state.courseNum;
      axios.post(LEARNINGOUTCOME_URL, thisData);
    }
    for (let i = 0; i < state.graduateAttributes.length; i++) {
      let thisData = state.graduateAttributes[i];
      thisData.courseNum = state.courseNum;
      console.log(thisData);
      axios.post(GRADUATEATTRIBUTES_URL, thisData);
    }
    alert("saved successfully");
  }

  // console.log("Learning Outcome state from parent: ");
  // for (let i = 0; i < state.learningOutcomes.length; i++) {
  //   console.log(state.learningOutcomes[i]);
  // }

  // console.log("re-rendering parent with data: ");
  // state.learningOutcomes.map(x => console.log(x));

  return (

    <div className="new-form">
      <h1>1. Course Information</h1>
      <CourseInfo onCourseNumberChange={onCourseNumberChange} />
      <h1>2. Learning Outcomes</h1>
      <p>At the end of this course, you will be able to:</p>
      <LearnOutcome data={state.learningOutcomes} courseNum={state.courseNum} newOutline={true} onChange={onLearningOutcomeChange} />
      <br></br>
      <p style={{ wordBreak: 'break-all', whiteSpace: "normal" }}>Graduate Attributes are generic characteristics specified by the CEAB (Canadian Engineering Accreditation Board), expected to be exhibited by graduates of Canadian engineering schools. This table summarizes how the Learning Outcomes relate to key Graduate Attributes addressed in this course.</p>
      <br></br>
      <GraduateAttributesTable data={state.graduateAttributes} courseNum={state.courseNum} newOutline={true} onChange={onGraduateAttributeChange} />
      <br></br>
      <CEABGuidelines />
      <h1>3. Final Grade Determination</h1>
      <p>The final grade in this course will be based on the following components:</p>
      <Grade courseNum={state.courseNum} newGrade={true} onChange={onGradeChange} />
      <Notes />
      <GPA courseNum={state.courseNum} newGPA={true} onChange={onGPAChange} />
      <div style={STYLE_BUTTONS}>
        <button className="button"
          onClick={(e) => setClear(true)}
        >Clear All</button>
        <button className="button"
          onClick={(e) => saveAll()}
        >Save</button>
      </div>
    </div>



  );
}

export default NewForm;
