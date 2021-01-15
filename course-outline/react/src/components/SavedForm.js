import CourseInfoStatic from './CourseInfoStatic';
import LearnOutcome from './LearnOutcome';
import Grade from './Grade';
import GPA from './GPA';
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
      <Grade courseNum={courseNum} newOutline={false}/>
      <Notes />
      <GPA courseNum={courseNum} newOutline={false}/>
      <br></br>
    </div>

  );
}

export default SavedForm;
