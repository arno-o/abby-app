const CommunityIcon = (props: { active?: boolean }) => {
    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                <path d="M10.1038 31.8722C11.6579 23.2695 13.2134 14.6653 14.7675 6.06261C16.323 14.6653 17.8771 23.2695 19.4312 31.8722L28.6414 31.8722C25.4379 21.2477 22.233 10.6246 19.0294 6.02407e-05L10.5874 6.06098e-05C7.34294 10.6246 4.09989 21.2477 0.855469 31.8722L10.1038 31.8722Z" opacity={props.active ? "100%" : "40%"} fill="black" />
            </svg>
        </div>
    );
}

export default CommunityIcon;