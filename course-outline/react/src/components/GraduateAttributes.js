import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useState } from "react";
import { TableIcons } from "../constants/TableConstants";
import axios from 'axios';
import { GRADUATEATTRIBUTES_URL } from "../constants/index";


const GraduateAttributesTable = (props) => {
    const courseNum = props.courseNum;
    const newOutline = props.newOutline;
    const data = props.data;
    const [existingData, setExistingData] = useState([]);

    useEffect(() => {
        async function fetchAttributes() {
            axios.get(GRADUATEATTRIBUTES_URL)
                .then(function (response) {
                    console.log(response.data);
                    setExistingData(response.data.filter(x => x.courseNum == courseNum));
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
        if (!newOutline) {
            fetchAttributes();
        }
    }, [])

    return (
        <MaterialTable
            style={{ padding: '0px' }}
            options={
                { search: false, paging: false }
            }
            columns={
                [
                    { title: "Learning Outcome", field: "learningOutcomeNum" },
                    { title: "Graduate Attribute", field: "graduateAttribute" },
                    { title: "Instruction Level", field: "instructionLevel" }
                ]}
            title="Graduate Attributes"
            icons={TableIcons}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            // setData([...data, newData]);
                            props.onChange([...data, newData])
                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            // setData([...dataUpdate]);
                            // props.onChange([...data, newData]);
                            resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            // setData([...dataDelete]);
                            // props.onChange([...data, newData])
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
