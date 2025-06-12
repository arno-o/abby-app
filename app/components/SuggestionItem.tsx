import { useState } from "react";
import AbbyArrowVote from "./icons/AbbyArrowDown";

const SuggestionItem = (props: { title: string, count: number }) => {
    const [vote, setVote] = useState<'up' | 'down' | null>(null);
    const [displayCount, setDisplayCount] = useState(props.count);

    const handleUpVote = () => {
        if (vote === 'up') {
            setVote(null);
            setDisplayCount(displayCount - 1);
        } else if (vote === 'down') {
            setVote('up');
            setDisplayCount(displayCount + 2);
        } else {
            setVote('up');
            setDisplayCount(displayCount + 1);
        }
    };

    const handleDownVote = () => {
        if (vote === 'down') {
            setVote(null);
            setDisplayCount(displayCount + 1);
        } else if (vote === 'up') {
            setVote('down');
            setDisplayCount(displayCount - 2);
        } else {
            setVote('down');
            setDisplayCount(displayCount - 1);
        }
    };

    return (
        <div className="flex justify-between items-center bg-abby-yellow py-4 my-2 px-4">
            <p className="text-lg">{props.title}</p>
            <div className="flex items-center gap-2">

                <button
                    onClick={handleUpVote}
                    className="p-1"
                    aria-label="Vote up"
                >
                    <AbbyArrowVote position="up" filled={vote === 'up'} />
                </button>
                <p className="text-lg">{displayCount}</p>
                <button
                    onClick={handleDownVote}
                    className="p-1"
                    aria-label="Vote down"
                >
                    <AbbyArrowVote position="down" filled={vote === 'down'} />
                </button>
            </div>
        </div>
    );
}

export default SuggestionItem;