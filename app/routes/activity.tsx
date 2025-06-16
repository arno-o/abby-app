import Button from "~/components/Button";
import type { Route } from "./+types/activity";
import { Link, useNavigate } from "react-router";
import { scheduleActivityItems } from "../data/data";

import BookmarkIcon from "~/components/icons/BookmarkIcon";
import AbbyArrowLeft from "~/components/icons/AbbyArrowLeft";

import scheduleImg1 from "~/assets/img/schedule/schedule_item_1.png";
import scheduleImg2 from "~/assets/img/schedule/schedule_item_2.png";
import scheduleImg3 from "~/assets/img/schedule/schedule_item_3.png";
import scheduleImg4 from "~/assets/img/schedule/schedule_item_4.png";
import scheduleImg5 from "~/assets/img/schedule/schedule_item_5.png";
import scheduleImg6 from "~/assets/img/schedule/schedule_item_6.png";

export function loader({ params }: Route.LoaderArgs) {
    const scheduleId = params.activityId;
    const itemId = parseInt(scheduleId);
    return { itemId };
}

export default function Activity({ loaderData }: Route.ComponentProps) {
    if (!loaderData) { return null; }
    const item = scheduleActivityItems.items[loaderData.itemId];

    const scheduleImages = [scheduleImg1, scheduleImg2, scheduleImg3, scheduleImg4, scheduleImg5, scheduleImg6];
    
    const navigate = useNavigate();

    return(
        <>
            <div className={`${item.type == "activity" ? "bg-abby-green" : "bg-abby-purple"} p-5 flex flex-col gap-5`}>
                <button onClick={() => navigate(-1)}>
                    <AbbyArrowLeft size={40}/>
                </button>
                <img className="w-full" src={scheduleImages[loaderData.itemId]} alt={item.title} />

                <div className="flex items-center justify-between">
                    <p className="text-4xl">{item.title}</p>
                    <BookmarkIcon />
                </div>
            </div>

            <div className="p-5 flex flex-col gap-3">
                <h2 className="text-2xl">{item.subtitle}</h2>
                <p className="">{item.description}</p>
            
                <Button color="yellow" arrow={true}>Register now</Button>
            </div>

            
        </>
    );
}