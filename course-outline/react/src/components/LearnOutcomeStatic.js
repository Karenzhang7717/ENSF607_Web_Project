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

const OutcomesStaticTable = () => {
  const [data, setData] = useState([])
  const [hasError, setErrors] = useState(false)

  const id = 3;

  useEffect(() => {
    async function fetchOutcomes() {
      console.log(id);
      axios.defaults.xsrfCookieName = 'csrftoken';
      axios.defaults.xsrfHeaderName = 'X-CSRFToken';
      // use cookies for targetting specific detail api view
      // axios.get("http://127.0.0.1:8000/api/learningoutcomes/", { headers: { "X-CSRFToken": getCookie('csrftoken') } })
      axios.get("http://127.0.0.1:8000/api/learningoutcomes/")
        .then(function (response) {
          console.log(response.data);
          setData(response.data.filter(x => x.courseNum == 2))
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
     
    />
  )
}

export default OutcomesStaticTable;
