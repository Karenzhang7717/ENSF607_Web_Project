import React from 'react';
import MaterialTable from 'material-table';
import { useState, useReducer } from "react";
import { TableIcons } from "./TableConstants";

const OutcomesTable = () => {

  const [data, setData] = useState([
    {
      outcomeNum: "1",
      outcomeDesc: "Test"
    }

  ])

  return (
    <MaterialTable
      options={
        { search: false, paging: false }
      }
      columns={
        [
          { title: "Outcome Number", field: "outcomeNum" },
          { title: "Outcome Description", field: "outcomeDesc" },
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


function LearnOutcome() {
  const [outcomes, setOutcomes] = useState("Please enter a learning outcome!");
  return (
    <div className='container'>
      <h1>2. Learning Outcomes</h1>
      <div className='outcomes_table'>
        <p>At the end of this course, you will be able to: </p>
        <OutcomesTable />
        <br></br>
      </div>
    </div>
  );
}

export default LearnOutcome;