
export default function Navbar() {
    return (
        <div className="position-fixed z-1 w-100 navbar-pos">
            <nav className="nav container-fluid justify-content-center">
                <div className="row nav-row">
                    <div className="col-3"><button className="btn nav-btn"><a className="nav-link text-dark" href="#Home">Home</a></button></div>
                    <div className="col-3"><button className="btn nav-btn"><a className="nav-link text-dark" href="#About">About</a></button></div>
                    <div className="col-3"><button className="btn nav-btn"><a className="nav-link text-dark" href="#Skills">Skills</a></button></div>
                    <div className="col-3"><button className="btn nav-btn"><a className="nav-link text-dark" href="#Work">Work</a></button></div>
                </div>
            </nav>
        </div>
    )
}