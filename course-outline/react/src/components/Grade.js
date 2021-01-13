import React from 'react';
import MaterialTable from 'material-table';
import { TableIcons } from "../constants/TableConstants";


export default function Editable() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Component', field: 'component' },
    { title: 'Learning Outcomes', field: 'outcome' },
    { title: 'Weight%', field: 'weight', type: 'numeric' },

  ]);

  const [data, setData] = useState([
    { component: 'Assignments', outcome: '1-7', weight: 25 },
    { component: 'Project', outcome: '1-7', weight: 10 },
    { component: 'Total', outcome: '', weight: 35}
  ]);

  return (

      <
        MaterialTable
        title="Final Grade Determination"
        columns={columns}
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
                const newTotal = total.weight + newData.weight;
                if (newTotal <= 100) {
                  total.weight = newTotal;
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
                dataUpdate[dataUpdate.length - 1].weight += newData.weight - oldData.weight;
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
                dataDelete[dataDelete.length - 1].weight -= oldData.weight;
                setData([...dataDelete]);
                resolve()
              }, 1000)
            }),
        }}

      />
  )
}
