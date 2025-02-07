import React, { useState } from "react";
import { motion } from "framer-motion";
import LoginComponent from "../components/Login/LogInComponent";
import RegisterComponent from "../components/Register/RegisterComponent";

const JoinUsPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="background-page ">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <motion.div
                    key={isLogin ? "login" : "register"}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="auth-container"
                >
                    {isLogin ? <LoginComponent /> : <RegisterComponent />}
                </motion.div>
                <button
                    className="btn btn-outline-primary mt-3"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? "Create an Account" : "Already have an account? Login"}
                </button>
            </div>
        </div>
    );

};

export default JoinUsPage;
