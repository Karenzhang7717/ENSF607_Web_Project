import { useState, useEffect } from 'react';
import { COURSEINFO_URL} from '../constants/index.js'
import { Link } from "react-router-dom";


function SavedOutlineList() {

  const [courseInfos, setCourseInfos] = useState([])

  useEffect(() => {
    async function fetchCourseInfo() {
      const res = await fetch(COURSEINFO_URL);
      res.json()
      .then(data => {
        setCourseInfos(data);
        console.log(courseInfos);
      })
      .catch(err => alert(err));
    }
      fetchCourseInfo();
  }, [])

  const courseList = () => {
    const list_outlines = [];
    for (let i = 0; i < courseInfos.length; i++) {
      list_outlines.push(
        <li>
          <Link to={`/saved-forms/${courseInfos[i].id}`}>
              {courseInfos[i].courseNum}
          </Link></li>
    )}
    return <div>{list_outlines}</div>
  }

  return courseList();
}

export default SavedOutlineList;