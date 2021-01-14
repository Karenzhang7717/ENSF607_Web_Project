import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useState } from "react";
import { TableIcons } from "../constants/TableConstants";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { LEARNINGOUTCOME_URL } from "../constants/index";
// import { getCourseNum } from "./Courseinfo";


// function getCookie(name) {

//   let cookieValue = null;
//   if (document.cookie && document.cookie !== '') {
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       // Does this cookie string begin with the name we want?
//       if (cookie.substring(0, name.length + 1) === (name + '=')) {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }

const OutcomesTable = (props) => {
  const courseNum = props.courseNum;
  const newOutline = props.newOutline;
  console.log("courseNum " + courseNum);
  const [data, setData] = useState([]);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    async function fetchOutcomes() {
      axios.get(LEARNINGOUTCOME_URL)
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
    console.log("onRowAdd newData: " + newData[0]);
    setData([...data, newData]);
    resolve();
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    console.log("onRowUpdate");
    const dataUpdate = [...data];
    const index = oldData.tableData.id;
    dataUpdate[index] = newData;
    setData([...dataUpdate]);
    resolve();
  }

  const handleRowDelete = (oldData, resolve) => {
    console.log("onRowDelete");
    const dataDelete = [...data];
    const index = oldData.tableData.id;
    dataDelete.splice(index, 1);
    setData([...dataDelete]);
    resolve()
  }

  // const addCourseNum = () => {
  //   for (let i = 0; i < data.length; i++) {
  //     data[i].courseNum = courseNum;
  //     console.log(data[i]);
  //   }
  // }
  // addCourseNum();

  // props.onChange(data);



  // console.log(data);
  // console.log("course number from courseinfos: " + getCourseNum())


  return (
    <MaterialTable
      style={{ padding: '0px' }}
      options={
        { search: false, paging: false }
      }
      columns={
        [
          { title: "Outcome Number", field: "learningOutcomeNum" },
          { title: "Outcome Description", field: "outcomeDescription" },
          { title: "Course Number", field: "courseNum", hidden: true, initialEditValue: { courseNum } }
        ]}
      title="Learning Outcomes"
      icons={TableIcons}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleRowAdd(newData, resolve);
            }, 1000)
          }).then(console.log("Hello")),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleRowUpdate(newData, oldData, resolve);
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleRowDelete(oldData);
            }, 1000)
          }),
      }}
    />
  )
}

export default OutcomesTable;
