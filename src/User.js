import "./App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import moment from "moment";
const User = () => {
    const { id } = useParams();
    const [animes, setAnimes] = useState();
    const [loaded, setLoaded] = useState("loaded");
    useEffect(() => {
        fetch(`https://ticket-counter.herokuapp.com/tickets/${id}`).then(res => res.json()).then(response => {
            setAnimes(response.map(x => <picture className="container" key={x.date}>
                <Avatar className="avatar" alt={x.author} src={x.avatar}/>
                <div>
                    <p className="message-top"><b id="author">{x.author}</b> <small>{moment(x.timestamp).calendar()}</small></p>
                    <p className="message-bottom">{x.message}</p>
                </div>
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