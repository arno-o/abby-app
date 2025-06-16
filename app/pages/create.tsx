import NavBar from "~/components/NavBar";
import CalendarIcon from "~/components/icons/CalendarIcon";
import ClockIcon from "~/components/icons/ClockIcon";
import AbbyArrowSelect from "~/components/icons/AbbyArrowSelect";
import Button from "~/components/Button";
import SubmitPopup from "~/components/SubmitPopup";

import { useState } from "react";

const Create = () => {

    const date = new Date().toISOString().split('T')[0];
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({
        title: false,
        description: false
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            title: title.trim() === "",
            description: description.trim() === ""
        };

        setErrors(newErrors);

        if (newErrors.title || newErrors.description) {
            return;
        }

        setShowSuccess(true);

        setTitle("");
        setDescription("");
    };

    const isFormValid = title.trim() !== "" && description.trim() !== "";

    return (
        <>
            {showSuccess && (
                <SubmitPopup
                    onClose={() => setShowSuccess(false)}
                />
            )}

            <div className="px-4 py-8">
                <div className="flex flex-row gap-3 items-center">
                    <h2 className="text-3xl mb-1 font-bold text-abby-purple">Plan your event</h2>
                    <CalendarIcon size={28} color="#B97BD0" />
                </div>
                <p className="text-lg mb-4">Use one of the Abby spaces to create your own event from birthday parties to music shows. The space is yours!</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className="flex flex-col mb-2">
                        <label htmlFor="title" className="text-2xl font-semibold pb-1 text-abby-purple">Title</label>
                        <div className="relative flex items-center">
                            <input
                                placeholder="Title of your event"
                                id="title"
                                name="title"
                                type="text"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    setErrors({ ...errors, title: false });
                                }}
                                className={`p-3 pr-12 border-2 ${errors.title ? "border-abby-orange" : "border-black"} text-lg placeholder:italic placeholder:text-base w-full focus:outline-none focus:border-abby-purple`}
                            />
                        </div>
                        {errors.title && (
                            <p className="text-abby-orange text-base mt-1">Please enter a title</p>
                        )}
                    </div>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="description" className="text-2xl font-semibold pb-1 text-abby-purple">Description</label>
                        <div className="relative flex items-center">
                            <textarea
                                placeholder="Discription of your event"
                                id="description" name="description"
                                rows={4}
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                    setErrors({ ...errors, description: false });
                                }}
                                className={`p-3 pr-12 border-2 ${errors.description ? " border-abby-orange" : "border-black"} text-lg placeholder:text-base placeholder:italic w-full focus:outline-none focus:border-abby-purple`} />
                        </div>
                        {errors.description && (
                            <p className="text-abby-orange text-base mt-1">Please enter a description</p>
                        )}
                    </div>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="room" className="text-2xl font-semibold pb-1 text-abby-purple">Room</label>
                        <div className="relative flex items-center justify-between p-3 pr-5 border-2 border-black text-lg w-full focus:outline-none focus:border-abby-purple">
                            <select name="room" id="room" className="appearance-none w-full h-full focus:outline-none">
                                <option value="living">Living</option>
                                <option value="salon">Salon</option>
                                <option value="atelier">Atelier</option>
                                <option value="gallery">Gallery</option>
                            </select>
                            <AbbyArrowSelect />
                        </div>
                    </div>
                    <div className="flex flex-row mb-2 justify-between">
                        <div className="flex flex-col">
                            <label htmlFor="date" className="text-2xl font-semibold pb-1 text-abby-purple">Date</label>
                            <div className="relative flex items-center appearance-none p-3 border-2 border-black text-lg placeholder:italic placeholder:text-base w-fit focus:outline-none focus:border-abby-purple">
                                <input placeholder="dd-mm-yyyy" id="date" name="date" type="date" defaultValue={date} className="appearance-none placeholder:italic placeholder:text-base w-fit focus:outline-none" />
                                <CalendarIcon size={24} color="#000000" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="time" className="text-2xl font-semibold pb-1 text-abby-purple">Time</label>
                            <div className="relative flex items-center appearance-none p-3 border-2 border-black text-lg placeholder:italic placeholder:text-base w-fit focus:outline-none focus:border-abby-purple">
                                <input placeholder="00:00" id="time" name="time" type="time" defaultValue="12:00" className="appearance-none placeholder:italic placeholder:text-base w-fit focus:outline-none focus:border-abby-purple" />
                                <ClockIcon size={30} />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={`my-4 ${!isFormValid ? "opacity-50" : ""}`}>
                        <Button arrow={true} color="green">Submit Idea</Button>
                    </button>
                </form >
            </div >
            <NavBar />
        </>
    );
}

export default Create;