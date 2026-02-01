import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">MyPortfolio</Link></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/extra">Extra</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar