import { useState } from "react";

const BookmarkIcon = (props: { filled?: boolean }) => {
    const [bookmarked, setBookmarked] = useState(false);

    const handleBookmark = () => {
        if (!bookmarked) { setBookmarked(true) } else { setBookmarked(false) }
    }

    return (
        <svg onClick={handleBookmark} xmlns="http://www.w3.org/2000/svg" width="20" height="27" viewBox="0 0 20 27" fill={bookmarked ? "#FFBF4E" : "none"}>
            <path d="M19 1V25.0176L10.5938 18.8076L10 18.3682L9.40625 18.8076L1 25.0176V1H19Z" stroke="black" strokeWidth="2" />
        </svg>
    );
}

export default BookmarkIcon;