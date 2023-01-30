import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
function Header (){
    return (
        <div className="header">
        <div className="menu">
            <SearchIcon/>
            <AccountBoxIcon />
            <MenuIcon/>
        </div>
        <div className="title">
        <h1>Новости</h1>
        </div>
        </div>
    )
}
export default Header