import "./App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import moment from "moment";
const User = () => {
    const { id } = useParams();
    const [animes, setAnimes] = useState();
    const [loaded, setLoaded] = useState("loaded");
    const [active, setActive] = useState(false);
    const [image, setImage] = useState("");
    useEffect(() => {
        fetch(`https://ticket-counter.herokuapp.com/tickets/${id}`).then(res => res.json()).then(response => {
            console.log(response)
            setAnimes(response.map(x => <picture className="container" key={x.date}>
                <Avatar className="avatar" alt={x.author} src={x.avatar} onClick={el => {
                    setImage(el.target.currentSrc)
                    setActive(true)
                }} />
                <div>
                    <p className="message-top"><b id="author">{x.author}</b> <small id="timestamp">{moment(x.date).calendar()}</small></p>
                    <p className="message-bottom">{x.message}</p>
                </div>
                <br></br>
                </picture>))
                
            setLoaded("notLoaded")
        })
    }, [])
    return (
        <div className="main">
            <Backdrop
                sx={{ color: '#fff', zIndex: 50}}
                open={active}
                onClick={() => setActive(false)}
            >
                <img src={image} alt="imagen" id="imagen"></img>
            </Backdrop>
            <div className={loaded}><CircularProgress className="progress" /></div>
            {animes}
        </div>
    );
}
export default User;