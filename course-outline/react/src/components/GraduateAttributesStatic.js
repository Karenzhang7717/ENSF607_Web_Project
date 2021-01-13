import React from 'react';
import MaterialTable from 'material-table';
import { useState } from "react";
import { TableIcons } from "../constants/TableConstants";


const GraduateAttributesStaticTable = () => {

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
          
        />
    )
}


export default GraduateAttributesStaticTable;
