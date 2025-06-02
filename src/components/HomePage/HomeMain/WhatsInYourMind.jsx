import { useState } from "react";
import { Image, Video, Link } from "lucide-react";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../../../redux/thunks/CreatePost';

function MyVerticallyCenteredModal({ show, onHide }) {
    const [postContent, setPostContent] = useState("");
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.posts);

    const handlePost = () => {
        if (!postContent.trim()) return;

        dispatch(createPost(postContent))
            .unwrap()
            .then(() => {
                setPostContent("");
                onHide();
            })
            .catch((err) => {
                console.error("Error creating post:", err);
            });
    };
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Create a New Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea
                    className="custom-modal-textarea"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="What's on your mind?"
                    rows={6}
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        resize: "none",
                        marginBottom: "1rem"
                    }}
                ></textarea>

                <div className="modal-icons-row" style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "0.5rem 0",
                    borderTop: "1px solid #eee"
                }}>
                    <div className="icon" style={{ cursor: "pointer", color: "#547EB0", display: "flex", alignItems: "center" }}>
                        <Image style={{ marginRight: ".5rem" }} />
                        <span>Image</span>
                    </div>
                    <div className="icon" style={{ cursor: "pointer", color: "#547EB0", display: "flex", alignItems: "center" }}>
                        <Video style={{ marginRight: ".5rem" }} />
                        <span>Video</span>
                    </div>
                    <div className="icon" style={{ cursor: "pointer", color: "#547EB0", display: "flex", alignItems: "center" }}>
                        <Link style={{ marginRight: ".5rem" }} />
                        <span>Link</span>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={handlePost} disabled={loading}>
                    {loading ? "Posting..." : "Post"}
                </Button>
                <Button className="post-button" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const WhatsInYourMind = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="whats-in-your-mind">
            <div className="upper">
                <div className="user">
                    <img src="/Images/user.jpg" alt="User" className="user-image" />
                </div>
                <textarea
                    className="whats-in-your-mind-textarea"
                    placeholder="Share your thoughts..."
                    onClick={() => setModalShow(true)}
                ></textarea>
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

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default WhatsInYourMind;