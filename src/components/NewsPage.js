import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import styles from './NewsPage.module.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import { API } from "../api";
import Post from "./Post/Post";
import { Checkbox, Typography } from "@mui/material";
import Header from "./Header";
import Filter from "./Filter"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function NewsPage (){
    const token = localStorage.getItem("token")
    const [tags, setTags]  = useState([])
    const navigate = useNavigate()
    const [newsList,setNewsList]= useState([])
    useEffect(()=>{
        if(!token){
            navigate("/login")
        }else{
            getAllNews()
            getAllTags()
        }
    },[])
    const getAllTags=async()=>{
        const response = await fetch(API.posts.tagList, {
            method : "GET",
            headers:{
                "Authorization":`Token ${localStorage.getItem("token")}`
            }
        })
        const list = await response.json()
        console.log(list);
        if(list){
            setTags(list)
        }

    }
    const getAllNews=async()=>{
        const response = await fetch(API.posts.newsList, {
            method : "GET",
            headers:{
                "Authorization":`Token ${localStorage.getItem("token")}`
            }
        })
        const list = await response.json()
        console.log(list);
        if(list){
            setNewsList(list)
        }

    }
    return(<>
         <Header/>
        <div className={styles.content}>
            <Filter tags={tags}/>
                    <div className={styles.contentLeft}>
        {
            newsList.length >0 ?
        
            newsList.map(item=>(
        <Post image={item.image} text={item.text} title={item.title} id={item.id}/>
        )):
        <Box sx={{ display: 'flex' }}>
            <CircularProgress/>
         </Box>

        }
         </div>
    

    </div>
    
    
    </>
        
    )
}
export default NewsPage;