import { Link } from "react-router-dom"
import logo from "../../assets/elogo.svg"

const Navbar = () => {
  return (
    <nav className="nav">
        <img src={logo} alt="" />
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
        </ul>
        <button className="btn">Request Invite</button>
    </nav>
  )
}

export default Navbar