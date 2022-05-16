import React, { useState } from 'react';
import '../notepad.css'

const List = ({getValue}) => {
    const [inputData, setInputData] = useState({
        type: "list",
        content: [],
        id: 7
    })
    const [text, setText] = useState("")

    const renderLists = (content) => {
        return <li key={content}>{content}</li>
    }

    const handleInputText = (e) => {
        setText(e.target.value)
    }

    const handleAddList = () => {
        if(text === "") return
        setText("")
        setInputData({
            ...inputData,
            content: [...inputData.content, text]
        })
    }

    return (
        <div className='list_input_part_wrapper'>
            <div >
                <ul>
                {inputData.content?.map(renderLists)}
                </ul>
                <div className='list_input_part'>
                <input className='list_input_part_input' onChange={handleInputText} type="text" value={text} />
                <button className='list_input_part_button' onClick={handleAddList}>Add</button>
                </div>
            </div>
            <div onClick={() => getValue(inputData)} className='text_part_button'>Save</div>
        </div>
    )
}

export default List