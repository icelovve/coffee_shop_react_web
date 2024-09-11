import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                <Link to="/" className="navbar-brand px-lg-4 m-0">
                    <h1 className="m-0 display-4 text-uppercase text-white">KOPPEE</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto p-4">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/page/about" className="nav-item nav-link">About</Link>
                        <Link to="/page/service" className="nav-item nav-link">Service</Link>
                        <Link to="/page/menu" className="nav-item nav-link">Menu</Link>
                        <Link to="/page/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar