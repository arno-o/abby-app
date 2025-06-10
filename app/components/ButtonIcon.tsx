import { Link } from "react-router";

export default function ButtonIcon(props: { link: string, children: React.ReactNode }) {

    return (
        <div className="p-2 hover:bg-slate-200 poiner w-fit transition-all">
            <Link to={props.link}>
                {props.children}
            </Link>
        </div>
    );
}