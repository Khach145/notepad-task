import React from 'react';
import '../notepad.css'

const DataList = ({allData: {type, content, id, status, createdAt}, statusChange}) => {

    const renderDataLists = (type, content, id, status, createdAt) => {
        if(type ==="text"){
            return (
                <div key={id} className='dataList_text'>{content}</div>
            )
        }
        if(type ==="todo") {
            return (
                <div key={id} className='dataList_todo '>
                    <div className={`dataList_todo_${status} dataList_todo_content`}>
                    {content}
                    </div>
                    
                    <div className='dataList_todo_buttons'>
                        <div onClick={(e) => statusChange(id, e.target.getAttribute("data"))} data="done" className='dataList_todo_button dataList_todo_buttons_done'>
                            Done
                        </div>
                        <div  onClick={(e) => statusChange(id, e.target.getAttribute("data"))} data="undone" className='dataList_todo_button dataList_todo_buttons_undone'>
                            UnDone
                        </div>
                    </div>
                </div>
            )
        }
        if(type ==="list") {
            const renderLists = (listText) => {
                return <li key={listText} >{listText}</li>
            }
            return (
                <div key={id} className='dataList_list'>
                <ul>
                {content.map(renderLists)}
                </ul>    
                </div>
            )
        }
    }

    return (
        <div className={`dataList_main_${type} dataList_main`}>
            {renderDataLists(type, content, id, status, createdAt)}
        </div>
    )
}

export default DataList