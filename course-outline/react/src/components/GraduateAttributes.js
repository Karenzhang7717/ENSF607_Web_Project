import React from 'react';
import MaterialTable from 'material-table';
import { useState } from "react";
import { TableIcons } from "../constants/TableConstants";


const GraduateAttributesTable = () => {

    const [data, setData] = useState([
        {
            outcomeNum: "1",
            gradAttribute: "A1. Test",
            instructionLevel: "A (Applied)"
        }
    ])

    const paddingZero = {
        padding: "0px"
    }

    return (
        <MaterialTable
            style={paddingZero}
            options={
                { search: false, paging: false }
            }
            columns={
                [
                    { title: "Learning Outcome", field: "outcomeNum" },
                    { title: "Graduate Attribute", field: "gradAttribute" },
                    { title: "Instruction Level", field: "instructionLevel" }
                ]}
            title="Graduate Attributes"
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


export default GraduateAttributesTable;

// function LearnOutcome() {
//   const [outcomes, setOutcomes] = useState("Please enter a learning outcome!");
//   return (
//     <div className="container" style={{ paddingLeft: "5px", margin: "0px" }}>
//       <h1>2. Learning Outcomes</h1>
//       <div className='outcomes_table' style={{ paddingLeft: "0px", margin: "0px" }}>
//         <p>At the end of this course, you will be able to: </p>
//         <OutcomesTable />
//         <br></br>
//       </div>
//     </div >
//   );
// }

// export default LearnOutcome;
