import React, { useState, useId } from 'react';
import '../notepad.css'

const Todo = ({getValue}) => {
    const [inputData, setInputData] = useState({
        type: "todo",
        content: "",
        status: "undone",
        createdAt: new Date(Date.now()).toISOString().slice(5,10),
        id: ""
    })
    const id = useId()

    const handleInputChange = (e) => {
        
        setInputData({
            type: "todo",
            content: e.target.value,
            status: "undone",
            id: id
        })
    }
    return (
        <div>
            <textarea onChange={handleInputChange} value={inputData.content} className="text_part_textarea"></textarea>
            <div onClick={() => getValue(inputData)} className='text_part_button'>Save</div>
        </div>
    )
}

export default Todo