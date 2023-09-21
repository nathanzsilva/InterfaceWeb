import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useParams } from "react-router-dom";

import './detalhes.css'
import Arrow from '../../images/arrow.png'
import { SideBar } from "../../componentes/sidebar";

export const Detalhes = () => {
    const [comment, setComment] = useState({
        title: " ",
        body: " "
    });
    const { id } = useParams();
    useEffect(() => {
        api.get("posts/" + id).then((response) => {
            setComment(response.data)
        })
    }, [])
    return (
        <div className="flex row">
            <SideBar />
            <div className="detalhe">
                <Link to={"/"}>
                    <img src={Arrow} width={50} />
                </Link>
                <h1>{comment.title}</h1>
                <hr />
                <h3>{comment.body}</h3>
            </div>
        </div>
    )
}