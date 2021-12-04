import "./App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
const User = () => {
    const { id } = useParams();
    const [animes, setAnimes] = useState();
    const [loaded, setLoaded] = useState("loaded");
    useEffect(() => {
        fetch(`https://ticket-counter.herokuapp.com/tickets/${id}`).then(res => res.json()).then(response => {
            setAnimes(response.map(x => <picture className="container" key={x.date}>
                <Avatar className="avatar" alt={x.author} src={x.avatar}/>
                <p className="message">{x.author}: {x.message}</p>
                <br></br>
                </picture>))
                
            setLoaded("notLoaded")
        })
    }, [])
    return (
        <div className="main">
            <div className={loaded}><CircularProgress className="progress" /></div>
            {animes}
        </div>
    );
}
export default User;