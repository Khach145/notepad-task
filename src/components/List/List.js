import React, { useState } from 'react';
import group from '../../assets/Group.png'
import recycle from '../../assets/Vector.png'
import plus from '../../assets/plus.png'
import done from '../../assets/done.png'
import './list.css';

const List = ({name, onClick, id, type, date, getValue = () => {}, getDeleteId = () => {}}) => {

    const [inputValue, setInputValue] = useState("")

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleSendingValue = () => {
        getValue(inputValue)
        setInputValue("")
    }

    const handleDelete = (e) => {
        e.stopPropagation()
        getDeleteId(id)
    }

    const handleKeypress = (e) => {
        if(e.code === "Enter") {
            handleSendingValue()
        }
    }



    return (
        <div onClick={onClick}  className='list_main'>
            <div className='list_main_icon'>
                <img onClick={type==="Input" ? (() => handleSendingValue()) : undefined} src={type==="Add" ? plus : type==="Input" ? plus : group} alt="group" />
            </div>
        {type === "Input" ? <input onKeyDown={handleKeypress} autoFocus={true} value={inputValue} onChange={handleInput} className='list_main_input' type="text" /> : <p className='list_main_content'>{name}</p>}
        <div className='list_main_date'>{type !=="Add" ? date : ""}</div>
        {type !== "Add" &&  <img onClick={type==="Input" ? (() => handleSendingValue()) : (handleDelete)}  className={`${type === "Input" ? 'list_main_doneIcon' : 'list_main_recycleIcon'}`} src={type === "Input" ? done : recycle} alt="group" />}
        </div>
    )
}

export default List