import Auth from "../utils/auth"

const Nav = () => {
    return (
        <header>
            <nav>
                <h1>
                    <span className="highlight">Gofit</span>
                </h1>
                <ul className="menu">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/workout">Workout</a>
                    </li>
                    <li>
                        <a href="/nutrition">Nutrition</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                <div className="auth-buttons">
                    {Auth.loggedIn() ? (
                        <button
                            onClick={Auth.logout}
                            className="signout-button"
                        >
                            <a href="#">Sign Out</a>
                        </button>
                    ) : (
                        <>
                            <button className="login-button">
                                <a href="/login">Login</a>
                            </button>
                            <button className="signup-button">
                                <a href="/signup">Sign Up</a>
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Nav;
