const CalendarIcon = (props: { color?: string, size: number }) => {
    return (
        <svg className="mb-1" width={props.size} height={props.size} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.93182 6.34091V26.409H26.0682V6.34091H4.93182ZM1.9375 3.875L2.58304 3.87506H28.4167L29.0625 3.87533V29.0626H28.4167H1.9375L1.9375 3.875Z" fill={props.color ? props.color : "#000000"} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 1.93794C8.28503 1.93794 9.5287 1.93794 9.5287 1.93794V4.84419C9.5287 5.37922 8.28503 5.81294 7.75 5.81294C7.21497 5.81294 6.78125 5.37922 6.78125 4.84419V1.9375C6.78125 1.9375 7.21497 1.93794 7.75 1.93794Z" fill={props.color ? props.color : "#000000"} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2492 1.93799C23.7842 1.93799 24.2179 1.9375 24.2179 1.9375V4.84424C24.2179 5.37926 23.7842 5.81299 23.2492 5.81299C22.7142 5.81299 21.5379 5.37926 21.5379 4.84424L21.5382 1.93799C21.5382 1.93799 22.7142 1.93799 23.2492 1.93799Z" fill={props.color ? props.color : "#000000"} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.81818 11.2725H28.1818V14.0906H2.81818V11.2725Z" fill={props.color ? props.color : "#000000"} />
        </svg>
    );
}

export default CalendarIcon;