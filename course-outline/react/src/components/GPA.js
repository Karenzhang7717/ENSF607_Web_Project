import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useState, useReducer } from "react";
import { TableIcons } from "../constants/TableConstants";
import axios from 'axios';
import { GPA_URL } from "../constants/index";


const GPATable = (props) => {
  const courseNum = props.courseNum;
  const newOutline = props.newOutline;
  const data = props.data;
  const [existingData, setExistingData] = useState([]);

  useEffect(() => {
    async function fetchGPA() {
      axios.get(GPA_URL)
        .then(function (response) {
          setExistingData(response.data.filter(x => x.courseNum == courseNum));
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    if (!newOutline) {
      fetchGPA();
    }
  }, [])

  const validateInput = (letterGrade, totalMark) => {
    let errorList = []
    
    if (letterGrade == "" || totalMark == "") {
      errorList.push("Please enter a valid input");
    }

    return errorList;

  }

  const handleRowAdd = (newData, resolve) => {
    let errorList = validateInput(newData.letterGrade, newData.totalMark);
    if (errorList.length < 1) {
      // setData([...data, newData]);
      props.onChange([...data, newData])
      resolve();
    } else {
      errorList.map(error => alert(error));
      resolve();
    }
  }
  console.log(data);

  const handleRowUpdate = (newData, oldData, resolve) => {
    let errorList = validateInput(newData.leterGrade, newData.totalMark);
    if (errorList.length < 1) {
      const dataUpdate = [...data];
      const index = oldData.tableData.id;
      dataUpdate[index] = newData;
      // setData([...dataUpdate]);
      props.onChange([...dataUpdate]);
      resolve();

    } else {
      errorList.map(error => alert(error));
      resolve();
    }
  }

  const handleRowDelete = (oldData, resolve) => {
    const dataDelete = [...data];
    const index = oldData.tableData.id;
    dataDelete.splice(index, 1);
    props.onChange([...dataDelete]);
    resolve()
  }
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
      // data={data}
      // editable={{
      //   onRowAdd: newData =>
      //     new Promise((resolve, reject) => {
      //       setTimeout(() => {
      //         handleRowAdd(newData, resolve)
      //       }, 1000)
      //     }),
      //   onRowUpdate: (newData, oldData) =>
      //     new Promise((resolve, reject) => {
      //       setTimeout(() => {
      //         const dataUpdate = [...data];
      //         const index = oldData.tableData.id;
      //         dataUpdate[index] = newData;
      //         setData([...dataUpdate]);
      //         console.log(data);
      //         resolve();
      //       }, 1000)
      //     }),
      //   onRowDelete: oldData =>
      //     new Promise((resolve, reject) => {
      //       setTimeout(() => {
      //         const dataDelete = [...data];
      //         const index = oldData.tableData.id;
      //         dataDelete.splice(index, 1);
      //         setData([...dataDelete]);
      //         resolve()
      //       }, 1000)
      //     }),
      data={newOutline ? data : existingData}
      editable={newOutline ? {
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
              handleRowDelete(oldData, resolve);
            }, 1000)
          }),

        } : {}}
    />
  )
}

export default GPATable;
