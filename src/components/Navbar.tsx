import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar cloud">
      <ul>
        <li className="nav-title"><Link to="/">VoraciousCutie</Link></li>
        {/* <li><Link to="/extra">Extra</Link></li> */}
      </ul>
    </nav>
  )
}

export default Navbar