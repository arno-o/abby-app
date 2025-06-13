import LocationIcon from "./icons/Location";
import BookmarkIcon from "./icons/BookmarkIcon";
import AbbyArrowTilted from "./icons/AbbyArrowTilted";

const ScheduleCard = (props: { timespan: string, title: string, location: string, image_url: string; bookmarked?: boolean; type: string }) => {
    return (
        <div className={`flex flex-col my-4 p-4 gap-4 ${props.type == 'activity' ? "bg-abby-green" : "bg-abby-purple"}`}>
            <img src={`app/assets/img/schedule/schedule_item_${props.image_url}.png`} />
            <div className="flex justify-between text-xl">
                <div className="flex flex-col gap-2">
                    <div className={`${props.type == "activity" ? "text-[#B8E6D5]": "text-[#783690]"}`}>
                        <span className="font-bold">{props.timespan}</span>
                    </div>
                    <p className="text-2xl">{props.title}</p>
                    <div className={`flex items-center gap-2 ${props.type == "activity" ? "text-[#B8E6D5]": "text-[#783690]"}`}>
                        <LocationIcon color={props.type == "activity" ? "#B8E6D5": "#783690"}/>
                        {props.location}
                    </div>
                </div>
                <div className="flex flex-col justify-between py-2">
                    <BookmarkIcon {...props.bookmarked ? { filled: true } : {}} />
                    <AbbyArrowTilted />
                </div>
            </div>
        </div>
    );
}

export default ScheduleCard;