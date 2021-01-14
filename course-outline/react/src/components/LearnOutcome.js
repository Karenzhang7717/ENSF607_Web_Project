import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useState } from "react";
import { TableIcons } from "../constants/TableConstants";
import axios from 'axios';
import { LEARNINGOUTCOME_URL } from "../constants/index";

const OutcomesTable = (props) => {
  const courseNum = props.courseNum;
  const newOutline = props.newOutline;
  const data = props.data;
  const [existingData, setExistingData] = useState([]);

  useEffect(() => {
    async function fetchOutcomes() {
      axios.get(LEARNINGOUTCOME_URL)
        .then(function (response) {
          console.log(response.data);
          setExistingData(response.data.filter(x => x.courseNum == courseNum));
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    if (!newOutline) {
      fetchOutcomes();
    }
  }, [])

  const validateInput = (learningOutcomeNum, outcomeDescription) => {
    let errorList = []
    if (!Number.isInteger(parseInt(learningOutcomeNum))) {
      errorList.push("Learning outcome number must be an integer!");
    }

    if (outcomeDescription == "" || outcomeDescription == undefined) {
      errorList.push("Please enter a learning outcome description");
    }
    return errorList;
  }

  const handleRowAdd = (newData, resolve) => {
    let errorList = validateInput(newData.learningOutcomeNum, newData.outcomeDescription);
    if (errorList.length < 1) {
      props.onChange([...data, newData])
      resolve();
    } else {
      errorList.map(error => alert(error));
      resolve();
    }
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    let errorList = validateInput(newData.learningOutcomeNum, newData.outcomeDescription);
    if (errorList.length < 1) {
      const dataUpdate = [...data];
      const index = oldData.tableData.id;
      dataUpdate[index] = newData;
      props.onChange([...dataUpdate])
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
    resolve();
  }

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
      data={newOutline ? data : existingData}
      editable={newOutline ? {
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

export default OutcomesTable;
