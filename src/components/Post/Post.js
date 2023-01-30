import { Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Post.module.css"
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Post ({image,text,title, id}){
return(
<>
<div className={styles.main}>
    <div className={styles.imgDiv}>
    <img className={styles.img}   src = {`https://megalab.pythonanywhere.com/${image}`}  alt={title}   />
    </div>
    <div className={styles.title}>
        <div className={styles.dataDiv}>
        <p className={styles.data}>30.01.2012</p>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </div>
    
    <h1 >{title}</h1>
    <p>{text}</p>
    <Link to={`${id}`}>Читать дальше</Link> <br />
    
    
    <ShareOutlinedIcon className={styles.svg}/>
    </div>
</div>
</>
)
 }
 export default Post