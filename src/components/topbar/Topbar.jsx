import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./topbar.css";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">inkxk-admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img
                        src="https://styles.redditmedia.com/t5_bxda5/styles/profileIcon_wutyc70zony41.jpg"
                        alt="avatar"
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
