import { useState, useEffect } from 'react';
import { COURSEINFO_URL} from '../constants/index.js'
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';



function SavedOutlineList() {

  const [courseInfos, setCourseInfos] = useState([])

  useEffect(() => {
    async function fetchCourseInfo() {
      const res = await fetch(COURSEINFO_URL);
      res.json()
      .then(data => {
        setCourseInfos(data);
      })
      .catch(err => alert(err));
    }
      fetchCourseInfo();
  }, [])

  const courseList = () => {
    const list_outlines = [];
    for (let i = 0; i < courseInfos.length; i++) {
      list_outlines.push(
        <li key={courseInfos[i].courseNum}>
          <h3 style={{display : 'inline-block'}}>{courseInfos[i].courseNum}</h3>
          <VisibilityIcon className='icon' onClick={(e) => window.location.href=`/saved-forms/${courseInfos[i].courseNum}`}/>
          <EditIcon className='icon not-implemented'/>
          <DeleteIcon className='icon not-implemented'/>
        </li>
    )}
    return <div className='outline-list'>{list_outlines}</div>
  }

  return courseList();
}

export default SavedOutlineList;