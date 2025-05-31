import { Image, Video, Link } from "lucide-react"
const WhatsInYourMind = () => {
    return (
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
    )
}

export default WhatsInYourMind