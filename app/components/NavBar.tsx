import LiveIcon from "./icons/navbar/Live";
import CreateIcon from "./icons/navbar/Create";
import ProfileIcon from "./icons/navbar/Profile";
import ScheduleIcon from "./icons/navbar/Schedule";
import CommunityIcon from "./icons/navbar/Community";

import React from "react";
import { Link, useLocation } from "react-router";

const navData = {
    items: [
        {
            label: "Live",
            linkTo: "live",
            icon: <LiveIcon />
        },
        {
            label: "Community",
            linkTo: "community",
            icon: <CommunityIcon />
        },
        {
            label: "Create",
            linkTo: "create",
            icon: <CreateIcon />
        },
        {
            label: "Schedule",
            linkTo: "schedule",
            icon: <ScheduleIcon />
        },
        {
            label: "Profile",
            linkTo: "profile",
            icon: <ProfileIcon />
        },
    ]
}

const NavBar = () => {
    const defaultStyle = "flex flex-col self-end items-center gap-2 border-t-5 pt-4"
    const location = useLocation();

    const isActive = (link: string) => {
        if (location.pathname == link) {
            return true;
        } else { return false; }
    }

    return (
        <div className="flex justify-between content-end px-[18px] pb-4 bg-abby-blue w-full z-5 fixed bottom-0">
            {navData.items.map((item) => {

                const itemIsActive = isActive(`/${item.linkTo}`);

                return (
                    <Link key={item.linkTo} to={`/${item.linkTo}`} viewTransition>
                        <div className={`${defaultStyle} ${itemIsActive ? "border-black" : "border-abby-blue"}`}>
                            {React.cloneElement(item.icon, { active: itemIsActive })}
                            <p className={itemIsActive ? "" : "opacity-30"}>{item.label}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default NavBar;