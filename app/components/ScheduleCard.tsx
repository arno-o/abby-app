import LocationIcon from "./icons/Location";
import BookmarkIcon from "./icons/BookmarkIcon";
import AbbyArrowTilted from "./icons/AbbyArrowTilted";

const ScheduleCard = (props: { timespan: string, title: string, location: string, image_url: string; bookmarked?: boolean }) => {
    return (
        <div className="flex flex-col bg-abby-green my-4 p-4 gap-4">
            <img src={`app/assets/img/schedule/schedule_item_${props.image_url}.png`} />
            <div className="flex justify-between text-xl">
                <div className="flex flex-col gap-2">
                    <div className="text-[#B8E6D5]">
                        <span className="font-bold">{props.timespan}</span>
                    </div>
                    <p className="text-2xl">{props.title}</p>
                    <div className="flex items-center gap-2 text-[#B8E6D5]">
                        <LocationIcon />
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