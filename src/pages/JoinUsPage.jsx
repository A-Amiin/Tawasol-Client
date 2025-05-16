import React, { useState } from "react";
import { motion } from "framer-motion";
import LoginComponent from "../components/Login/LogInComponent";
import RegisterComponent from "../components/Register/RegisterComponent";

const JoinUsPage = () => {
    const [isRegister, setIsRegister] = useState(true);

    return (
        <div className="background-page d-flex align-items-center flex-column justify-content-center">

            <motion.div
                key={isRegister ? "register" : "login"}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="container-lg auth-container"
            >
                {isRegister ? <RegisterComponent /> : <LoginComponent />}
            </motion.div>
            <button
                className="btn btn-outline-primary mt-3"
                onClick={() => setIsRegister(!isRegister)}
            >
                <span> {isRegister ? "Already have an account" : "Create one"}</span>
            </button>

        </div>
    );

};

export default JoinUsPage;
