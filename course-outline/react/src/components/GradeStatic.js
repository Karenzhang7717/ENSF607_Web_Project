import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useState, useReducer } from "react";
import { TableIcons } from "../constants/TableConstants";
import { COURSEGRADE_URL} from '../constants/index.js'


function GradeStatic() {

    const [courseGrades, setGrades] = useState({
        courseComponent: "",
        courseOutcomes: "",
        courseWeight: ""
    })

    const updateCourseGrade = (data) => {
        console.log(data);
        setGrades({
            ...courseGrades,
            courseComponent: data.courseComponent,
            courseOutcomes: data.courseOutcomes,
            courseWeight: data.courseWeight
        })

    }

    useEffect(() => {
        async function fetchCourseGrade() {
            const res = await fetch(COURSEGRADE_URL);
            res.json()
            .then(data => updateCourseGrade(data[0]))
            .catch(err => alert(err));
        }
        fetchCourseGrade();
    }, [])

   


    return (
      <MaterialTable
      style={{ padding: '0px' }}
      options={
        { search: false, paging: false }
      }
      columns={
        [
    { title: 'Component', field: 'courseComponent' },
    { title: 'Learning Outcomes', field: 'courseOutcomes' },
    { title: 'Weight%', field: 'courseWeight' }
         
        ]}
      title="Course Grades"
      icons={TableIcons}
      
              data={[
                { courseComponent: courseGrades.courseComponent, courseOutcomes: courseGrades.courseOutcomes, courseWeight:courseGrades.courseWeight }
               
              ]}
    />
 
  );
}

export default GradeStatic;





