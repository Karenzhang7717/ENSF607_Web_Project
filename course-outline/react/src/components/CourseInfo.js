import axios from 'axios'
import { useState } from 'react';
import { COURSEINFO_URL, STYLE_BUTTONS } from '../constants/index'


function CourseInfo(props) {

  // const [hourNotEmpty, setHourNotEmpty] = useState(false);
  // const [creditNotEmpty, setCreditNotEmpty] = useState(false);
  // const [urlNotEmpty, setUrlNotEmpty] = useState(false);

  const style_input1 = {
    display: 'flex',
    flexDirection: 'column',
  };

  const [courseInfo, setCourseInfo] = useState({
    courseNum: "",
    courseName: "",
    courseDesc: "",
    courseHour: "",
    credit: "",
    link: ""
  })

  const handleChange = (e) => {
    setCourseInfo({
      ...courseInfo,
      [e.target.name]: e.target.value
    })
  }

  const sendCourseInfo = (data) => {
    axios.post(COURSEINFO_URL, data)
      .then(alert('Saved Successfully!'))
      .catch(err => alert(err));
    props.onCourseNumberChange(courseInfo.courseNum);
  }

  const clearFields = (data) => {
    setCourseInfo({
      ...courseInfo,
      courseNum: "",
      courseName: "",
      courseDesc: "",
      courseHour: "",
      credit: "",
      link: ""
    })
  }

  // const displayCourseHour = (e) => {
  //   setCourseHour(e.target.value);
  //   if (e.target.value !== '')
  //     setHourNotEmpty(hourNotEmpty => true);
  //   else
  //     setHourNotEmpty(hourNotEmpty => false);
  // };

  // const displayCourseCredit = (e) => {
  //   setCourseCredit(e.target.value);
  //   if (e.target.value !== '')
  //     setCreditNotEmpty(creditNotEmpty => true);
  //   else
  //     setCreditNotEmpty(creditNotEmpty => false);
  // };

  // const displayCalendarUrl = (e) => {
  //   setCalendarUrl(e.target.value);
  //   if (e.target.value !== '') 
  //     setUrlNotEmpty(urlNotEmpty => true);
  //   else 
  //     setUrlNotEmpty(urlNotEmpty => false);
  // };

  return (
    <div>
      <div style={style_input1}>
        <input className="input"
          type="text"
          name='courseNum'
          placeholder="Enter course number"
          value={courseInfo.courseNum}
          onChange={handleChange}
        />
        <input className="input"
          type="text"
          name='courseName'
          placeholder="Enter course name"
          value={courseInfo.courseName}
          onChange={handleChange}
        />
        <textarea className="input"
          style={{ height: '100px' }}
          type="text"
          name='courseDesc'
          placeholder="Enter course information"
          value={courseInfo.courseDesc}
          onChange={handleChange}
        />
        <div style={{ display: 'flex' }}>
          <label style={{ flex: '1' }}>Course Hours:</label>
          <input className="input"
            style={{ flex: '4' }}
            type="text"
            name="courseHour"
            placeholder="Enter course hours"
            value={courseInfo.courseHour}
            onChange={handleChange}
          // onChange={(e) => displayCourseHour(e)}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <label style={{ flex: '1' }}>Academic Credit:</label>
          <input className="input"
            style={{ flex: '4' }}
            type="text"
            name="credit"
            placeholder="Enter course credit"
            value={courseInfo.credit}
            onChange={handleChange}
          // onChange={(e) => displayCourseCredit(e)}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <label style={{ flex: '1' }}>Calendar Reference:</label>
          <input className="input"
            style={{ flex: '4' }}
            type="text"
            name="link"
            placeholder="Enter calendar url"
            value={courseInfo.link}
            onChange={handleChange}
          // onChange={(e) => displayCalendarUrl(e)}
          />
        </div>
      </div>
      <br></br>
      {/* <div>
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
        </div> */}
      <div style={STYLE_BUTTONS}>
        <button className="button"
          onClick={(e) => clearFields(courseInfo)}
        >Clear All</button>
        <button className="button"
          onClick={(e) => sendCourseInfo(courseInfo)}
        >Save</button>
      </div>

    </div>
  );
}

export default CourseInfo;