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


    const validateInput = (learningOutcomeNum, graduateAttribute, instructionLevel) => {
        let errorList = []
        if (!Number.isInteger(parseInt(learningOutcomeNum))) {
            errorList.push("Learning outcome number must be an integer!");
        }

        if (graduateAttribute == "" || graduateAttribute == undefined) {
            errorList.push("Please enter a graduate attribute!");
        }

        if (instructionLevel == "" || instructionLevel == undefined) {
            errorList.push("Please enter an instruction level!");
        }
        return errorList;
    }

    const handleRowAdd = (newData, resolve) => {
        let errorList = validateInput(newData.learningOutcomeNum, newData.graduateAttribute, newData.instructionLevel);
        if (errorList.length < 1) {
            props.onChange([...data, newData])
            resolve();
        } else {
            errorList.map(error => alert(error));
            resolve();
        }
    }

    const handleRowUpdate = (newData, oldData, resolve) => {
        let errorList = validateInput(newData.learningOutcomeNum, newData.graduateAttribute, newData.instructionLevel);
        if (errorList.length < 1) {
            const dataUpdate = [...data];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            props.onChange([...dataUpdate])
            resolve();

        } else {
            errorList.map(error => alert(error));
            resolve();
        }
    }

    const handleRowDelete = (oldData, resolve) => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        props.onChange([...dataDelete]);
        resolve();
    }

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
            data={newOutline ? data : existingData}
            editable={newOutline ? {
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            handleRowAdd(newData, resolve);
                            // props.onChange([...data, newData])
                            // resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            handleRowUpdate(newData, oldData, resolve);
                            // const dataUpdate = [...data];
                            // const index = oldData.tableData.id;
                            // dataUpdate[index] = newData;
                            // // setData([...dataUpdate]);
                            // // props.onChange([...data, newData]);
                            // resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            handleRowDelete(oldData, resolve);
                            // const dataDelete = [...data];
                            // const index = oldData.tableData.id;
                            // dataDelete.splice(index, 1);
                            // // setData([...dataDelete]);
                            // // props.onChange([...data, newData])
                            // resolve()
                        }, 1000)
                    }),
            } : {}}
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
