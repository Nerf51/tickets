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
    const [error, setError] = useState("notLoaded");
    useEffect(() => {
        fetch(`https://ticket-counter.herokuapp.com/tickets/${id}`).then(res => res.json()).then(response => {
            if(response.status){
                setLoaded("notLoaded")
                return setError("container-error")
            }
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
                <div className={error}>
                    <div className="container-error">
                        <h2 className="error">ERROR</h2>
                        <h1 className="error-four">404</h1>
                        <h2 className="error" id="last">PAGE NOT FOUND</h2>
                    </div>
                </div>
                {animes}
            </div>
        );
    }
export default User;