import styles from "./Registration.module.css";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { API } from "../../api";
function Registration() {
  const [data, setData] = useState({
    nickname: "",
    name: "",
    last_name: "",
    profile_image: "",
    password: "",
    password2: ""
  })
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
  const submitData = async ()=> {
      const formData = new FormData();
      formData.append("last_name",data.last_name);
      formData.append("name",data.name);
      formData.append("nickname",data.nickname);
      formData.append("password", data.password);
      formData.append("password2", data.password2);
      formData.append("profile_image", data.profile_image)
    
      const response = await fetch(API.users.registration , {
        method: "POST",
        body: formData
      })
      const info = await response.json()
      if(info){
        alert('Пользователь успешно создан')
      }
  }
  console.log(data);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.forCentr}>
          <Link className={styles.logo} to="/home">
            Your Logo
          </Link>
        </div>
        <div className={styles.firNameEnt}>
        
          <Typography variant="subtitle1" component="p">
            Фамилия
          </Typography>
          <TextField id="outlined-basic" variant="outlined" 
                size="small"
                name="last_name"
                value={data.last_name}
                onChange= {onChangeInfo}
          />
        </div>
        <div className={styles.lastNameEnt}>
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
            Выберите аватар
          </Typography>
          <TextField id="outlined-basic" variant="outlined" size="small" 
              type="file"
              onChange= {changeFile}
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
        <div className={styles.passEnt}>
          <Typography variant="subtitle1" component="p">
            Пароль
          </Typography>
          <div>
            <FormControl>
              <TextField
                id="outlined-passwordEnt2"
                type="password"
                autoComplete="current-password"
                size="small"
                value={data.password}
                name="password"
                onChange= {onChangeInfo}
              />
            </FormControl>
            <div className={styles.limitSim}>
              <Typography variant="subtitle1" component="p">
                Лимит на символы
              </Typography>
            </div>
          </div>
        </div>

        <div className={styles.passEnt2}>
          <Typography variant="subtitle1" component="p">
            Подтверждение пароля
          </Typography>
          <FormControl>
            <TextField
              id="outlined-passwordEnt3"
              type="password"
              autoComplete="current-password"
              size="small"
              name="password2"
              value={data.password2}
              onChange= {onChangeInfo}
            />
          </FormControl>
        </div>
        <div className={styles.forCentr}>
          <Button variant="contained" size="small" onClick={submitData}>
            Регистрация
          </Button>
        </div>
        <Typography
          className={styles.noAccLabel}
          variant="subtitle1"
          component="p"
        >
          Уже есть логин?
          <Link className={styles.regLink} to="/login">
            Войти
          </Link>
        </Typography>
      </div>
    </>
  );
}

export default Registration;
