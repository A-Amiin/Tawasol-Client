import { useSelector } from 'react-redux';
import { Heart, MessageCircle, Forward } from 'lucide-react';

const Posts = () => {
    const posts = useSelector((state) => state.posts);

    return (
        <div className="posts">
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <div className="post-header">
                        <img src={post.avatar} alt="User" className="user-image" />
                        <div className="user-data">
                            <span className="username">{post.username}</span>
                            <span className="post-time">{post.time}</span>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>{post.text}</p>
                        {post.image && <img src={post.image} alt="Post" className="post-image" />}
                    </div>
                    <div className="post-actions">
                        <div className="left">
                            <button className="like-button"><Heart className="action-icon" /> {post.likes}</button>
                            <button className="comment-button"><MessageCircle className="action-icon" /> {post.comments}</button>
                        </div>
                        <div className="right">
                            <button className="share-button"><Forward className="action-icon" /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Posts;