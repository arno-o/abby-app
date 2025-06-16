import LocationIcon from "./icons/Location";
import BookmarkIcon from "./icons/BookmarkIcon";
import AbbyArrowTilted from "./icons/AbbyArrowTilted";

import { useState } from "react";

const ChosenSuggestion = (props: { day: string, time: string, title: string, location: string, bookmarked?: boolean }) => {

    return(
        <div className="flex justify-between bg-abby-green my-4 p-4 text-xl">
            <div className="flex flex-col gap-2">
                <div className="text-[#B8E6D5]">
                    <span className="font-bold">{props.day}</span> {props.time}
                </div>
                <p className="text-2xl">{props.title}</p>
                <div className="flex items-center gap-2 text-[#B8E6D5]">
                    <LocationIcon />
                    {props.location}
                </div>
            </div>
            <div className="flex flex-col justify-between py-2">
                <BookmarkIcon />
                <AbbyArrowTilted />
            </div>
        </div>
    );
}

export default ChosenSuggestion;