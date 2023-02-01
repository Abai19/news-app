import styles from './UserPage.module.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import { TextField, Typography , Button } from "@mui/material";
import { API } from "../api";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserImage from './image.png'
import { useEffect, useState } from 'react';
function UserPage () { 
    const [data,setData]= useState({
        name: "",
        last_name: "",
        nickname: "",
        profile_image: ""
    })
    useEffect(()=>{
        getUser()
    },[])
    const getUser = async ()=> {
        const response = await fetch(API.users.user, {
            method : "GET",
            headers:{
                "Authorization":`Token ${localStorage.getItem("token")}`
            }
        })
        const list = await response.json()
        console.log(list);
        if(list){
            setData(list)
        }
    }
    const onChangeInfo =(e)=> {
        setData( {
          ...data,
          [e.target.name] : e.target.value
        })
    }
    const changeFile=(e)=>{
      setData({
        ...data,
        profile_image: e.target.files[0]
      })
    }
    const submitData= async ()=> {
        const formData = new FormData();
      formData.append("last_name",data.last_name);
      formData.append("name",data.name);
      formData.append("nickname",data.nickname);
      formData.append("profile_image", data.profile_image)
    
      const response = await fetch(API.users.user , {
        method: "PUT",
        headers:{
            "Authorization":`Token ${localStorage.getItem("token")}`
        },
        body: formData
      })
      const info = await response.json()
      if(info){
        alert(' Успешно изменено')
      }
    }
    console.log(data)
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                    <SearchIcon/>
                    <AccountBoxIcon/>
                    <MenuIcon/>
            </header>
            <div className={styles.contentMainBlock}>
                <div className={styles.contentFirstBlock} >
                    {
                        data.profile_image ? 
                                <img src={`https://megalab.pythonanywhere.com/${data.profile_image}`}/>
                                :
                                <div className={styles.avatar}>
                                    <img src={UserImage} alt="" />
                                 </div>
                    }
                
                    <div className={styles.editAvatar}>
                    <TextField id="outlined-basic" variant="outlined" size="small" 
              type="file"
              onChange= {changeFile}
          />
                        {/* <Typography component="p" variant="subtitle1" > Добавить фото</Typography> */}
                        <Typography component="p" variant="subtitle1" > Удалить</Typography>
                    </div>
                </div>
                <div>
                    <div className={styles.nickEnt}>
                        <Typography variant="subtitle1" component="p">
                            Фамилия
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" size="small" 
                            name="last_name"
                             value={data.last_name}
                             onChange= {onChangeInfo}
                        />
                    </div>
                    <div className={styles.nickEnt}>
                        <Typography variant="subtitle1" component="p">
                            Имя
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" size="small" 
                            name="name"
                            value={data.name}
                            onChange= {onChangeInfo}
                        />
                    </div>
                    <div className={styles.nickEnt}>
                        <Typography variant="subtitle1" component="p">
                            Никнейм
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" size="small" 
                            name="nickname"
                            value={data.nickname}
                            onChange= {onChangeInfo}
                        />
                        
                    </div> 
                    <Button variant="contained" className={styles.btnSend} size="small" onClick={submitData}>
                             Сохранить 
                    </Button> 
                </div>
            </div>
        </div>
    )
}
export default UserPage