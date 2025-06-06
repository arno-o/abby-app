import { Link } from 'react-router';
import AbbyArrow from '../assets/img/icons/AbbyArrow.svg';

export default function Button(props:{ link: string, arrow: boolean, children: React.ReactNode}) {
    return(
        <Link to={props.link} className="flex gap-4 py-4 px-8 bg-abby-blue text-2xl text-black capitalize">
            <div>{props.children}</div>
            {props.arrow && <img src={AbbyArrow} alt="Arrow Icon" />}
        </Link>
    );
}