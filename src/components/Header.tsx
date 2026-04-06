import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                        src="/src/assets/sigla-av-metal.jpg"
                        className="img-fluid"
                        style={{ width: "150px" }}
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Acasă
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Porți
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink className="dropdown-item" to="/porti-aluminiu">
                                        Porți din aluminiu
                                    </NavLink>
                                </li>

                                <li><hr className="dropdown-divider" /></li>

                                <li>
                                    <NavLink className="dropdown-item" to="/porti-metalice">
                                        Porți metalice
                                    </NavLink>
                                </li>

                                <li><hr className="dropdown-divider" /></li>

                                <li>
                                    <NavLink className="dropdown-item" to="/porti-garduri-zincate">
                                        Porți și garduri zincate
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/usi-garaj">
                                Uși de garaj
                            </NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ferestre-usi-termopan">
                                Ferestre si usi din termopan
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/automatizari-bft">
                                Automatizari BFT
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/balustrade-metalice">
                                Balustrade metalice
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;