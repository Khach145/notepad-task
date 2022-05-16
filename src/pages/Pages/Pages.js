import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { List } from '../../components/Components';
import {PagesApi} from '../../api/pages'
import './pages.css';
import { getDate } from '../../utils/getDate';


const Pages = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const [addingSession, setAddingSession] = useState(false)

    const [data, setData] = useState([
    ])

    useEffect(() => {
        PagesApi.getSessionPage(location.pathname.split('/')[2]).then((data) => {
            const newArr = data.data.map(el => {
                 return {
                  id: el._id, name: el.name, date: el.date
                 }
             })
             setData([...newArr])
         
        })
     }, [])

    const handleClick = (id) => {
        navigate(`page/${id}`)
    }

    useEffect(() => {
        setAddingSession(false)
    }, [data])

    const getValue = (string) => {
        PagesApi.addPage({
            name : string ? string : "Empty Name",
            sessionId: location.pathname.split('/')[2],
            date: getDate()
        })
        .then((res) => {
            setData([...data, {
                name : string ? string : "Empty Name",
                id: res.data._id,
                sessionId:location.pathname.split('/')[2],
                date: res.data.date
            }]);
        })
    }

    const getDeleteId = (id) => {
        PagesApi.deletePage(id).then(() => {
            setData(data.filter(item => item.id !== id))
        })
    }

    const renderList = ({name, id, date}) => {
        return <List onClick={()=>handleClick(id)} name={name} getDeleteId={getDeleteId} id={id} key={id} date={date} />
    }


    return (
        <div className='session_main'>
            <div className='session_title'>ADD PAGE</div>
            <div className='session_list'>
                {data.map(renderList)}
                <List onClick={()=>setAddingSession(true)} name={"Add Page"} type={addingSession ? "Input" : "Add"} key={"Add Page"}  getValue={getValue}/>
            </div>
        </div>
    )
}

export default Pages