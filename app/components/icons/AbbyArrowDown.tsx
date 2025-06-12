const AbbyArrowVote = (props: { position?: string, filled?: boolean }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 27 28" className={props.position === "up" ? "rotate-180" : ""}>
            <path
                d="M9.44575 1.16683H1.66797L9.44575 26.8335H17.6329L25.0013 1.16683H17.2235L13.5393 23.3533L9.44575 1.16683Z"
                fill={props.filled ? "#01A468" : "none"}
                stroke={props.filled ? "none" : "#01A468"}
                strokeWidth={props.filled ? undefined : "2.5"}
            />
        </svg>
    );
}

export default AbbyArrowVote;