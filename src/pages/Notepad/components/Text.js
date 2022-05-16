import React, { useState } from 'react';
import '../notepad.css'

const Text = ({getValue}) => {

    const [inputData, setInputData] = useState({
        type: "text",
        content: "",
        id: 5
    })

    const handleInputChange = (e) => {
        setInputData({
            type: "text",
            content: e.target.value
        })
    }

    return (
        <div>
            <textarea onChange={handleInputChange} value={inputData.content} className="text_part_textarea"></textarea>
            <div onClick={() => getValue(inputData)} className='text_part_button'>Save</div>
        </div>
    )
}

export default Text