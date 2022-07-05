import {Link} from 'react-router-dom'

function Nav(){

    return(
        <nav className="navbar navbar-expand-lg bg-dark text-white">
            <div className="container-fluid">
                <a className="navbar-brand">IMDB</a>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to='/' className="nav-link" >Home</Link>
                    </li>
                    <li >
                    <Link to='/about' className="nav-link">About</Link>
                    </li>
                    <li >
                    <Link to='/movie' className="nav-link">Movie</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;