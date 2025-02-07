import React from 'react'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <ul className="pt-3 list-unstyled d-flex justify-content-evenly gap-lg-2 row-gap-2 flex-column flex-lg-row text-center">
                    <li><a className="text-decoration-none" href="/Privacy Policy">Privacy Policy</a></li>
                    <li><a className="text-decoration-none" href="Terms & Conditions">Terms & Conditions</a></li>
                    <li><a className="text-decoration-none" href="Help Center">Help Center</a></li>
                </ul>
                <p className="text-center text-white pb-2">Created By <a className="text-decoration-none" href="https://www.linkedin.com/in/ahmed-amin-a15981248/" target="_blank">Ahmed Amin</a> &copy; 2025 Tawasol. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;