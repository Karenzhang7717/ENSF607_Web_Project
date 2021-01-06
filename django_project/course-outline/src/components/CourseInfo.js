import {useState} from 'react';


function CourseInfo() {
  const [courseNumber, setCourseNumber] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseInfo, setCourseInfo] = useState("");
  const [courseHour, setCourseHour] = useState("");
  const [courseCredit, setCourseCredit] = useState("");
  const [calendarUrl, setCalendarUrl] = useState("");
  const [hourNotEmpty, setHourNotEmpty] = useState(false);
  const [creditNotEmpty, setCreditNotEmpty] = useState(false);
  const [urlNotEmpty, setUrlNotEmpty] = useState(false);

  const style_input1 = { 
    display: 'flex',
    flexDirection: 'column',
  };

  const displayCourseHour = (e) => {
    setCourseHour(e.target.value);
    if (e.target.value !== '')
      setHourNotEmpty(hourNotEmpty => true);
    else
      setHourNotEmpty(hourNotEmpty => false);
  };

  const displayCourseCredit = (e) => {
    setCourseCredit(e.target.value);
    if (e.target.value !== '')
      setCreditNotEmpty(creditNotEmpty => true);
    else
      setCreditNotEmpty(creditNotEmpty => false);
  };

  const displayCalendarUrl = (e) => {
    setCalendarUrl(e.target.value);
    if (e.target.value !== '') 
      setUrlNotEmpty(urlNotEmpty => true);
    else 
      setUrlNotEmpty(urlNotEmpty => false);
  };

  return (
    <div>
        <h1>1. Course Information</h1>
        <div style={style_input1}>
            <input className="input"
            type="text"
            placeholder="Enter course number"
            value={courseNumber}
            onChange={(e) => setCourseNumber(e.target.value)}
            />
            <input className="input"
            type="text"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            />
            <textarea className="input"
            style={{ height: '100px' }}
            type="text"      
            placeholder="Enter course information"
            value={courseInfo}
            onChange={(e) => setCourseInfo(e.target.value)}
            />
            <div style={{display: 'flex'}}>
              <label style={{flex:'1'}}>Course Hours:</label>
              <input className="input"
              style={{flex:'4'}}
              type="text"
              placeholder="Enter course hours"
              value={courseHour}
              onChange={(e) => displayCourseHour(e)}
              />
            </div>
            <div style={{display: 'flex'}}>
              <label style={{flex:'1'}}>Academic Credit:</label>
              <input className="input"
              style={{flex:'4'}}
              type="text"
              placeholder="Enter course credit"
              value={courseCredit}
              onChange={(e) => displayCourseCredit(e)}
              />
            </div>
            <div style={{display: 'flex'}}>
              <label style={{flex:'1'}}>Calendar Reference:</label>
              <input className="input"
              style={{flex:'4'}}
              type="text"
              placeholder="Enter calendar url"
              value={calendarUrl}
              onChange={(e) => displayCalendarUrl(e)}
              />
            </div>
        </div>
        <br></br>
        <div>
            <h2>{courseNumber}</h2> 
            <h2>{courseName}</h2> 
            <p>{courseInfo}</p>
            { hourNotEmpty && (
            <div style={{display: 'flex'}}>
              <label style={{flex:'1'}}>Course Hour:</label>
              <label style={{flex:'4'}}>{courseHour}</label>
            </div>
            )}
            { creditNotEmpty && (
            <div style={{display: 'flex'}}>
              <label style={{flex:'1'}}>Academic Credit:</label>
              <label style={{flex:'4'}}>{courseCredit}</label>
            </div>
            )}
            { urlNotEmpty && (
            <div style={{display: 'flex'}}>
              <label style={{flex:'1'}}>Calendar Reference:</label>
              <a href={calendarUrl} style={{flex:'4'}}>{calendarUrl}</a>
            </div>
            )}
        </div>
        <br></br>
    </div>
  );
}

export default CourseInfo;