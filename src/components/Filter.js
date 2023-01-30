import { Checkbox, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { API } from "../api";
function Filter ({tags}) {
    return (
        <div className="contentRight">
            <Typography component="h1" > Фильтрация</Typography>
            {
                tags.length> 0 && 
                    tags.map(tag=> (
                        <div key={tag.id} className="check"><Checkbox/> <Typography component="p"  > {tag.name}</Typography></div>
                    ))
            }
        
       

        </div>
    )
}
export default Filter