import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {List} from '../../components/Components'
import {SessionsApi} from '../../api/sessions'
import './sessions.css'
import { getDate } from '../../utils/getDate'

const Sessions = () => {
    const navigate = useNavigate()
    const [addingSession, setAddingSession] = useState(false)
    const [data, setData] = useState([
    ])

    useEffect(() => {
       SessionsApi.getAllSessions().then((data) => {
           const newArr = data.data.map(el => {
                return {
                 id: el._id, name: el.name, date: el.date
                }
            })
            setData([...newArr])
        
       })
    }, [])

    const handleClick = (id) => {
        navigate(`/session/${id}`)
    }

    useEffect(() => {
        setAddingSession(false)
    }, [data])

    const getValue = async (string) => {
        const date = getDate()
        SessionsApi.addSession({
            name : string ? string : "Empty Name",
            date: date
        })
        .then((res) => {
            setData([...data, {
                name : string ? string : "Empty Name",
                id: res.data._id,
                date: res.data.date
            }]);
        })
    }

    const getDeleteId = (id) => {
        SessionsApi.deleteSession(id).then(() => {
            setData(data.filter(item => item.id !== id))
        })
    }

    const renderList = ({name, id, date}) => {
        return <List onClick={()=>handleClick(id)} name={name} getDeleteId={getDeleteId} id={id} key={id} date={date} />
    }

    return (
        <div className='session_main'>
            <div className='session_title'>Session Notes</div>
            <div className='session_list'>
                {data.map(renderList)}
                <List onClick={()=>setAddingSession(true)} name={"Add Page"} type={addingSession ? "Input" : "Add"} key={"Add Page"}  getValue={getValue} />
            </div>
        </div>
    )
}

export default Sessions