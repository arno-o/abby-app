const CreateIcon = (props: { active?: boolean }) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 34" fill="none">
                <g clip-path="url(#clip0_1105_4329)">
                    <path d="M0.625 12.3784C6.26764 12.9556 11.9116 13.5341 17.5543 14.1113C23.1609 13.5341 28.7676 12.9556 34.3742 12.3784V21.2522L17.5543 19.5766C11.9116 20.1098 6.26764 20.6431 0.625 21.1763V12.3784Z" opacity={props.active ? "100%" : "40%"} fill="black" />
                    <path d="M13.1228 33.7492C13.7 28.1066 14.2785 22.4626 14.8557 16.82C14.2785 11.2133 13.7 5.60665 13.1228 0H21.9967C21.3423 6.5686 20.9755 10.2514 20.3211 16.82C20.8543 22.4626 21.3875 28.1066 21.9207 33.7492H13.1228Z" opacity={props.active ? "100%" : "40%"} fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_1105_4329">
                        <rect width="33.7492" height="33.7492" fill="white" transform="translate(0.625)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default CreateIcon;