import { useState } from "react";
import AbbyArrowVote from "./icons/AbbyArrowDown";

const SuggestionItem = (props: { title: string, count: number }) => {
    const [vote, setVote] = useState<'up' | 'down' | null>(null);
    const [displayCount, setDisplayCount] = useState(props.count);

    const handleUpVote = () => {
        if (vote === 'up') {
            // Clicking up arrow when already upvoted: unvote
            setVote(null);
            setDisplayCount(displayCount - 1);
        } else if (vote === 'down') {
            // Clicking up arrow when downvoted: change vote to up
            setVote('up');
            setDisplayCount(displayCount + 2); // +1 to negate previous downvote, +1 for new upvote
        } else {
            // No vote yet (vote is null): upvote
            setVote('up');
            setDisplayCount(displayCount + 1);
        }
    };

    const handleDownVote = () => {
        if (vote === 'down') {
            // Clicking down arrow when already downvoted: unvote
            setVote(null);
            setDisplayCount(displayCount + 1);
        } else if (vote === 'up') {
            // Clicking down arrow when upvoted: change vote to down
            setVote('down');
            setDisplayCount(displayCount - 2); // -1 to negate previous upvote, -1 for new downvote
        } else {
            // No vote yet (vote is null): downvote
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
                {displayCount}
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