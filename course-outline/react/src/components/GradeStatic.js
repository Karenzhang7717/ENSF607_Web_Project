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

const GradesStaticTable = (props) => {
  const courseNum = props.courseNum;
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
    
    />
  )
}

export default GradesStaticTable;


