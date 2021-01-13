import CourseInfo from './CourseInfo';
import LearnOutcome from './LearnOutcome';
import Grade from './Grade';
import GPA from './GPA';
import Notes from './Notes';
import GraduateAttributesTable from "./GraduateAttributes";
import CEABGuidelines from "./CEABGuidelines";

function NewForm() {

  return (

    <div className="new-form">
        <h1>1. Course Information</h1>
        <CourseInfo />
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

  );
}

export default NewForm;
