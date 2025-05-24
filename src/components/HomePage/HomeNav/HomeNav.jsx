import { Bell } from "lucide-react";
const HomeNav = () => {
    return (
        <div className="logo-container">
            <div className="logo">
                <img src="../public/Images/logo.png" alt="Logo" className="" />
            </div>
            <nav className="links">
                {[
                    ['Home', '/dashboard'],
                    ['Messages', '/Messages'],
                    ['Notifications', '/Notifications'],
                ].map(([title, url]) => (
                    <a href={url} className="nav-item">{title}</a>
                ))}
            </nav>
            <div className="notification-user">
                <div className="notification">
                    <Bell className="bell" />
                    <span className="notification-count">3</span>
                </div>
                <div className="user">
                    <img src="../public/Images/user.jpg" alt="User" className="user-image" />
                </div>
            </div>
        </div>
    )
}

export default HomeNav;