import { useState, useEffect } from 'react';
import { COURSEINFO_URL} from '../constants/index.js'

function CourseInfoStatic() {

    const [courseInfo, setCourseInfo] = useState({
        courseNum: "",
        courseName: "",
        courseDesc: "",
        courseHour: "",
        credit: "",
        link: ""
    })

    const updateCourseInfo = (arr) => {
      const data = arr[0];
      console.log(arr);
      console.log(data);
      setCourseInfo({
        ...courseInfo,
        courseNum: data.courseNum,
        courseName: data.courseName,
        courseDesc: data.courseDesc,
        courseHour: data.courseDesc,
        credit: data.credit,
        link: data.link
      })

    }

    useEffect(() => {
        async function fetchCourseInfo() {
            const res = await fetch(COURSEINFO_URL);
            res.json()
            .then(data => updateCourseInfo(data))
            .catch(err => alert(err));
        }
        fetchCourseInfo();
    }, [])

    return (
        <div>
            <h2>{courseInfo.courseNum}</h2> 
            <h2>{courseInfo.courseName}</h2> 
            <p>{courseInfo.courseDesc}</p>
            <div style={{display: 'flex'}}>
              <label style={{flex:'1'}}>Course Hour:</label>
              <label style={{flex:'4'}}>{courseInfo.courseHour}</label>
            </div>
            <div style={{display: 'flex'}}>
              <label style={{flex:'1'}}>Academic Credit:</label>
              <label style={{flex:'4'}}>{courseInfo.credit}</label>
            </div>
            <div style={{display: 'flex'}}>
              <label style={{flex:'1'}}>Calendar Reference:</label>
              <a href={courseInfo.link} style={{flex:'4'}}>{courseInfo.link}</a>
            </div>
        </div>
  );
}

export default CourseInfoStatic;