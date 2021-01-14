
import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useState, useReducer } from "react";
import { TableIcons } from "../constants/TableConstants";
import {COURSEGRADE_URL } from "../constants/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';


const GradesTable = (props) => {
  const [data, setData] = useState([
    { courseComponent: 'Assignments', courseOutcomes: '1-7', courseWeight: 25 },
    { courseComponent: 'Project', courseOutcomes: '1-7', courseWeight: 10 },
    { courseComponent: 'Total', courseOutcomes: '', courseWeight: 35}
  ])
  //const [hasError, setErrors] = useState(false)
  const courseNum = props.courseNum;
  const newOutline = props.newOutline;
  const courseWeight = props.courseWeight;

  useEffect(() => {
      async function fetchGrades() {
        axios.get(COURSEGRADE_URL)
          .then(function (response) {
            setData(response.data.filter(x => x.courseNum == courseNum));
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      if (!newOutline) {
        fetchGrades();
      }
      if (data) {
        console.log("data is being sent");
        props.onChange(data);
      }
    }, [data])

  return (

      <
        MaterialTable
        title="Final Grade Determination"
        columns={[
          { title: 'Component', field: 'courseComponent' },
          { title: 'Learning Outcomes', field: 'courseOutcomes' },
          { title: 'Weight%', field: 'courseWeight', type: 'numeric' },
        ]}
        data={data}
        icons={TableIcons}
        options={
          { search: false, paging: false }
        }
        editable={{
          isEditHidden: rowData => rowData.component === 'Total',
          isDeleteHidden: rowData => rowData.component === 'Total',
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const comp = data.slice(0, -1);
                const [total,] = data.reverse();
                const newTotal = total.courseWeight + newData.courseWeight;
                if (newTotal <= 100) {
                  total.courseWeight = newTotal;
                  setData([...comp, newData, total]);
                } else {
                  setData([...comp, total]);
                  alert('Grade components cannot exceed 100%!');
                }
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                dataUpdate[dataUpdate.length - 1].courseWeight += newData.courseWeight - oldData.courseWeight;
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
                dataDelete[dataDelete.length - 1].courseWeight -= oldData.courseWeight;
                setData([...dataDelete]);
                resolve()
              }, 1000)
            }),
        }}
      />
  )
}


export default GradesTable;
