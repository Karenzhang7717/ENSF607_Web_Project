import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useState, useReducer } from "react";
import { TableIcons } from "../constants/TableConstants";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { GPA_URL } from "../constants/index";
import { getCourseNum } from "./CourseInfo";

const GPATable = (props) => {
  const courseNum = props.courseNum;
  console.log("courseNum " + courseNum);
  const [data, setData] = useState([])
  const [hasError, setErrors] = useState(false)
  const newOutline = props.newOutline;

  
useEffect(() => {
  async function fetchOutcomes() {
    axios.get(GPA_URL)
      .then(function (response) {
        setData(response.data.filter(x => x.courseNum == courseNum));
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  if (!newOutline) {
    fetchOutcomes();
  }
  if (data) {
    console.log("data is being sent");
    props.onChange(data);
  }
}, [data])

    
  

  const handleRowAdd = (newData, resolve) => {
    setData([...data, newData]);
    resolve();
  }

  // const handleChange = (e) => {
  //   setCourseInfo({
  //     ...GPATable,
  //     [e.target.name]: e.target.value
  //   })
  //   console.log("Course Num from courseInfo: " + courseInfo.courseNum);
  //   if (e.target.name == "courseNum") {
  //     props.onCourseNumberChange(e.target.value);
  //   }
  // }

  console.log(data);
  return (
    <MaterialTable
      style={{ padding: '0px' }}
      options={
        { search: false, paging: false }
      }
      columns={
        [
          
    { title: 'Letter Grade', field: 'letterGrade' },
    { title: 'Total Mark', field: 'totalMark' }
         
        ]}
      title="GPA Conversion"
      icons={TableIcons}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleRowAdd(newData, resolve)
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              console.log(data);
              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              resolve()
            }, 1000)
          }),
      }}
    />
  )
}

export default GPATable;
