import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useState, useReducer } from "react";
import { TableIcons } from "../constants/TableConstants";
import { GPA_URL} from '../constants/index.js'


function GPAStatic() {

    const [courseGPA, setGPA] = useState({
        letterGrade: "",
        totalMark: ""
    })

    const updateGPA = (data) => {
        console.log(data);
        setGPA({
            ...courseGPA,
            letterGrade: data.letterGrade,
            totalMark: data.totalMark
        })

    }

    useEffect(() => {
        async function fetchGPA() {
            const res = await fetch(GPA_URL);
            res.json()
            .then(data => updateGPA(data[0]))
            .catch(err => alert(err));
        }
        fetchGPA();
    }, [])

   


    return (
      <MaterialTable
      style={{ padding: '0px' }}
      options={
        { search: false, paging: false}
      }
      columns={
        [
    { title: 'Letter Grade', field: 'letterGrade' },
    { title: 'Total Mark', field: 'totalMark' }
         
        ]}
      title="GPA Conversion"
      icons={TableIcons}
      
              data={[
                { letterGrade: courseGPA.letterGrade, totalMark: courseGPA.totalMark},
                { letterGrade: courseGPA.letterGrade, totalMark: courseGPA.totalMark}
               
              ]}
    />
 
  );
}

export default GPAStatic;





