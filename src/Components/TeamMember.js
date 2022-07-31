import React from "react";

// Style
import "../Styles/TeamMember.scss";

// Social media icons
import { Facebook, Twitter, LinkedIn } from "../Svg/SocialMedia";

const TeamMember = ({ fullname, picture, job }) => {
    return (
        <div className="member">
            <div className="member-img-container">
                <img src={picture} className="member-img" alt="Team member avatar" />
                <div className="member-icons-container">
                    <Facebook className="member-icon" id="member-facebook-icon" />
                    <Twitter className="member-icon" id="member-twitter-icon" />
                    <LinkedIn className="member-icon" id="member-linkedin-icon" />
                </div>
            </div>
            <div className="member-info">
                <h5 className="member-name">{fullname}</h5>
                <p className="member-job">{job}</p>
            </div>
        </div>
    )
}

export default TeamMember;