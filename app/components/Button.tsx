import AbbyArrow from '../assets/img/icons/AbbyArrow.svg';

export default function Button(props:{ arrow: boolean, children: React.ReactNode}) {
    return(
        <div className="flex gap-4 py-4 px-8 bg-abby-blue text-2xl text-black capitalize">
            <div>{props.children}</div>
            {props.arrow && <img src={AbbyArrow} alt="Arrow Icon" />}
        </div>
    );
}