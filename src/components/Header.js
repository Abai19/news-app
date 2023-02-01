import { Link, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
function Header (){
    const navigate = useNavigate()
    return (
        <div className="header">
        <div className="menu">
            <SearchIcon/>
            <AccountBoxIcon onClick={()=> navigate('/userPage')} />
            <MenuIcon/>
        </div>
        <div className="title">
        <h1>Новости</h1>
        </div>
        </div>
    )
}
export default Header