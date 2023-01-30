import { TextField, Typography , Button } from "@mui/material";
import {Link, useNavigate} from "react-router-dom"
import styles from './Login.module.css'
import { useState } from "react";
import { API } from "../../api";
function Login () {
    const navigate = useNavigate();
    const [data, setData] = useState({
        nickname: "",
        password: ""
    })
    const onChange = (e)=> {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = async()=> {
        if(data.nickname && data.password == ''){
            alert('Введите пароль или логин');
            return;
        }
        const response = await fetch(API.users.login, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if(response.ok) {
            const result = await response.json()
            localStorage.setItem('token', result.token)
            navigate('/newsPage')
        }
        else {
            alert("error")
        }
    }
    console.log(data)
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <Typography variant="subtitle1" component="p">
                     Никнейм
                 </Typography>
                 <TextField id="outlined-basic"  variant="outlined" name="nickname" value={data.nickname} onChange={onChange}  size="small"/>
            </div>
            <div className={styles.block}>
                <Typography variant="subtitle1" component="p">
                Пароль
             </Typography>
                <TextField id="outlined-basic" type="password"  variant="outlined" name="password" value={data.password} onChange={onChange} size="small"/>
            </div>
            <div className={styles.btnBlock}>
                <Button variant="contained" className={styles.btnLogin} onClick={onSubmit}>войти</Button>
            </div>
                
                <Typography variant="subtitle1" component="p" className={styles.noAccLabel}>
                    Если у вас нет аккаунта, то перейдите по <Link to="/registration"> ссылке</Link>  
                </Typography>
      </div>
    )
}
export default Login