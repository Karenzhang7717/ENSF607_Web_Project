import {useState} from 'react';

function CourseInfo() {
  const [courseNumber, setCourseNumber] = useState("");
  
  return (
    <div>
        <h1>1. Course Information</h1>
        <div>
            <input className="input"
            type="text"
            placeholder="Enter course number"
            value={courseNumber}
            onChange={(e) => setCourseNumber(e.target.value)}
            onKeyDown={(e) => setCourseNumber(e.target.value)}
            />
            <h2>ENSF 409</h2> 
            <h2>Principles of Software Development</h2>
        </div>
    </div>
  );
}

export default CourseInfo;