import LiveIcon from "./icons/navbar/Live";
import CreateIcon from "./icons/navbar/Create";
import ProfileIcon from "./icons/navbar/Profile";
import ScheduleIcon from "./icons/navbar/Schedule";
import CommunityIcon from "./icons/navbar/Community";

import { Link } from "react-router";

const NavBar = () => {
    const defaultStyle = "flex flex-col self-end items-center gap-2 border-t-5 border-black pt-4"

    return(
        <div className="flex justify-between content-end px-12 pb-7 bg-abby-blue w-full">
            <div className={`${defaultStyle}`}>
                <LiveIcon />
                <p>Live</p>
            </div>
            <div className={`${defaultStyle}`}>
                <CommunityIcon />
                <p>Community</p>
            </div>
            <div className={`${defaultStyle}`}>
                <CreateIcon />
                <p>Create</p>
            </div>
            <div className={`${defaultStyle}`}>
                <ScheduleIcon />
                <p>Schedule</p>
            </div>
            <div className={`${defaultStyle}`}>
                <ProfileIcon />
                <p>Profile</p>
            </div>
        </div>
    );
}

export default NavBar;