"use client";

import { TwitterShareButton, XIcon } from "react-share";

export default function ShareButton() {
    return (
        <TwitterShareButton
        url="https://sake-journey.vercel.app/"
        title="さけ旅"
        hashtags={["さけ旅"]}
        >
        <XIcon size={32} />
    </TwitterShareButton>
    );
}

