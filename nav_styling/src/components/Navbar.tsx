import {useState} from 'react'



function Navbar() {
    const [active, setActive] = useState(true)
  return (
    <>
    <nav className={active ? 'active' : ''} id="nav">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <button className="icon" id="toggle">
            <div className="line line1"></div>
            <div className="line line2"></div>

        </button>
    </nav>
    </>
  )
}
export default Navbar