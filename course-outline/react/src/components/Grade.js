
import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useState, useReducer } from "react";
import { TableIcons } from "../constants/TableConstants";
import { COURSEGRADE_URL } from "../constants/index";
import axios from 'axios';

const GradesTable = (props) => {
  const [setData] = useState([
    { courseComponent: 'Assignments', courseOutcomes: '1-7', courseWeight: 25 },
    { courseComponent: 'Project', courseOutcomes: '1-7', courseWeight: 10 },
    { courseComponent: 'Total', courseOutcomes: '', courseWeight: 35 }
  ])

  const courseNum = props.courseNum;
  const newOutline = props.newOutline;
  const data = props.data;
  const [existingData, setExistingData] = useState([]);


  useEffect(() => {
    async function fetchGrades() {
      axios.get(COURSEGRADE_URL)
        .then(function (response) {
          console.log(response.data);
          setExistingData(response.data.filter(x => x.courseNum == courseNum));
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    if (!newOutline) {
      fetchGrades();
    }
  }, [])

  const validateInput = (courseComponent, courseOutcomes, courseWeight) => {
    let errorList = []

    if (courseComponent == "" || courseOutcomes == "" || courseWeight == "") {
      errorList.push("Please enter a valid input");
    }

    return errorList;

  }

  const handleRowAdd = (newData, resolve) => {
    let errorList = validateInput(newData.courseComponent, newData.courseOutcomes, newData.courseWeight);
    const comp = data.slice(0, -1);
    const [total,] = data.reverse();
    const newTotal = total.courseWeight + newData.courseWeight;

    var dataUpdate = [];
    if (newTotal <= 100) {
      total.courseWeight = newTotal;
      dataUpdate = [...comp, newData, total];
    } else {
      errorList.push('Grade components cannot exceed 100%!');
    }
    if (errorList.length < 1) {
      props.onChange([...dataUpdate]);
      resolve();
    } else {
      errorList.map(error => alert(error));
      resolve();
    }
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    let errorList = validateInput(newData.courseComponent, newData.courseOutcomes, newData.courseWeight);
    const dataUpdate = [...data];
    const index = oldData.tableData.id;
    dataUpdate[index] = newData;
    dataUpdate[dataUpdate.length - 1].courseWeight += newData.courseWeight - oldData.courseWeight;
    if (dataUpdate[dataUpdate.length - 1].courseWeight > 100) {
      errorList.push('Grade components cannot exceed 100%!');
    }
    if (errorList.length < 1) {
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
      dataDelete[dataDelete.length - 1].courseWeight -= oldData.courseWeight;
      props.onChange([...dataDelete]);
      resolve();
  }


  return (

    <
      MaterialTable
      title="Final Grade Determination"
      columns={[
        { title: 'Component', field: 'courseComponent' },
        { title: 'Learning Outcomes', field: 'courseOutcomes' },
        { title: 'Weight%', field: 'courseWeight', type: 'numeric' },
      ]}
      data={newOutline ? data : existingData}
      icons={TableIcons}
      options={
        { search: false, paging: false }
      }
      editable={newOutline ? {
        isEditHidden: rowData => rowData.component === 'Total',
        isDeleteHidden: rowData => rowData.component === 'Total',
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleRowAdd(newData, resolve);
            }, 1000)
          }),
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


export default GradesTable;


  //     icons={TableIcons}
  //     data={newOutline ? data : existingData}
  //     editable={newOutline ? {
  //       onRowAdd: newData =>
  //         new Promise((resolve, reject) => {
  //           setTimeout(() => {
  //             handleRowAdd(newData, resolve);
  //           }, 1000)
  //         }).then(console.log("Hello")),
  //       onRowUpdate: (newData, oldData) =>
  //         new Promise((resolve, reject) => {
  //           setTimeout(() => {
  //             handleRowUpdate(newData, oldData, resolve);
  //           }, 1000)
  //         }),
  //       onRowDelete: oldData =>
  //         new Promise((resolve, reject) => {
  //           setTimeout(() => {
  //             handleRowDelete(oldData);
  //           }, 1000)
  //         }),
  //     } : {}}
  //   />
