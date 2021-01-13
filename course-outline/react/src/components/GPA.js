
import React from 'react';
import MaterialTable from 'material-table';
import { TableIcons } from "../constants/TableConstants";

export default function Editable() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Letter Grade', field: 'grade' },
    { title: 'Total Mark (T)', field: 'mark' }
  ]);

  const [data, setData] = useState([
    { grade: 'A+', mark: 'T>=95.0%' },
    { grade: 'A', mark: '90.0<=T<95.0%' },
    { grade: 'A-', mark: '85.0<=T<90.0%' },
    { grade: 'B+', mark: '80.0<=T<85.0%' },
    { grade: 'B', mark: '75.0<=T<80.0%' },
    { grade: 'B-', mark: '70.0<=T<75.0%' },
    { grade: 'C+', mark: '65.0<=T<70.0%' },
    { grade: 'C', mark: '60.0<=T<65.0%' },
    { grade: 'C-', mark: '56.0<=T<60.0%' },
    { grade: 'D+', mark: '53.0<=T<56.0%' },
    { grade: 'D', mark: '50.0<=T<53.0%' },
    { grade: 'F', mark: 'T<50.0%' }
  ]);

  return (
    <
      MaterialTable
      title="GPA Conversion"
      columns={columns}
      data={data}
      icons={TableIcons}
      options={
        { search: false }
      }

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
