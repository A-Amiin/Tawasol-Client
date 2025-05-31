import { Heart, MessageCircle, Forward } from 'lucide-react';
const Posts = () => {
    return (
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
    )
}

export default Posts