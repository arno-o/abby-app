import { Link } from 'react-router';

import AbbyArrowRight from "~/components/icons/AbbyArrowRight";

export default function ButtonLink(props:{ link: string, arrow: boolean, children: React.ReactNode}) {
    return(
        <Link to={props.link} className="flex items-center gap-4 py-4 px-8 bg-abby-blue text-2xl text-black capitalize" viewTransition>
            <div>{props.children}</div>
            {props.arrow && <AbbyArrowRight size={20}/>}
        </Link>
    );
}