// ~/components/SuccessPopup.tsx
import { useEffect } from "react";
import CheckIcon from "./icons/CheckIcon";
import AbbyCross from "./icons/AbbyCross";

export default function SuccessPopup(props: { onClose: () => void }) {
    const { onClose } = props;
    const duration = 6000;

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return (
        <div className="fixed flex inset-0 items-center justify-center bg-black/70 z-10">
            <div className="bg-white py-8 px-3 shadow-lg w-11/12 max-w-md">
                <button className="flex justify-end w-full pr-2 pb-4" onClick={onClose}>
                    <AbbyCross size={32} />
                </button>
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-abby-purple mb-4 text-3xl">Idea Submitted</h2>
                    <CheckIcon />
                    <p className="text-center text-lg mb-2 text-bold">We will update you in your mailbox after reviewing the idea.</p>
                    <p className="text-gray-600 text-center text-base">Thank you for your participation! Abby will review your submission and evaluate wether it's possible to organise this.</p>
                </div>
            </div>
        </div>
    );
}