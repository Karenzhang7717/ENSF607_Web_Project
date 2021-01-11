import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useState, useReducer } from "react";
import { TableIcons } from "./TableConstants";

function setLearningOutcomes(res) {
  console.log(res)
}

const OutcomesTable = () => {

  const [data, setData] = useState([])
  const [hasError, setErrors] = useState(false)

  useEffect(() => {
    async function fetchOutcomes() {
      const res = await fetch("http://127.0.0.1:8000/api/learningoutcomes/")
      console.log(res.json());
      res.json().then(res => setLearningOutcomes(res.response)).catch(err => setErrors(err));
    }
    fetchOutcomes();
  }, [])

  const paddingZero = {
    padding: "0px"
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
        ]}
      title="Learning Outcomes"
      icons={TableIcons}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
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

export default OutcomesTable;
