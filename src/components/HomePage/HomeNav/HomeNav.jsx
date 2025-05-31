import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
const HomeNav = () => {
    return (
        <div className="logo-container">
            <div className="logo">
                <img src="../public/Images/logo.png" alt="Logo" className="" />
            </div>
            <nav className="links">
                {[
                    ['Home', '/home'],
                    ['Messages', '/Messages'],
                    ['Notifications', '/Notifications'],
                ].map(([title, url], idx) => (
                    <Link to={url} className="nav-item" key={url}>
                        {title}
                    </Link>
                ))}
            </nav>
            <div className="notification-user">
                <Link to="/Notifications" className="notification">
                    <div className="notification">
                        <button
                            className="notification-btn"
                            aria-label="View notifications"
                            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                        >
                            <Bell className="bell" />
                            <span className="notification-count">3</span>
                        </button>
                    </div>
                </Link>
                <Link to="/Profile" className="user-profile">
                    <div className="user">
                        <img src="../public/Images/user.jpg" alt="User" className="user-image" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HomeNav;