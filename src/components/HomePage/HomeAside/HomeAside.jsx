import { Heart, MessageCircleMore } from "lucide-react"
const HomeAside = () => {
    return (
        <div className="HomeAside-wraperr d-flex flex-column gap-3">
            <div className="HomeAside-Trending MyCard mb-3 p-2 d-flex flex-column gap-2">
                <h6 className="HomeAside-Trending-Title">Trending Topics</h6>
                <div className="HomeAside-Trending-List d-flex flex-column gap-3">
                    <div className="HomeAside-Trending-Item d-flex flex-column">
                        <span className="HomeAside-Trending-Item-Title">#WebDevelopment</span>
                        <span className="HomeAside-Trending-Item-Count">1.23K Posts</span>
                    </div>
                    <div className="HomeAside-Trending-Item d-flex flex-column">
                        <span className="HomeAside-Trending-Item-Title">#ReactJS</span>
                        <span className="HomeAside-Trending-Item-Count">2.45K Posts</span>
                    </div>
                    <div className="HomeAside-Trending-Item d-flex flex-column">
                        <span className="HomeAside-Trending-Item-Title">#JavaScript</span>
                        <span className="HomeAside-Trending-Item-Count">3.67K Posts</span>
                    </div>
                </div>
            </div>
            <div className="HomeAside-Contactions MyCard mb-3 p-2 gap-3">
                <h6 className="HomeAside-Contactions-Title">Suggested Contacts</h6>
                <div className="post-header d-flex justify-content-between">
                    <div className="user-data d-flex">
                        <img src="../public/Images/user.jpg" alt="User" className="user-image" />
                        <div className="info d-flex flex-column px-3">
                            <span className="username">Ahmed Amin</span>
                            <span className="post-time">UI & UX Designer</span>
                        </div>
                    </div>
                    <button className="btnn">Follow</button>
                </div>
                <div className="post-header d-flex justify-content-between">
                    <div className="user-data d-flex">
                        <img src="../public/Images/user.jpg" alt="User" className="user-image" />
                        <div className="info d-flex flex-column px-3">
                            <span className="username">Shehab Majed</span>
                            <span className="post-time">Frontend Developer</span>
                        </div>
                    </div>
                    <button className="btnn">Follow</button>
                </div>
            </div>
            <div className="HomeAside-Recent-Activity MyCard mb-3 p-2 gap-3">
                <h6 className="HomeAside-Recent-Activity-Title">Recent Activity</h6>
                <div className="HomeAside-Recent-Activity-List d-flex flex-column px-2 gap-3">
                    <div className="HomeAside-Recent-Activity-Item d-flex align-items-center">
                        <div className="icon-wrapper d-flex align-items-center justify-content-center">
                            <Heart className="action-icon" />
                        </div>
                        <div className="Activity-info d-flex flex-column px-3">
                            <span className="activity-text"><span className="name">Sarah Khalil</span> liked your post</span>
                            <span className="activity-time">2 mins ago</span>
                        </div>
                    </div>

                    <div className="HomeAside-Recent-Activity-Item d-flex align-items-center">
                        <div className="icon-wrapper d-flex align-items-center justify-content-center">
                            <MessageCircleMore className="action-icon" />
                        </div>
                        <div className="Activity-info d-flex flex-column px-3">
                            <span className="activity-text"> <span className="name">Ahmed Aziz</span> commented on your post</span>
                            <span className="activity-time">5 mins ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAside