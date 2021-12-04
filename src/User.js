import "./App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
const User = () => {
    const { id } = useParams();
    const [animes, setAnimes] = useState();
    useEffect(() => {
        fetch(`https://secret-dawn-03483.herokuapp.com//tickets/${id}`, {
            method: "GET",
            mode: "no-cors"
        }).then(res => res.json()).then(response => {
            console.log(response)
            setAnimes(response.map(x => <picture className="container" key={x.date}><Avatar className="avatar" alt={x.author} src={x.avatar}/><p className="message">{x.author}: {x.message}</p><br></br></picture>))
        })
    }, [])
    return (
        <div className="main">
            {animes}
        </div>
    );
}
export default User;