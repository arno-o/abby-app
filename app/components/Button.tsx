import AbbyArrow from '../assets/img/icons/AbbyArrow.svg';

export default function Button(props:{ arrow: boolean, color: string, children: React.ReactNode}) {
    const abbyColor = `bg-abby-${props.color}`;

    return(
        <div className={`flex gap-4 py-4 px-8 ${abbyColor} text-2xl text-black capitalize`}>
            <div>{props.children}</div>
            {props.arrow && <img src={AbbyArrow} alt="Arrow Icon" />}
        </div>
    );
}