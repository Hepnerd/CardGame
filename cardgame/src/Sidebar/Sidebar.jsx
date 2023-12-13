import './Sidebar.css'
import logo from '../logo192.png'

export default function Sidebar() {
    return (
        <nav className="sidebar-navigation">
	    <ul>
            <li className="active">
                <img src={logo} className="App-logo" />
                <span className="tooltip">Home</span>
            </li>
            <li>
                <img src={logo} className="App-logo" />
                <span className="tooltip">Start Game</span>
            </li>
            <li>
                <img src={logo} className="App-logo" />
                <span className="tooltip">Current Games</span>
            </li>
            <li>
                <img src={logo} className="App-logo" />
                <span className="tooltip">Previous Games</span>
            </li>
            <li>
                <img src={logo} className="App-logo" />
                <span className="tooltip">Card List</span>
            </li>
            <li>
                <img src={logo} className="App-logo" />
                <span className="tooltip">Create Deck</span>
            </li>
            <li>
                <img src={logo} className="App-logo" />
                <span className="tooltip">Login/Logout</span>
            </li>
        </ul>
    </nav>
    )
}