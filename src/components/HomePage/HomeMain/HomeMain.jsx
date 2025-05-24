import { Image, Video, Link, Heart, MessageCircle, Forward } from 'lucide-react';
const HomeMain = () => {
    return (
        <div className="HomeMain-wraperr">
            <div className="HomeMain-container">
                <div className="whats-in-your-mind">
                    <div className="upper">
                        <div className="user">
                            <img src="../public/Images/user.jpg" alt="User" className="user-image" />
                        </div>
                        <textarea className="whats-in-your-mind-textarea" placeholder="Share your thoughts..."></textarea>
                    </div>
                    <div className="lower">
                        <div className="icons">
                            <div className="icon">
                                <Image className="icon-image" />
                                <span className="icon-text">Image</span>
                            </div>
                            <div className="icon">
                                <Video className="icon-image" />
                                <span className="icon-text">Video</span>
                            </div>
                            <div className="icon">
                                <Link className="icon-image" />
                                <span className="icon-text">Link</span>
                            </div>
                        </div>
                        <button className="post-button">Post</button>
                    </div>
                </div>
                <div className="posts">
                    <div className="post">
                        <div className="post-header">
                            <img src="../public/Images/user.jpg" alt="User" className="user-image" />
                            <div className="user-data">
                                <span className="username">Ahmed Amin</span>
                                <span className="post-time">2 hours ago</span>
                            </div>
                        </div>
                        <div className="post-content">
                            <p>Just finished my latest project! Here's a sneak peek of the UI design I've been working on. What do you think? 🎨
                                #WebDesign #UI</p>
                            <img src="../public/Images/post1.png" alt="Post" className="post-image" />
                        </div>
                        <div className="post-actions">
                            <div className="left">
                                <button className="like-button"><Heart className="action-icon" /> 247</button>
                                <button className="comment-button"><MessageCircle className="action-icon" /> 23</button>
                            </div>
                            <div className="right">
                                <button className="share-button"><Forward className="action-icon" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMain