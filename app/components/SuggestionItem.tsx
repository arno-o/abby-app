import { useState } from "react";
import AbbyHeart from "./icons/AbbyHeart";

const SuggestionItem = (props: { title: string, count: number }) => {
    const [liked, setLiked] = useState<boolean>(false);
    const [displayCount, setDisplayCount] = useState(props.count);

    const handleLike = () => {
        if (!liked) {
            setLiked(true);
            setDisplayCount(displayCount + 1);
        } else if (liked) {
            setLiked(false);
            setDisplayCount(displayCount - 1);
        }
    };

    return (
        <div className="flex justify-between items-center bg-abby-yellow py-4 my-2 px-4">
            <p className="text-lg">{props.title}</p>
            <div className="flex items-center gap-2">

                <button
                    onClick={handleLike}
                    className="p-1"
                    aria-label="Vote up"
                >
                    <AbbyHeart liked={liked}/>
                </button>
                <p className="text-lg">{displayCount}</p>
            </div>
        </div>
    );
}

export default SuggestionItem;