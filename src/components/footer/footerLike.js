import React, { useState } from "react";

export const LikeButton = () => {
    const [likes, setLikes] = useState(1);
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        if (isClicked) {
            setLikes(likes + 1);
        } else {
            setLikes(likes + 1);
        }
        setIsClicked(!isClicked);
    };
    return (
        <span className="footerLikeIcon" onClick={handleClick}>
            <iconify-icon icon="flat-color-icons:like"></iconify-icon>{" "}
            {`${likes}`}
        </span>
    );
};


