import React from 'react';
import MaterialTable from 'material-table';
import { useState, useReducer } from "react";
import { TableIcons } from "./TableConstants";

const CEABGuidelines = () => {

    const guidelineStyle = {
        paddingLeft: "0"
    }

    const listItemStyle = {
        listStyle: "disc",
        listStylePosition: "inside",
        listStyleType: "disc",
        paddingLeft: "20px",
        display: 'block'
    }

    return (
        <div style={guidelineStyle} className="guidelines">
            <p style={{ fontWeight: "bold", paddingLeft: 0 }}>CEAB Graduate Attributes</p>
            <ul style={listItemStyle}>
                <li>A1. A knowledge base for engineering</li>
                <li>A2. Problem analysis</li>
                <li>A3. Problem Analysis</li>
                <li>A4. Design</li>
                <li>A5. Use of engineering tools</li>
                <li>A6. Individual and team work</li>
                <li>A7. Communication skills</li>
                <li>A8. Professionalism</li>
                <li>A9. Impact of engineering on society/environment</li>
                <li>A10. Ethics and equity</li>
                <li>A11. Economics and project management</li>
                <li>A12. Life-long learning</li>
            </ul >
            <br></br>
            <p style={{ fontWeight: "bold", paddingLeft: 0 }}>Instruction Level</p>
            <ul style={listItemStyle}>
                <li>I (Introduced):     Introductory level</li>
                <li>D (Developed):      Intermediate development level</li>
                <li>A (Applied):        Advanced application level</li>
            </ul>
            <br></br>
        </div >
    )
}


export default CEABGuidelines;
