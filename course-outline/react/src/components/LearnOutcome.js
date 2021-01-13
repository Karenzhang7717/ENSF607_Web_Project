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

<<<<<<< HEAD
const OutcomesTable = (props) => {
  const courseNum = props.courseNum;
  console.log(courseNum);
=======
const OutcomesTable = () => {
>>>>>>> fe295412d4340ef8bdd7dcfde47007417445d617
  const [data, setData] = useState([])
  const [hasError, setErrors] = useState(false)

  const id = 3;


  useEffect(() => {
    async function fetchOutcomes() {
      console.log(id);
      axios.defaults.xsrfCookieName = 'csrftoken';
      axios.defaults.xsrfHeaderName = 'X-CSRFToken';
      axios.get("http://127.0.0.1:8000/api/learningoutcomes/")
        .then(function (response) {
          console.log(response.data);
          setData(response.data.filter(x => x.courseNum == courseNum))
        })
        .catch(function (error) {
          console.log(error)
        })

      // OTHER VALID OPTIONS: 
      // const res = await fetch("http://127.0.0.1:8000/api/learningoutcomes/" + id, { headers: { "Content-Type": 'application/json' } })
      // const res = await fetch("http://127.0.0.1:8000/api/learningoutcomes/");
      // res.json().then(res => setData(res)).catch(err => setErrors(err));
    }
    fetchOutcomes();
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
