import {useState} from 'react';

function Notes () {
    const [notes, setNotes] = useState("");
    return (
        <textarea className="input"
        style={{ height: '200px' }}
        type="text"      
        placeholder="Notes:&#10;a) You must either achieve at least 50% on the final exam or achieve at least 50% on the weighted average of the midterm and final exam. You must also achieve an average of at least 50% on the lab section of the course. If you do not satisfy these caveats, you will not receive a passing grade.&#10;b) Circumstances beyond one’s control (e.g. sickness, etc.), leading to missing lab session and/or delays in assignment submissions should be discussed with the course instructor as soon as possible. Proper documentation must be provided. &#10;c) Conversion from a score out of 100 to a letter grade will be done using the    conversion chart shown below. This grading scale can only be changed during the term if the grades will not be lowered."								
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        />
    )
}

export default Notes;