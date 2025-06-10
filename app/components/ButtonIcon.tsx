import { Link } from "react-router";

export default function ButtonIcon(props: { link?: string, disabled?: boolean, children: React.ReactNode }) {
    return (
        <div className="p-2 cursor-poiner w-fit transition-all">
            {
                props.disabled ? (
                    props.children
                ) : (
                props.link ? (
                    <Link to={props.link} viewTransition>
                        {props.children}
                    </Link>
                ) : (
                    props.children
                )
                )
            }

        </div>
    );
}