import api from '../../services/api'


import './home.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SideBar } from '../../componentes/sidebar';
import { NavBar } from '../../componentes/navbar';

const Home = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        api.get("posts").then((response) => {
            setComments(response.data)
        })
    }, [])
    return (
        <>
        <NavBar/>
        <div className="App flex row">            
            <SideBar />
            <div className='container'>
                
                <div className='posts-container'>
                    {comments.map((comment) => {
                        return (
                            <Link to={"post/" + comment.id}>
                                <div className='post'>
                                    <h2>{comment.title}</h2>
                                    <p>{comment.body}</p>
                                    <hr/>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;