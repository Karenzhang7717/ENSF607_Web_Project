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


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}


const GradesTable = () => {
  const [data, setData] = useState([])
  const [hasError, setErrors] = useState(false)

  const id = 3;

  useEffect(() => {
    async function fetchGrades() {
      console.log(id);
      axios.defaults.xsrfCookieName = 'csrftoken';
      axios.defaults.xsrfHeaderName = 'X-CSRFToken';
      // use cookies for targetting specific detail api view
      // axios.get("http://127.0.0.1:8000/api/coursegrades/", { headers: { "X-CSRFToken": getCookie('csrftoken') } })
      axios.get("http://127.0.0.1:8000/api/coursegrades/")
        .then(function (response) {
          console.log(response.data);
         setData(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })

     
    }
    fetchGrades();
  }, [])

  console.log(data);
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

export default GradesTable;
