import CourseInfoStatic from './CourseInfoStatic';
import LearnOutcomeStatic from './LearnOutcomeStatic';
import GradeStatic from './GradeStatic';
import GPAStatic from './GPAStatic';
import Notes from './Notes';
import GraduateAttributesTableStatic from "./GraduateAttributesStatic";
import CEABGuidelines from "./CEABGuidelines";
import { useParams } from 'react-router-dom';

function SavedForm() {

  const courseNum = useParams();
  console.log(courseNum);

  return (

    <div className="App">
      <h1>1. Course Information</h1>
      {CourseInfoStatic(courseNum)}
      <h1>2. Learning Outcomes</h1>
      <p>At the end of this course, you will be able to:</p>        <LearnOutcomeStatic />
      <br></br>
      <p style={{ wordBreak: 'break-all', whiteSpace: "normal" }}>Graduate Attributes are generic characteristics specified by the CEAB (Canadian Engineering Accreditation Board), expected to be exhibited by graduates of Canadian engineering schools. This table summarizes how the Learning Outcomes relate to key Graduate Attributes addressed in this course.</p>
      <br></br>
      <GraduateAttributesTableStatic />
      <br></br>
      <CEABGuidelines />
      <h1>3. Final Grade Determination</h1>
      <p>The final grade in this course will be based on the following components:</p>
      <GradeStatic />
      <Notes />
      <GPAStatic />
    </div>

  );
}

export default SavedForm;
