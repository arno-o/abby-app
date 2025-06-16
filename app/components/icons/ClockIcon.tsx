const ClockIcon = (props: { size: number }) => {
    return (
        <svg width={props.size} height={props.size} viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2334 29.7666C25.2842 29.7666 31 24.0508 31 17C31 9.9492 25.2842 4.2334 18.2334 4.2334C11.1826 4.2334 5.4668 9.9492 5.4668 17C5.4668 24.0508 11.1826 29.7666 18.2334 29.7666Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.0739 11.1963V17.2894L22.8769 19.3205" stroke="black" stroke-width="3" stroke-linecap="square" />
        </svg>

    );
}

export default ClockIcon;