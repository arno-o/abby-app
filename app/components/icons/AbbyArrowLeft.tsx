const AbbyArrowLeft = (props: { size: number, disabled?: boolean }) => {
    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 34 34" fill="none">
                <path d="M34.0018 22.2057L34.0018 33.0469L-1.29279e-07 22.2057L-2.65363e-07 10.794L34.0018 0.523437L34.0018 11.3646L4.61041 16.4999L34.0018 22.2057Z" opacity={props.disabled ? "40%" : "100%"} fill="black" />
            </svg>
        </div>
    );
}

export default AbbyArrowLeft;