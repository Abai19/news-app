import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { API } from "../api";
import Header from "./Header";

function SingleNew() {
    const { id } = useParams(); 
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const [singleNew, setSingleNew] = useState([])
    useEffect(() => {
        if (!token) {
            navigate("/login")
        } else {
            getSingleNew()
        }
    }, [])
    const getSingleNew = async () => {
        const response = await fetch(`${API.posts.newsList}${id}/`, {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
        })
        const list = await response.json()
        console.log(list);
        if (list) {
            setSingleNew(list)
        }

    }
    console.log(singleNew)
    return (
        <div>
            <Header />
            {singleNew.text}
        </div>
    )
}
export default SingleNew