import CourseInfoStatic from './CourseInfoStatic';
import LearnOutcome from './LearnOutcome';
import GradeStatic from './GradeStatic';
import GPAStatic from './GPAStatic';
import Notes from './Notes';
import GraduateAttributesTable from "./GraduateAttributes";
import CEABGuidelines from "./CEABGuidelines";
import { useParams } from 'react-router-dom';

function SavedForm() {

  const { courseNum } = useParams();
  console.log(courseNum);

  return (

    <div className="saved-form">
      <h1>1. Course Information</h1>
      <CourseInfoStatic courseNum={courseNum} />
      {/* {CourseInfoStatic(courseNum)} */}
      <h1>2. Learning Outcomes</h1>
      <p>At the end of this course, you will be able to:</p>
      <LearnOutcome courseNum={courseNum} newOutline={false} />
      <br></br>
      <p style={{ wordBreak: 'break-all', whiteSpace: "normal" }}>Graduate Attributes are generic characteristics specified by the CEAB (Canadian Engineering Accreditation Board), expected to be exhibited by graduates of Canadian engineering schools. This table summarizes how the Learning Outcomes relate to key Graduate Attributes addressed in this course.</p>
      <br></br>
      <GraduateAttributesTable courseNum={courseNum} newOutline={false} />
      <br></br>
      <CEABGuidelines />
      <h1>3. Final Grade Determination</h1>
      <p>The final grade in this course will be based on the following components:</p>
      <GradeStatic courseNum={courseNum} />
      <Notes />
      <GPAStatic courseNum={courseNum} />
      <br></br>
    </div>

  );
}

export default SavedForm;
