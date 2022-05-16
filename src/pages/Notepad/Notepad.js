import React, { useEffect, useState } from 'react';
import './notepad.css';
import close from '../../assets/close.png'
import textIcon from '../../assets/textIcon.png'
import todoIcon from '../../assets/todoIcon.png'
import listIcon from '../../assets/listIcon.png'
import {Text, List, Todo, DataList} from './components/Components'
import { useLocation } from 'react-router-dom';
import {NotepadApi} from '../../api/notepad'

const Notepad = () => {
    const location = useLocation()
    const [data, setData] = useState([])
    const [showAlert, setShowAlert] = useState(false)
    const [mode, setMode] = useState("")

    useEffect(() => {
        NotepadApi.getNotepad(location.pathname.split('/')[4])
        .then((data) => {
            if(!data[0]){
                setShowAlert(true)
                return
            } 
            setData([...data[0]?.content])
            if(!data[0]?.content?.length) {
                setShowAlert(true)
            } 
        })
    }, [])

    const handleSelectMode = (e) => {
        setMode(e.target.getAttribute("data"))
    }

    const statusChange = (id, status) => {
        const pageId = location.pathname.split('/')[4]
        let todoindex;
        data.forEach((el, i) => el.id === id && (todoindex = i))
        const allData = [...data]
        allData[todoindex].status = status
        NotepadApi.setNotepadContent(pageId,{ content: [...allData]})
        .then((res) => {
            setData([...allData])
        })
        setData([...allData])
    }

    const renderData = (allData, i) => {
        return <DataList key={i} allData={allData} statusChange={statusChange} />
    }

    const getValue = (value) => {
        if((value.type === "text" || value.type === "todo") && !value.content) {
            setMode("")
            return
        };
        if(value.type === "list" && !value.content.length) {
            setMode("")
            return
        };
        const id = location.pathname.split('/')[4]
        const body = {
            content : [...data, value]
        }
        NotepadApi.setNotepadContent(id, body)
        .then((res) => {
            setData([...data, value])
            setMode("")
        })
        
    }

    
    const renderModeContent = () =>{
        switch (mode) {
            case "text" :
                return <Text getValue={getValue} />;
            case "todo" :
                return <Todo getValue={getValue} />;
            case "list" :
                return <List getValue={getValue} />
            default :
                return null
        }
    }

    return (
        <div className='notePad_main'>
            <div className={`${!showAlert && "closing"} notePad_alert`}>
                <p className='notePad_alert_text'>You’re editing a new template</p>
                <img onClick={() => setShowAlert(false)} src={close} className='notePad_alert_X' alt='close' />
            </div>
            <div className='notePad_title'>
                Untitled
            </div>
            <div className='notePad_content'>
                <div className='dataList_wrapper'>
                {data.map(renderData)}
                </div>
                {mode === "" && <div className='notePad_content_select_type'>
                    <div data="text" onClick={handleSelectMode} className='notePad_content_select_type_el'>
                        <img data="text" src={textIcon} alt="textIcon" />
                        Text
                    </div>
                    <div data="todo" onClick={handleSelectMode} className='notePad_content_select_type_el'>
                    <img data="todo" src={todoIcon} alt="todoIcon" />
                        To-do list
                    </div>
                    <div data="list" onClick={handleSelectMode} className='notePad_content_select_type_el'>
                    <img data="list" src={listIcon} alt="listIcon" />
                        List
                    </div>
                </div>}
                {renderModeContent()}
            </div>
        </div>
    )
}

export default Notepad