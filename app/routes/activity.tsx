import { Link } from "react-router";
import Button from "~/components/Button";
import type { Route } from "./+types/activity";
import { scheduleActivityItems } from "../data/data";

import BookmarkIcon from "~/components/icons/BookmarkIcon";
import AbbyArrowLeft from "~/components/icons/AbbyArrowLeft";

export function loader({ params }: Route.LoaderArgs) {
    const scheduleId = params.activityId;
    const itemId = parseInt(scheduleId);
    return { itemId };
}

export default function Activity({ loaderData }: Route.ComponentProps) {
    if (!loaderData) { return null; }
    const item = scheduleActivityItems.items[loaderData.itemId];
    
    return(
        <>
            <div className={`${item.type == "activity" ? "bg-abby-green" : "bg-abby-purple"} p-5 flex flex-col gap-5`}>
                <Link to={"/schedule"} viewTransition>
                    <AbbyArrowLeft size={40}/>
                </Link>
                <img className="w-full" src={`../app/assets/img/schedule/schedule_item_${item.image_url}.png`} />

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